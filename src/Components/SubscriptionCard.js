import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { BsCheckCircleFill } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { completePayment } from "../Data/ticktokapis";
AOS.init();


/**
 * SubscriptionCard Component
 *
 * Displays a subscription card with pricing details, features, and a button to start a free trial.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.annualPricing - Indicates if the pricing is annual or monthly.
 * @returns {JSX.Element} - The rendered SubscriptionCard component.
 */

const SubscriptionCard = ({ annualPricing }) => {
  const [loading, setloading] = useState(false);
  // const [loading1, setloading1] = useState(false)
  const navigate = useNavigate();

  /**
   * Handles the click event to initiate the payment process.
   *
   * @param {string} plan - The selected plan (1 for monthly, 3 for annual).
   */
  
  const makePayment = async (plan) => {
    setloading(true);
    try {
      setloading(true);
      await axios
        .get("https://admin.chatcoach.io/api/stripelink", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          params: {
            plan: plan
          }
        })
        .then((res) => {
          // open link
          window.open(res.data.checkout_url, "_self");
        });
    } catch (err) {
      console.log(err);
      setloading(false);
    }
    setloading(false);
  };

  return (
    <div className="flex flex-col items-start justify-between sm:w-[350px] w-[300px] rounded-2xl shadow-2xl px-4 py-8 gap-8">
      <div className="flex flex-col items-start justify-center w-full gap-8">
        <div className="flex flex-col items-start justify-center w-full">
          <p className="font-mont text-4xl font-semibold text-center w-full">
            7-Day Free Trial
          </p>
          {annualPricing === true && (
            <p className="font-mont text-3xl font-semibold text-center w-full">
              then $8.99/year
            </p>
          )}
          {annualPricing === false && (
            <p className="font-mont text-3xl font-semibold text-center w-full">
              then $2.99/month
            </p>
          )}
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <p className="font-mont text-xl font-semibold text-center w-full text-[#2E6FF2]">
            Standard
          </p>
          {annualPricing === true && (
            <p className="font-mont text-base text-center w-full text-[#667085]">
              Billed Annually.
            </p>
          )}
          {annualPricing === false && (
            <p className="font-mont text-base text-center w-full text-[#667085]">
              Billed Monthly.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-2">
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">
            Emotional Detection
          </p>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">
            Job Interview Simulation
          </p>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">Chat Mode</p>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">Sales Mode</p>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">2 Chat Agents</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        {(localStorage.getItem("plan") === "1" ||
          localStorage.getItem("plan") === "3") && (
          <p className="font-mont text-base text-center w-full text-[#667085] py-4">
            You are already subscribed to this plan
          </p>
        )}
        {!(
          localStorage.getItem("plan") === "1" ||
          localStorage.getItem("plan") === "3"
        ) &&
          localStorage.getItem("token") && (
            <button
              disabled={loading}
              className="font-mont text-white text-xl font-semibold bg-[#2E6FF2] w-full py-4 rounded-2xl"
              onClick={() => {
                setloading(true);
                makePayment(`${annualPricing ? 3 : 1}`);
                completePayment(localStorage.getItem("email"));
                localStorage.setItem("paid", true);
              }}
            >
              {loading ? <span class="loader"></span> : "Start Free Trial"}
            </button>
          )}
        {!(
          localStorage.getItem("plan") === "1" ||
          localStorage.getItem("plan") === "3"
        ) &&
          !localStorage.getItem("token") && (
            <button
              disabled={loading}
              className="font-mont text-white text-xl font-semibold bg-[#2E6FF2] w-full py-4 rounded-2xl"
              onClick={() => {
                setloading(true);
                navigate("/join");
              }}
            >
              {loading ? <span class="loader"></span> : "Start Free Trial"}
            </button>
          )}
      </div>
    </div>
  );
};

export default SubscriptionCard;
