import React from "react";
import backbtn from "../../public/Assets/backbtn.svg";
import { useRouter } from "next/router";
import editIcon from "../../public/Assets/edit-icon.svg";
import { GET_PROFILE_REQUEST } from "store/type/viewProfileType";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
const HeaderProfile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const backClicked = () => {
    router.push("/search_job");
  };
  const [flexing, setFlexing] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 400) {
      setFlexing(true);
    } else {
      setFlexing(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [handleResize]);

  const editClick = () => {
    router.push("/edit-consultant-profile");
  };
  return (
    <div
      className={`justify-between xl:mt-[10px] lg:mt-[10px] md:mt-[10px] sm:mt-[10px]
           pt-[11px] -mt-[4px] xl:pt-[10px] mb-6
           lg:pt-[10px] md:pt-[10px] sm:pt-[10px] items-center mx-4 sm:mr-9 sm:ml-[10px] flex
           `}
      style={{ flexDirection: flexing ? "column" : "row" }}
    >
      <div className="flex items-center gap-x-4 ">
        <img
          src={backbtn.src}
          alt="back button"
          width={46}
          height={46}
          className="cursor-pointer -ml-3"
          onClick={backClicked}
        />
        <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
          View Profile
        </p>
      </div>
      <button
        className="uppercase text-[16px] font-bold text-[#FFFFFF] w-[125px] h-[51px] bg-[#F9342E] rounded-[20px] ml-3 m-6 mb-0 cursor-pointer flex items-center justify-center "
        onClick={editClick}
      >
        <img src={editIcon.src} alt="edit icon" className="ml-3 " />
        {/* <img src={edit.src} className="cursor-pointer" onClick={editClick} /> */}
        <span className="uppercase flex-1">EDIT</span>
      </button>
    </div>
  );
};
export default HeaderProfile;
