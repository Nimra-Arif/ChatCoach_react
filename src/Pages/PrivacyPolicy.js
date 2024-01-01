import Footer2 from "../Components/Footer2";
import Nav2 from "../Components/Nav2";
import PolicyContainer from "../Containers/PolicyContainer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full m-auto">
      <Nav2 />
      <div className="flex flex-col items-center justify-start md:w-[80%] w-full my-8 md:px-0 px-4 gap-4">
        <h1 className="font-mont font-extrabold sm:text-6xl text-4xl">
          Privacy Policy
        </h1>
        <h1 className="font-mont font-medium text-base">
          Last Updated: August 1st, 2023
        </h1>
        <h1
          className="font-mont font-bold text-3xl w-full text-left"
          style={{ maxWidth: "100%" }}
        >
          Welcome to ChatCoach!
        </h1>
        <h1
          className="font-mont font-normal text-base w-full text-left"
          style={{ maxWidth: "100%" }}
        >
          Luka, Inc. (“ChatCoach”, “we”, “us”, and/or “our”) operates the
          ChatCoach mobile and web applications, including my.ChatCoach.com (the
          “Apps”), the informational website www.ChatCoach.com and its mirror
          www.ChatCoach.ai (the “Website”), and other related services
          (collectively, the “Services”).
        </h1>
        <h1
          className="font-mont font-bold text-base w-full text-left"
          style={{ maxWidth: "100%" }}
        >
          We are committed to protecting your privacy. This Privacy Policy
          describes how we collect, store, use, and share information through
          our Services.
        </h1>
        <h1
          className="font-mont font-normal text-base w-full text-left"
          style={{ maxWidth: "100%" }}
        >
          We care about the protection and confidentiality of your information.
          When you use the Apps, you may provide information during your
          conversations with your ChatCoach AI companion. We process this
          information only as described in this Privacy Policy, such as to allow
          you to have individualized and safe conversations and interactions
          with your AI companion and to allow your AI companion to learn from
          your interactions to improve your conversations. We may also use
          information about your visit to our Website to promote our Services,
          but we will never use or disclose the content of your ChatCoach
          conversations for marketing or advertising purposes.
        </h1>
        <h1
          className="font-mont font-normal text-base w-full text-left"
          style={{ maxWidth: "100%" }}
        >
          Any terms we use in this Policy without defining them have the
          definitions given to them in our Terms of Service. If you have any
          questions, please contact us at my@ChatCoach.ai.
        </h1>

        <PolicyContainer />
      </div>
      <Footer2 />
    </div>
  );
};

export default PrivacyPolicy;
