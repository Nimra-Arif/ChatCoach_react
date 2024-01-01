import React from "react";
import TermsHeading from "../Components/TermsHeading";
import TermsSubheading from "../Components/TermsSubheading";

const TermsContainer = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-3">
      <TermsHeading
        heading="1. Introduction"
        text='These Terms of Service ("Terms") govern your access to and use of the website, services, and applications (collectively, the "Services") provided by ChatCoach, LLC ("ChatCoach", "we", "us", "our"). Your access to and use of the Services is conditioned upon your acceptance of and compliance with these Terms. By accessing or using the Services, you agree to be bound by these Terms and all applicable laws, rules, and regulations.'
      />
      <TermsHeading
        heading="2. Acceptance of Terms"
        text="By accessing, downloading, installing, or using the Services, you affirm
        that you are at least 18 years of age (or have reached the age of
        majority if that is not 18 years of age where you live) or that you are
        an emancipated minor, and fully able and competent to enter into the
        terms, conditions, obligations, affirmations, representations, and
        warranties set forth in these Terms, and to abide by and comply with
        these Terms."
      />
      <TermsHeading heading="3. Modification of Terms" />
      <TermsSubheading text1='We reserve the right to modify these Terms at any time. If we make changes to these Terms, we will provide notice of such changes, such as by sending you a notification, providing notice through the Services, and/or updating the "Last Updated" date at the end of these Terms. Your continued use of the Services will confirm your acceptance of the revised Terms. We encourage you to frequently review the Terms to ensure you understand the terms and conditions that apply to your use of the Services.' />
      <TermsHeading
        heading="4. Registration and Account Security"
        text="To access some features of the Services, you may be required to register for an account. When you register for an account, you may be required to provide us with some information about yourself (such as your name, credit card information, or other contact information). You agree that the information you provide to us is accurate, current, and complete, and that you will keep it up-to-date at all times."
      />
      <TermsHeading
        heading="5. User Conduct"
        text="You are solely responsible for all service, telephony, data charges, and/or other fees and costs associated with your access to and use of the Services, as well as for obtaining and maintaining all telephone, computer hardware, and other equipment required for such access and use. You agree not to use our Services in any way that is illegal, harmful, or may damage our reputation. You also agree not to infringe any third party's rights, to deliver spam, or to engage in behavior that is otherwise harmful to us or other users."
      />
      <TermsHeading heading="6. Payments, Cancellations, and Cool-Off Period" />
      <TermsSubheading text1="Certain aspects of the Services may be provided for a fee or other charge. If you elect to use paid aspects of the Services, you agree to the pricing, payment, and billing policies applicable to such fees and charges. All fees are non-refundable except as required by law." />
      <TermsHeading
        heading="7. Intellectual Property Rights"
        text="The design, trade-marks, logos, and graphics on our Services, and the copyright in the content of our Services, is owned by and licensed to us, unless specified otherwise. The Services are protected to the maximum extent permitted by copyright and intellectual property rights laws and international treaties."
      />
      <TermsHeading heading="8. Disclaimers" />
      <TermsSubheading text1="You expressly acknowledge and agree that use of the Services is at your sole risk and that the entire risk as to satisfactory quality, performance, accuracy, and effort is with you." />
      <TermsHeading
        heading="9. Limitation of Liability"
        text="In no event shall we, our officers, directors, employees, agents, or suppliers be liable for lost profits or any special, incidental, or consequential damages arising out of or in connection with our Services or these Terms."
      />
      <TermsHeading heading="10. Indemnification" />
      <TermsSubheading
        text1="You agree to indemnify and hold harmless ChatCoach and its officers,
        directors, employees, and agents from and against any and all claims,
        liabilities, damages, losses, or expenses, including reasonable
        attorneys' fees and costs, due to or arising out of your violation of
        these Terms, your violation of any law, or your violation of any rights
        of a third party, or any allegation thereof."
      />
      <TermsHeading heading="11. Governing Law" />
      <TermsSubheading text1="These Terms are governed by and construed in accordance with the laws of the state of Texas, United States, without regard to its conflict of law principles." />
      <TermsHeading heading="12. Contact Us" />
      <h1
        className={`font-mont font-normal text-base w-full text-left`}
        style={{ maxWidth: "100%" }}
      >
        If you have any questions about these Terms, please contact us via email
        at
        <a
          href="mailto:help@chatcoach.io"
          className="text-blue-500 hover:text-blue-700"
        >
          {" "}
          help@chatcoach.io{" "}
        </a>
        .
      </h1>
    </div>
  );
};

export default TermsContainer;
