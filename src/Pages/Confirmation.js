import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

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

  useEffect(() => {
    const confirmPayment = async () => {
      const isPaid = localStorage.getItem("paid") === "true";

      if (isPaid) {
        try {
          getUserInformation(localStorage.getItem("token")).then((res) => {
            console.log(res);
            if (res.subscription && res.userhassub !== 0) {
              const dateExpiry = new Date(res.subscription.expiry_date);
              if (Date.now() < dateExpiry) {
                localStorage.setItem("subscribed", true);
                localStorage.setItem("plan", res.subscription.plan_id);
              } else {
                localStorage.removeItem("plan");
                localStorage.removeItem("subscribed");
              }
            } else {
              localStorage.removeItem("plan");
              localStorage.removeItem("subscribed");
            }
          });
          localStorage.setItem("paid", "false"); // Store a string, not a boolean
          navigate("/chat");
        } catch (error) {
          console.error("Error confirming payment:", error);
          navigate("/chat");
        }
      } else {
        navigate("/chat");
      }
    };

    confirmPayment();
  }, [navigate]);

  return <div></div>;
};

export default Confirmation;
