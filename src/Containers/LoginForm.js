import { useDispatch, useSelector } from "react-redux";

import { setEmail, setPassword } from "../Store/authSlice/auth";
import { forgot } from "../Store/regSlice/reg";

import FormInput from "../Components/FormInput";

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.value.email);
  const password = useSelector((state) => state.auth.value.password);
  const error = useSelector((state) => state.auth.error);
  return (
    <div className="flex flex-col items-center justify-center w-[80%] gap-4 mb-4">
      <FormInput
        type="email"
        placeholder="Your Email"
        onChange={(e) => dispatch(setEmail(e.target.value))}
        value={email}
      />
      <FormInput
        type="password"
        placeholder="Password"
        onChange={(e) => dispatch(setPassword(e.target.value))}
        value={password}
      />
      <p
        className="font-mon text-xs text-[#2E6FF2] w-full text-right font-semibold cursor-pointer"
        onClick={() => dispatch(forgot(true))}
      >
        Forgot Password?
      </p>
      {error && (
        <p className="text-[#ff0000] font-mont font-medium text-xs w-full text-left">
          {error}
        </p>
      )}
    </div>
  );
};

export default LoginForm;
