import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useRef } from "react";
import deletebutton from "../../public/Assets/delete.svg";
import cancelbutton from "../../public/Assets/cancelbtn.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DELETE_JOB_REQUEST } from "store/type/deletejobType";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { deleteJobRequest } from "store/action/deleteJobPostAction";
const DeletejobModal = ({ id, setPopup }) => {
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };

  const dispatch = useDispatch();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const [flexing, setflexing] = useState("");

  const handleResize = () => {
    if (window.innerWidth < 371) {
      setflexing(true);
    } else {
      setflexing(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const cancelClick = () => {
    setPopup(false);
  };

  const response = useSelector((state) => state?.getjobReducer?.CurrentUser);

  const data = useSelector((state) => state?.deletejobReducer?.CurrentUser);
  const deleteClick = () => {
    let payload = {
      token: getToken(),
      id: { id },
    };

    // const result = dispatch({ type: DELETE_JOB_REQUEST, payload });
    // console.log('dispatch',result);
    dispatch(
      deleteJobRequest(payload, () => {
        router.push("/");
      })
    );

    // if(data?.status === 200) {
    //   router.push("/");
    // }
    console.warn("modaldelete");
  };

  return (
    <>
      <>
        <div className="flex  bg-black bg-opacity-50 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative  w-auto my-6 mx-auto max-w-3xl ">
            <div className="w-auto  bg-white py-1 rounded-[15px] sm:w-[500px] lg:w-[513px] text-center xl:w[513px] xl:h-[212px] flex items-center justify-center">
              <div className="flex m-w[513px] w-[100%]  flex-col sm:flex justify-between items-center mx-3 my-3 sm:my-0">
                <div className="flex items-baseline justify-center gap-5 ">
                  <p className="text-2xl sm:text-2xl mt-3 font-bold text-[#1E0F3B]">
                    Delete Job Post
                  </p>
                </div>
                <div className="m-w[513px] w-[100%] h-[1px] border mt-5"></div>
                <div
                  className="mt-6 font-normal tracking-tight text-[#000000] opacity-[0.7] text-lg"
                  style={{ fontSize: flexing ? "1rem" : "1.125rem" }}
                >
                  <p>Are you sure you want to delete job post</p>
                </div>
                <div
                  className={`flex mb-7`}
                  style={{ flexDirection: flexing ? "column" : "" }}
                >
                  <button
                    className="uppercase text-[16px] font-bold bg-transparent text-[#90889E] w-[125px] h-[51px] border-[#90889E] border-[1px] rounded-[13px] mr-3 m-6 mb-0 cursor-pointer "
                    onClick={cancelClick}
                  >
                    cancel
                  </button>
                  <button
                    className="uppercase text-[16px] font-bold text-[#FFFFFF] w-[125px] h-[51px] bg-[#167EE6] rounded-[13px] ml-3 m-6 mb-0 cursor-pointer "
                    onClick={deleteClick}
                  >
                    Delete
                  </button>
                  {/* <img
                    src={cancelbutton.src}
                    alt="cancel"
                    className="m-6 mb-0 cursor-pointer"
                    onClick={cancelClick}
                  />
                  <img
                    src={deletebutton.src}
                    alt="delete"
                    className="m-6 mb-0 cursor-pointer"
                    onClick={deleteClick}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default DeletejobModal;
