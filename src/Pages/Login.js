import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
// import { FaTiktok } from "react-icons/fa";

import { setLog } from "../Store/logSlice/log";
import {
  loginSuccess,
  loginFailure,
  loginStart,
  setEmail as setLoginEmail,
  setPassword as setLoginPassword
} from "../Store/authSlice/auth";
import {
  setEmail,
  setPassword,
  setName,
  setDOB,
  regFailure,
  verify,
  forgot
} from "../Store/regSlice/reg";

import loginBg from "../Assets/login.jpg";
import logo from "../Assets/logo.svg";
import people from "../Assets/people.svg";
// import google from "../Assets/google.svg";
import line from "../Assets/line.svg";
// import quotes from "../Assets/quotes.svg";

import LoginForm from "../Containers/LoginForm";
import SignupForm from "../Containers/SignupForm";
import { completeRegistration } from "../Data/ticktokapis";

const Login = () => {
  const log = useSelector((state) => state.log.value);
  const loginEmail = useSelector((state) => state.auth.value.email);
  const loginPassword = useSelector((state) => state.auth.value.password);
  const signupName = useSelector((state) => state.reg.value.name);
  const signupEmail = useSelector((state) => state.reg.value.email);
  const signupPassword = useSelector((state) => state.reg.value.password);
  const signupDOB = useSelector((state) => state.reg.value.DOB);
  const signupPronouns = useSelector((state) => state.reg.value.pronouns);
  const verifyValue = useSelector((state) => state.reg.verify);
  const forgotValue = useSelector((state) => state.reg.forgot);
  const [emailForgot, setEmailForgot] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [resend, setResend] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setEmail(""));
    dispatch(setPassword(""));
    dispatch(setName(""));
    dispatch(setDOB(""));
    dispatch(setLoginEmail(""));
    dispatch(setLoginPassword(""));
  }, [dispatch]);

  const getUserInformation = async (token) => {
    const userRes = await axios({
      method: "get",
      url: "https://admin.chatcoach.io/api/userinformation",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const { data } = userRes;
    return data;
  };

  const loginHandler = async () => {
    dispatch(loginStart());

    try {
      const res = await axios.post("https://admin.chatcoach.io/api/userlogin", {
        email: loginEmail,
        password: loginPassword
      });

      dispatch(loginSuccess());
      if (res.data.data.status === "200") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("DOB", res.data.user.DOB);
        localStorage.setItem("pronouns", res.data.user.pronouns);
        localStorage.setItem("id", res.data.user.id);
        localStorage.setItem("bot_id", 1);
        getUserInformation(localStorage.getItem("token")).then((res) => {
          if (res.subscriptio && res.userhassub !== 0) {
            const dateExpiry = new Date(res.subscription.expiry_date);
            if (Date.now() < dateExpiry) {
              localStorage.setItem("subscribed", true);
              localStorage.setItem("plan", res.subscription.plan_id);
              navigate("/");
              return;
            } else {
              navigate("/subscription");
            }
          } else {
            localStorage.removeItem("plan");
            localStorage.removeItem("subscribed");
            navigate("/subscription");
          }
        });
      } else if (res.data.data.logs === "Kindly Verify Your Email") {
        dispatch(verify(true));
      } else {
        dispatch(loginFailure(res.data.data.logs));
      }
    } catch (err) {
      dispatch(loginFailure(err));
      console.log(err);
    }
  };

  const signupHandler = async () => {
    if (
      signupName === "" ||
      signupEmail === "" ||
      signupDOB === "" ||
      signupPassword === "" ||
      signupPronouns === ""
    ) {
      dispatch(regFailure("All fields are required"));
      return;
    }
    if (
      signupPassword.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])/
      ) === null
    ) {
      dispatch(
        regFailure(
          "Password must have 1 capital letter, 1 small letter,1 number and 1 special character"
        )
      );
      return;
    }
    if (signupEmail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) === null) {
      dispatch(regFailure("Email is not of correct format"));
      return;
    }
    if (
      signupDOB.split("-")[0].replace(/^0+/, "").length > 4 ||
      signupDOB.split("-")[0].replace(/^0+/, "").length < 4
    ) {
      dispatch(regFailure("Incorrce Year in Date of Birth"));
    } else {
      try {
        const resp = completeRegistration(signupEmail);
        console.log(resp);
        const res = await axios.post(
          "https://admin.chatcoach.io/api/usersignup",
          {
            name: signupName,
            email: signupEmail,
            password: signupPassword,
            dob: signupDOB,
            pronouns: signupPronouns
          }
        );
        //console.log(res);
        dispatch(loginSuccess());
        if (res.data.data.status === "200") {
          dispatch(regFailure(null));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.user.name);
          localStorage.setItem("email", res.data.user.email);
          localStorage.setItem("DOB", res.data.user.DOB);
          localStorage.setItem("pronouns", res.data.user.pronouns);
          localStorage.setItem("id", res.data.user.id);
          localStorage.setItem("bot_id", 1);
          getUserInformation(localStorage.getItem("token")).then((res) => {
            if (res.subscription && res.userhassub !== 0) {
              const dateExpiry = new Date(res.subscription.expiry_date);
              if (Date.now() < dateExpiry) {
                localStorage.setItem("subscribed", true);
                localStorage.setItem("plan", res.subscription.plan_id);
                navigate("/");
                return;
              } else {
                localStorage.removeItem("plan");
                localStorage.removeItem("subscribed");
                navigate("/subscription");
              }
            } else {
              localStorage.removeItem("plan");
              localStorage.removeItem("subscribed");
              navigate("/subscription");
            }
          });
        } else if (res.data.data.status === "202") {
          dispatch(verify(true));
        } else {
          dispatch(regFailure(res.data.data.logs));
        }
      } catch (err) {
        dispatch(regFailure(err));
        console.log(err);
      }
    }
  };
  const signupGoogle = async (name, email, sub) => {
    try {
      const res = await axios.post("https://admin.chatcoach.io/api/google", {
        name: name,
        email: email,
        password: sub,
        google_id: email
      });
      dispatch(loginSuccess());
      if (res.data.data.status === "200") {
        dispatch(regFailure(null));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("DOB", res.data.user.DOB);
        localStorage.setItem("pronouns", res.data.user.pronouns);
        localStorage.setItem("id", res.data.user.id);
        localStorage.setItem("bot_id", 1);
        getUserInformation(localStorage.getItem("token")).then((res) => {
          if (res.subscription && res.userhassub !== 0) {
            const dateExpiry = new Date(res.subscription.expiry_date);
            if (Date.now() < dateExpiry) {
              localStorage.setItem("subscribed", true);
              localStorage.setItem("plan", res.subscription.plan_id);
              navigate("/");
              return;
            } else {
              localStorage.removeItem("plan");
              localStorage.removeItem("subscribed");
              navigate("/subscription");
            }
          } else {
            localStorage.removeItem("plan");
            localStorage.removeItem("subscribed");
            navigate("/subscription");
          }
        });
      } else {
        dispatch(regFailure(res.data.data.logs));
      }
    } catch (err) {
      dispatch(regFailure(err));
      console.log(err);
    }
  };

  const forgotPassword = async (email) => {
    try {
      const res = await axios.post(
        "https://admin.chatcoach.io/api/reqforgetpassword",
        {
          email: email
        }
      );
      dispatch(loginSuccess());
      if (res.data.message === "email sent") {
        dispatch(regFailure(null));
        dispatch(forgot(false));
        setEmailSent(true);
      } else {
        dispatch(regFailure(res.data.data.logs));
      }
    } catch (err) {
      dispatch(regFailure(err));
      console.log(err);
    }
  };

  const resendEmail = async (email) => {
    try {
      const res = await axios.post(
        "https://admin.chatcoach.io/api/resendverify",
        {
          email: email
        }
      );
      dispatch(loginSuccess());
      if (res.data.message === "email sent") {
        dispatch(regFailure(null));
        dispatch(forgot(false));
        setEmailSent(true);
      } else {
        dispatch(regFailure(res.data.data.logs));
      }
    } catch (err) {
      dispatch(regFailure(err));
      console.log(err);
    }
  };

  // const request_token = async () => {
  //   // const response = await axios.get("http://localhost:4000/oauth");
  //   // window.location.href = `${response.data.url}`;
  //   return;
  // };

  return (
    <>
      {verifyValue && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-between gap-6 bg-white rounded-xl p-7">
            <h1 className="font-mont text-[15px] text-center">
              Please verify your email address to continue
            </h1>
            <div className="flex items-center justify-between w-[90%] ">
              <button
                className="text-white font-mont bg-[#011526] text-[15px] w-[40%] p-3 rounded-full transform flip-signup"
                onClick={() => {
                  dispatch(verify(false));
                  dispatch(setEmail(""));
                  dispatch(setPassword(""));
                  dispatch(setName(""));
                  dispatch(setDOB(""));
                  dispatch(setLoginEmail(""));
                  dispatch(setLoginPassword(""));
                  dispatch(setLog("login"));
                }}
              >
                Ok
              </button>
              <button
                className="text-white font-mont bg-deepBlue text-[15px] w-[40%] p-3 rounded-full transform flip-signup"
                onClick={() => {
                  setResend(true);
                  dispatch(verify(false));
                }}
              >
                Resend
              </button>
            </div>
          </div>
        </div>
      )}
      {forgotValue && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-6 bg-white rounded-xl p-7">
            <input
              type="email"
              placeholder="Enter your email"
              className="font-mont text-[15px] text-center w-[300px] p-3 rounded-full border-[#011526] border-2 outline-none"
              value={emailForgot}
              onChange={(e) => setEmailForgot(e.target.value)}
            />
            <button
              className="text-white font-mont bg-[#011526] text-[15px] w-[80%] p-3 rounded-full transform flip-signup"
              onClick={() => {
                dispatch(forgot(false));
                dispatch(setEmail(""));
                dispatch(setPassword(""));
                dispatch(setName(""));
                dispatch(setDOB(""));
                dispatch(setLoginEmail(""));
                dispatch(setLoginPassword(""));
                dispatch(setLog("login"));
                forgotPassword(emailForgot);
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}
      {emailSent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-6 bg-white rounded-xl p-7">
            <h1 className="font-mont text-[15px] text-center">
              Email sent successfully
            </h1>
            <button
              className="text-white font-mont bg-[#011526] text-[15px] w-[80%] p-3 rounded-full transform flip-signup"
              onClick={() => {
                dispatch(forgot(false));
                dispatch(setEmail(""));
                dispatch(setPassword(""));
                dispatch(setName(""));
                dispatch(setDOB(""));
                dispatch(setLoginEmail(""));
                dispatch(setLoginPassword(""));
                dispatch(setLog("login"));
                setEmailSent(false);
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}
      {resend && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-6 bg-white rounded-xl p-7">
            <h1 className="font-mont text-[15px] text-center">
              Email sent successfully
            </h1>
            <button
              className="text-white font-mont bg-[#011526] text-[15px] w-[80%] p-3 rounded-full transform flip-signup"
              onClick={() => {
                dispatch(verify(false));
                dispatch(setEmail(""));
                dispatch(setPassword(""));
                dispatch(setName(""));
                dispatch(setDOB(""));
                dispatch(setLoginEmail(""));
                dispatch(setLoginPassword(""));
                dispatch(setLog("login"));
                resendEmail(signupEmail);
                setResend(false);
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}
      <div
        className={`flex flex-col items-center justify-center md:h-screen h-[100dvh] w-full bg-[#E9E9E9] xl:py-8 xl:px-60 p-0 duration-300 transition-all  ${
          verifyValue || forgotValue || emailSent || resend
            ? "blur-xl"
            : "blur-0"
        }`}
      >
        <div className="flex flex-row items-center justify-center h-full w-full bg-white xl:rounded-[60px] rounded-none shadow-xl">
          <div className="flex flex-col items-start justify-start xl:w-[50%] w-full h-full p-7">
            <div className="flex flex-row items-center justify-between w-full h-[47px]">
              <img
                src={logo}
                className="w-[150px] cursor-pointer"
                alt="logo"
                onClick={() => navigate("/")}
              />
              <div className="xl:hidden flex flex-row items-center justify-center gap-4">
                <h1
                  className={`font-mont text-[15px] xl:text-white cursor-pointer ${
                    log === "login" ? "block" : "hidden"
                  }`}
                  onClick={() => dispatch(setLog("signup"))}
                >
                  Sign Up
                </h1>
                <h1
                  className={`font-mont text-[15px] xl:text-white cursor-pointer ${
                    log === "signup" ? "block" : "hidden"
                  }`}
                  onClick={() => dispatch(setLog("login"))}
                >
                  Log In
                </h1>
                <button className="xl:hidden flex font-mont font-bold text-[15px] text-center text-white bg-[#2E6FF2] py-1 px-3 rounded-[20px] hover:bg-[#2760d0]">
                  Join
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full">
              <h1 className="font-mont font-extrabold text-[66px] leading-[70px]">
                Welcome
              </h1>
              <h1 className="font-mont md:text-[15px] text-xs mb-5">
                Your journey to success is about to begin.
              </h1>
              <GoogleOAuthProvider clientId="938595267984-ll7a3anqbvmbks0447lqces7126hr0fg.apps.googleusercontent.com">
                <GoogleLogin
                  className="flex flex-row items-center justify-center gap-2 border-[#B5B5B5] w-[80%] rounded-xl py-2 border-2 cursor-pointer hover:bg-[#B5B5B5]"
                  scope="https://www.googleapis.com/auth/userinfo.profile"
                  onSuccess={(res) => {
                    const decoded = jwtDecode(res.credential);
                    signupGoogle(decoded.name, decoded.email, decoded.sub);
                  }}
                  onFailure={(err) => {
                    console.log(err);
                  }}
                />
              </GoogleOAuthProvider>
              {/* <h1
                className="mt-4 font-mont text-black text-sm font-medium px-4 py-2 border-[1px] border-black rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200"
                onClick={request_token}
              >
                <FaTiktok /> Sign In With Tiktok
              </h1> */}
              <div className="flex flex-row items-center justify-center my-5 gap-1 w-full">
                <img src={line} className="w-[20%]" alt="line" />
                <h1 className="font-mont text-xs">or</h1>
                <img src={line} className="w-[20%]" alt="line" />
              </div>
              <div className="flex-col items-center justify-center w-full">
                <div
                  className={`flex flex-col items-center justify-center w-full transition-opacity duration-1000 ease-in-out ${
                    log === "login" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {log === "login" && <LoginForm />}
                </div>
                <div
                  className={`flex flex-col items-center justify-center w-full transition-opacity duration-1000 ease-in-out ${
                    log === "signup" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {log === "signup" && <SignupForm />}
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                {log === "login" && (
                  <button
                    className="text-white font-mont bg-[#011526] text-[15px] w-[80%] p-3 rounded-full mb-4 transform flip-login"
                    onClick={loginHandler}
                  >
                    Log In
                  </button>
                )}

                {log === "signup" && (
                  <button
                    className="text-white font-mont bg-[#011526] text-[15px] w-[80%] p-3 rounded-full mb-4 transform flip-signup"
                    onClick={signupHandler}
                  >
                    Sign Up
                  </button>
                )}
              </div>
              <h1
                className={`font-mont text-[15px] font-semibold w-[80%] text-left mb-4 ${
                  log === "login" ? "block" : "hidden"
                }`}
              >
                By Logging In you agree to our{" "}
                <span
                  className="text-[#2E6FF2] cursor-pointer"
                  onClick={() => navigate("/privacypolicy")}
                >
                  privacy policy{" "}
                </span>
                &{" "}
                <span
                  className="text-[#2E6FF2] cursor-pointer"
                  onClick={() => navigate("/terms")}
                >
                  terms of service
                </span>
                .
              </h1>
              <h1
                className={`font-mont text-[15px] font-semibold w-[80%] text-left mb-4 ${
                  log === "signup" ? "block" : "hidden"
                }`}
              >
                By Signing Up you agree to our{" "}
                <span
                  className="text-[#2E6FF2] cursor-pointer"
                  onClick={() => navigate("/privacypolicy")}
                >
                  privacy policy{" "}
                </span>
                &{" "}
                <span
                  className="text-[#2E6FF2] cursor-pointer"
                  onClick={() => navigate("/terms")}
                >
                  terms of service
                </span>
                .
              </h1>
              <h1
                className={`font-mont text-[15px] font-semibold ${
                  log === "login" ? "block" : "hidden"
                }`}
              >
                Don't have an account?{" "}
                <span
                  className="text-[#2E6FF2] cursor-pointer"
                  onClick={() => dispatch(setLog("signup"))}
                >
                  Signup
                </span>
              </h1>
              <h1
                className={`font-mont text-[15px] font-semibold ${
                  log === "signup" ? "block" : "hidden"
                }`}
              >
                Already have an account?{" "}
                <span
                  className="text-[#2E6FF2] cursor-pointer"
                  onClick={() => dispatch(setLog("login"))}
                >
                  Login
                </span>
              </h1>
            </div>
          </div>
          <div
            className="xl:flex hidden flex-col items-start justify-between w-[50%] h-full rounded-[60px] bg-no-repeat bg-center bg-cover p-7"
            style={{ backgroundImage: `url(${loginBg})` }}
          >
            <div className="flex flex-row items-center justify-between w-full h-[47px]">
              <div className="flex flex-col items-center justify-center h-full w-[47px] rounded-full bg-white cursor-pointer">
                <img src={people} alt="people" className="w-[25px]" />
              </div>
              <div className="flex flex-row items-center justify-center rounded-[20px] w-[220px] overflow-hidden relative">
                <div
                  className={`absolute top-0 left-0 w-1/2 h-full bg-[#2E6FF2] transform rounded-[20px] ${
                    log === "login" ? "translate-x-0" : "translate-x-full"
                  } transition-transform duration-300 ease-in-out`}
                ></div>
                <h1
                  className={`md:block hidden font-mont font-bold text-xl text-center text-white py-1 rounded-[20px] cursor-pointer w-[110px] transition ease-in-out duration-500 z-20 `}
                  onClick={() => {
                    if (log === "login") {
                      dispatch(setLog("signup"));
                    } else {
                      dispatch(setLog("login"));
                    }
                  }}
                >
                  Log In
                </h1>
                <h1
                  className={`md:block hidden font-mont font-bold text-xl text-center text-white py-1 rounded-[20px] cursor-pointer w-[110px] transition ease-in-out duration-500 z-20 `}
                  onClick={() => {
                    if (log === "login") {
                      dispatch(setLog("signup"));
                    } else {
                      dispatch(setLog("login"));
                    }
                  }}
                >
                  Join
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h1 className="font-mont text-4xl font-bold text-white px-2">
                Simulate important scenarios with artificial intelligence.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
