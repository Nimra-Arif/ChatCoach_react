import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { BsCheckCircleFill } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { completePayment } from "../Data/ticktokapis";
AOS.init();


/**
 * SubscriptionCard1 Component
 *
 * Displays a premium subscription card with pricing details, features, and a button to start a free trial.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.annualPricing - Indicates if the pricing is annual or monthly.
 * @returns {JSX.Element} - The rendered SubscriptionCard1 component.
 */

const SubscriptionCard1 = ({ annualPricing }) => {
  const [loading, setloading] = useState(false);
  // const [loading1, setloading1] = useState(false)
  const navigate = useNavigate();

  /**
   * Handles the click event to initiate the payment process.
   *
   * @param {string} plan - The selected plan (2 for monthly, 4 for annual).
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
    <div className="flex flex-col items-start justify-center sm:w-[350px] w-[300px] rounded-2xl shadow-2xl px-4 py-8 gap-8">
      <div className="flex flex-col items-start justify-center w-full">
        <p className="font-mont text-4xl font-semibold text-center w-full">
          7-Day Free Trial
        </p>
        {annualPricing === true && (
          <p className="font-mont text-3xl font-semibold text-center w-full">
            then $14.99/year
          </p>
        )}
        {annualPricing === false && (
          <p className="font-mont text-3xl font-semibold text-center w-full">
            then $4.99/month
          </p>
        )}
      </div>
      <div className="flex flex-col items-start justify-center w-full">
        <p className="font-mont text-xl font-semibold text-center w-full text-[#2E6FF2]">
          Premium
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
      <div className="flex flex-col items-start justify-center w-full gap-2">
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">
            2 Chat Agents + All Premium Agents
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
            AI Analytics and Coaching
          </p>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">
            Online Dating Simulation
          </p>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">
            Customer Support Simulation
          </p>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">VIP Mode</p>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">
            Negotiations Mode
          </p>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">
            Emotion Detection
          </p>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
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
          data-aos-delay="500"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">Chat Mode</p>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <BsCheckCircleFill className="text-[#D1FADF] bg-[#12B76A] rounded-full" />
          <p className="font-mont text-base text-[#667085]">Sales Mode</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        {(localStorage.getItem("plan") === "2" ||
          localStorage.getItem("plan") === "4") && (
          <p className="font-mont text-base text-center w-full text-[#667085] py-4">
            You are already subscribed to this plan
          </p>
        )}
        {!(
          localStorage.getItem("plan") === "2" ||
          localStorage.getItem("plan") === "4"
        ) &&
          localStorage.getItem("token") && (
            <button
              disabled={loading}
              className="font-mont text-white text-xl font-semibold bg-[#2E6FF2] w-full py-4 rounded-2xl"
              onClick={() => {
                setloading(true);
                makePayment(`${annualPricing ? 4 : 2}`);
                completePayment(localStorage.getItem("email"));
                localStorage.setItem("paid", true);
              }}
            >
              {loading ? <span class="loader"></span> : "Start Free Trial"}
            </button>
          )}
        {!(
          localStorage.getItem("plan") === "2" ||
          localStorage.getItem("plan") === "4"
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

export default SubscriptionCard1;
