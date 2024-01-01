import Footer2 from "../Components/Footer2";
import Nav2 from "../Components/Nav2";
import TermsContainer from "../Containers/TermsContainer";

const Terms = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full m-auto">
      <Nav2 />
      <div className="flex flex-col items-center justify-start md:w-[80%] w-full my-8 md:px-0 px-4 gap-4">
        <h1 className="font-mont font-extrabold sm:text-6xl text-4xl">
          Terms of Service
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

        <TermsContainer />
      </div>
      <Footer2 />
    </div>
  );
};

export default Terms;
