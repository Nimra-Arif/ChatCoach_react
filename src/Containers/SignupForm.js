import { useDispatch, useSelector } from "react-redux";

import {
  setName,
  setEmail,
  setPassword,
  setDOB,
  setPronouns
} from "../Store/regSlice/reg";

import FormInput from "../Components/FormInput";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { name, email, password, DOB, pronouns } = useSelector(
    (state) => state.reg.value
  );
  const error = useSelector((state) => state.reg.error);

  return (
    <div className="flex flex-col items-center justify-center w-[80%]  overflow-y-scroll no-scrollbar gap-4 mb-4">
      <FormInput
        type="text"
        placeholder="Name"
        onChange={(e) => dispatch(setName(e.target.value))}
        value={name}
      />
      <FormInput
        type="email"
        placeholder="Email"
        onChange={(e) => dispatch(setEmail(e.target.value))}
        value={email}
      />
      <FormInput
        type="date"
        placeholder="Date of Birth"
        onChange={(e) => dispatch(setDOB(e.target.value))}
        value={DOB}
      />
      <div className="relative inline-flex w-full">
        <svg
          className="w-3 absolute my-6 right-0 mx-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.762-9.763 25.592 0 35.355l189.21 189.211c9.372 9.373 24.749 9.373 34.121 0l189.211-189.211c9.762-9.763 9.762-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#000000"
            fill-rule="nonzero"
          />
        </svg>
        <select
          id="select"
          name="select"
          value={pronouns}
          onChange={(e) => dispatch(setPronouns(e.target.value))}
          className="w-full font-mont text-[15px] border-[#B5B5B5] border-2 rounded-xl p-3 appearance-none"
        >
          <option value="" className="font-mont text-[15px] w-full">
            Gender
          </option>
          <option value="he/him" className="font-mont text-[15px] w-full">
            Male
          </option>
          <option value="she/her" className="font-mont text-[15px] w-full">
            Female
          </option>
          <option value="they/them" className="font-mont text-[15px] w-full">
            Other
          </option>
        </select>
      </div>
      <FormInput
        type="password"
        placeholder="Password"
        onChange={(e) => dispatch(setPassword(e.target.value))}
        value={password}
      />
      {error && (
        <p className="text-[#ff0000] font-mont font-medium text-xs w-full text-left">
          {error}
        </p>
      )}
    </div>
  );
};

export default SignupForm;
