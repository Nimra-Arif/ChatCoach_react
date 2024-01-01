import { useSelector, useDispatch } from "react-redux";
import { AiOutlineRight } from "react-icons/ai";

import { setCurrentSettings } from "../Store/accountSlice/account";

const AccountSettings = () => {
  const email = useSelector((state) => state.account.email);
  const currentSettings = useSelector((state) => state.account.currentSettings);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-start w-full h-full px-2 gap-10">
      <div className="flex flex-col items-start justify-center w-full gap-3">
        <div
          className={`flex flex-row items-center justify-between w-full rounded-xl cursor-pointer  ${
            currentSettings === "email"
              ? "bg-[#ffffff85]"
              : "hover:bg-[#ffffff28]"
          }`}
          onClick={() => dispatch(setCurrentSettings("email"))}
        >
          <div className="flex flex-col items-start justify-center py-2 px-4">
            <p className="font-mont text-base font-bold text-white">Email</p>
            <p className="font-mont text-base text-white">{email}</p>
          </div>
          <AiOutlineRight className="text-white text-2xl mr-3" />
        </div>

        <div
          className={`flex flex-row items-center justify-between w-full rounded-xl cursor-pointer  ${
            currentSettings === "password"
              ? "bg-[#ffffff85]"
              : "hover:bg-[#ffffff28]"
          }`}
          onClick={() => dispatch(setCurrentSettings("password"))}
        >
          <div className="flex flex-col items-start justify-center py-2 px-4">
            <p className="font-mont text-base font-bold text-white">Password</p>
            <p className="font-mont text-base text-white">Change Password</p>
          </div>
          <AiOutlineRight className="text-white text-2xl mr-3" />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
