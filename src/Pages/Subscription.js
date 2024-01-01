import React, { useState, useEffect } from "react";

import SubscriptionCard from "../Components/SubscriptionCard";
import SubscriptionCard1 from "../Components/SubscriptionCard1";
import axios from "axios";
import NavBar from "../Components/NavBar";

const Subscription = () => {
  const [annual, setAnnual] = useState(false);
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
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full m-auto">
      {(localStorage.getItem("plan") || !localStorage.getItem("token")) && (
        <NavBar />
      )}
      <div className="flex flex-col items-center justify-center w-full md:mt-28 mt-20 gap-5 px-4">
        <h1 className="font-mont text-lg text-white font-medium bg-[#2E6FF2] px-3 py-1 rounded-md">
          Pricing
        </h1>
        <h1 className="font-mont sm:text-5xl text-3xl text-center font-bold">
          Free for the First 7 Days
        </h1>
        <h1 className="font-mont sm:text-xl text-base text-center">
          You can cancel at any point during the trial.
        </h1>
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          {/* make a toggle switch using tailwind */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={annual}
                  readOnly
                />
                <div
                  onClick={() => {
                    setAnnual(!annual);
                  }}
                  className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#2E6FF2]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2E6FF2]"
                ></div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  Annual Payment
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-stretch justify-center w-full my-8 gap-4 flex-wrap">
        <SubscriptionCard annualPricing={annual} />
        <SubscriptionCard1 annualPricing={annual} />
      </div>
    </div>
  );
};

export default Subscription;
