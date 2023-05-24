import React from "react";
import Image from "next/image";

const Setupdetails = () => {
  return (
    <div className="bg-[#2B373C1C] py-5 px-2 sm:px-10">
      <div className="flex justify-between items-center mx-5 sm:mx-9">
        <div className="flex items-center gap-x-4 ">
          <Image
            src="/Assets/backbtn.svg"
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer"
          />
          <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
            Setup details
          </p>
        </div>
        <button className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3">
          <img src="/Assets/check.svg" alt="save" />
          Save
        </button>
      </div>
      <div className=" bg-white px-4 pt-14 pb-14 mx-2 sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div
            className="bg-[#2B373C1C] flex justify-center items-center"
            style={{ width: "80px", height: "80px", borderRadius: "24px" }}
          >
            <img src="/Assets/camera-icon.svg" alt="cameraIcon" />
          </div>
        </div>
        <div>hello</div>
      </div>
    </div>
  );
};

export default Setupdetails;
