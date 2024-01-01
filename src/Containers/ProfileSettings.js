import { useSelector, useDispatch } from "react-redux";
import { AiOutlineRight } from "react-icons/ai";

import { setCurrentSettings } from "../Store/profileSlice/profile";

const ProfileSettings = () => {
  const name = useSelector((state) => state.profile.name);
  const DOB = useSelector((state) => state.profile.DOB);
  const pronouns = useSelector((state) => state.profile.pronouns);
  const currentSettings = useSelector((state) => state.profile.currentSettings);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-start w-full h-full px-2 gap-10">
      <div className="flex flex-col items-start justify-center w-full gap-3">
        <div
          className={`flex flex-row items-center justify-between w-full rounded-xl cursor-pointer  ${
            currentSettings === "name"
              ? "bg-[#ffffff85]"
              : "hover:bg-[#ffffff28]"
          }`}
          onClick={() => dispatch(setCurrentSettings("name"))}
        >
          <div className="flex flex-col items-start justify-center py-2 px-4">
            <p className="font-mont text-base font-bold text-white">Name</p>
            <p className="font-mont text-base text-white">{name}</p>
          </div>
          <AiOutlineRight className="text-white text-2xl mr-3" />
        </div>

        <div
          className={`flex flex-row items-center justify-between w-full rounded-xl cursor-pointer  ${
            currentSettings === "dob"
              ? "bg-[#ffffff85]"
              : "hover:bg-[#ffffff28]"
          }`}
          onClick={() => dispatch(setCurrentSettings("dob"))}
        >
          <div className="flex flex-col items-start justify-center py-2 px-4">
            <p className="font-mont text-base font-bold text-white">
              Date of Birth
            </p>
            <p className="font-mont text-base text-white">{DOB}</p>
          </div>
          <AiOutlineRight className="text-white text-2xl mr-3" />
        </div>
        <div
          className={`flex flex-row items-center justify-between w-full rounded-xl cursor-pointer  ${
            currentSettings === "pronouns"
              ? "bg-[#ffffff85]"
              : "hover:bg-[#ffffff28]"
          }`}
          onClick={() => dispatch(setCurrentSettings("pronouns"))}
        >
          <div className="flex flex-col items-start justify-center py-2 px-4">
            <p className="font-mont text-base font-bold text-white">Pronouns</p>
            <p className="font-mont text-base text-white">{pronouns}</p>
          </div>
          <AiOutlineRight className="text-white text-2xl mr-3" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
