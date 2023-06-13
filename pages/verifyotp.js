import React, { useState } from "react";
import { OTP_REQUEST } from "store/type/otpType";
import { REENTEROTP_REQUEST } from "store/type/reOtpType";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Verifyotp = () => {
  const [otp, setOtp] = useState("");
  const [inputOtpErr, setInputOtpErr] = useState("");
  const dispatch = useDispatch();
  const inputvalid = otp.length;
  const router = useRouter();
  const email = useSelector(
    (state) => state.registerReducer?.data?.data?.user?.email
  );
  const data = useSelector((state) => state.otpReducer?.data?.status);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("CurrentUser"));
    const role = storedData?.user?.role;
    if (data == 200) {
      if (role === "employer") {
        router.push("/profile");
      } else if (role === "consultant") {
        router.push("/setup-details");
      }
    }
  }, [data]);

  const confirmClick = () => {
    if (inputvalid == 6) {
      const payload = { email, otp };
      dispatch({ type: OTP_REQUEST, payload });
    } else {
      setInputOtpErr("Please Enter a valid OTP");
    }
  };

  const resendClick = () => {
    const payload = { email };
    dispatch({ type: REENTEROTP_REQUEST, payload });
  };
  return (
    <div className=" flex flex-col items-center m-[23vh]">
      <div className="">
        <h1 className="font-black text-xl">LOGO</h1>
      </div>
      <div className="flex flex-col items-center p-3">
        <h1 className="font-bold p-2 text-lg">Confirm you email</h1>
        <h2 className="font-medium">Type in the code we sent to {email} </h2>
      </div>
      <div className="p-2 relative h-[60px]">
        <input
          className="w-[350px] h-[40px] border border-black pl-[150px]"
          placeholder="--------"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        {inputOtpErr && (
          <h6
            variant="h6"
            className="text-red-500 absolute top-[40px] left-[8px] pt-[2px]"
          >
            {inputOtpErr}
          </h6>
        )}
      </div>
      <div className="flex items-center justify-between ">
        <button
          onClick={resendClick}
          className="border border-blue-500  p-2 text-white rounded-xl m-2 bg-blue-500"
        >
          Re-send
        </button>
        <button
          onClick={confirmClick}
          className="border border-green-500 p-2 text-white rounded-xl m-2 bg-green-500"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default Verifyotp;
