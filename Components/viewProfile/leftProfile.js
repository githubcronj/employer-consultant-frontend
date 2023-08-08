import React, { useState } from "react";
import clientimg from "../../public/Assets/clientImg.png";
import resume from "../../public/Assets/resumeTemplate.png";
import email from "../../public/Assets/envelopeIcon.svg";
import call from "../../public/Assets/callbtn.svg";
import location from "../../public/Assets/locationIcon.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_PROFILE_REQUEST } from "store/type/viewProfileType";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const LeftProfile = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const routerPath = route?.pathname;

  const [flexing, setFlexing] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 700) {
      setFlexing(true);
    } else {
      setFlexing(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [handleResize]);
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();
  const payload = {
    token: finaltoken,
  };
  const response = useSelector(
    (state) => state.viewProfileReducer?.CurrentUser
  );

  useEffect(() => {
    dispatch({ type: GET_PROFILE_REQUEST, payload });
  }, [routerPath]);
  return (
    <div
      className=" w-full lg:max-w-[400px] h-[100vh] flex flex-1"
      style={{ overflow: "hidden" }}
    >
      <div className="w-full">
        <div className="w-full">
          <div className="bg-white flex">
            <img src={clientimg.src} alt="client Image" className="p-[24px]" />
            <div className="flex flex-col pt-[24px]">
              <p className="font-bold">{response?.fullName}</p>
              <div className="flex gap-3 pt-0">
                <p>{response?.jobRole}</p>
                <p className="font-extrabold -mt-1">.</p>
                <p>
                  {response?.totalExperience == (undefined || 0)
                    ? "Fresher"
                    : `NA`}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F3F2F4] pl-[24px] py-1 w-full">
            <div className="flex gap-4 py-2">
              <img src={email.src} alt="email" />
              <p>{response?.email}</p>
            </div>
            <div className="flex gap-4 py-2">
              <img src={call.src} alt="Phone" />
              <p>{response?.phoneNumber}</p>
            </div>
            <div className="flex gap-4 py-2">
              <img src={location.src} alt="location" />
              <p>{response?.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftProfile;
