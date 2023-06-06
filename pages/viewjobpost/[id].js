import React, { useEffect, useState } from "react";
import backbtn from "../../public/Assets/backbtn.svg";
import edit from "../../public/Assets/edit.svg";
import google from "../../public/Assets/googleIcon.png";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { PROFILE_REQUEST } from "store/type/getProfileType";
import { useSelector } from "react-redux";
import deletebutton from "../../public/Assets/deletered.svg";
import experienceicon from "../../public/Assets/suitcase.svg";
import building from "../../public/Assets/building.svg";
import call from "../../public/Assets/call.svg";
import laptop from "../../public/Assets/laptop.svg";
import location from "../../public/Assets/location.svg";
import mail from "../../public/Assets/mail.svg";
import money from "../../public/Assets/money.svg";
import scheduler from "../../public/Assets/scheduler.svg";
import { DELETE_JOB_REQUEST } from "store/type/deletejobType";
import DeletePopUP from "../../Components/Delete/deletePopUp";
import { GET_JOB_REQUEST } from "store/type/getjobType";

import { object } from "yup";
const ViewProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [flexing, setFlexing] = useState(false);
  const [popup, setPopup] = useState(false);
  const route = useRouter();
  const dispatch = useDispatch();

  const backClicked = () => {
    route.push("/");
  };

  let payload;
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      payload = tokenset.token.accessToken;
    }
  });
  useEffect(() => {
    dispatch({ type: GET_JOB_REQUEST, payload });
  }, []);

  useEffect(() => {
    if (window.innerWidth < 394) {
      setFlexing(true);
    } else {
      setFlexing(false);
    }
  }, []);
  const response = useSelector(
    (state) => state?.getjobReducer?.CurrentUser?.data
  );
  let finaldata = response?.filter((x, y) => {
    return id == x?._id;
  });

  const editClick = () => {
    const stateString = JSON.stringify(finaldata);
    const encodedState = encodeURIComponent(stateString);

    router.push({
      pathname: `/editJobPost/${id}`,
      // query: { state: encodedState },
    });
  };

  const deleteClicked = () => {
    setPopup(true);
  };
  return (
    <div
      className={`w-[100%] xl:w-[1040px] lg:w-[1000px] sm:w-[720px] md:w-[900px]`}
    >
      {popup && <DeletePopUP id={id} setPopup={setPopup} />}

      <div
        className={`bg-[#2B373C1C] 
       xl:py-2 lg:py-2 md:py-2 sm:py-2 py-2 xl:px-4 md:px-4 sm:px-4 lg:px-4 ${
         flexing ? " ml-1" : ""
       } 
       `}
      >
        <div
          className='bg-white'
          style={{
            boxShadow: " 0px 2px 10px #4C4E641A",
            borderRadius: "4px",
            // maxWidth: "1030px",
            width: "100%",
          }}
        >
          <div
            className={`grid lg:grid-cols-12 xl:mt-[10px] lg:mt-[10px] md:mt-[10px] sm:mt-[10px]
           pt-[10px] -mt-[10px] xl:pt-[10px] mb-4
           lg:pt-[10px] md:pt-[10px] sm:pt-[10px] items-center mx-4 sm:mr-9 sm:ml-[10px] 
           `}
          >
            <div className='lg:col-span-8'>
              <div className='flex items-center gap-x-4 sm:pb-3'>
                <img
                  src={backbtn.src}
                  alt='back button'
                  width={46}
                  height={46}
                  className='cursor-pointer'
                  onClick={backClicked}
                />
                <p className=' lg:text-[26px] sm:text-[12px] text-[#2B373C] font-bold'>
                  View Job Post
                </p>
              </div>
            </div>
            <div className='lg:col-span-4'>
              <div className='flex lg:flex-row sm:flex-col'>
                <button
                  onClick={editClick}
                  className='w-[125px] h-[51px] mr-3 px-5 sm:mt-[10px] bg-[#F9342E] text-white border rounded-[13px] flex items-center'
                >
                  <img
                    src='/Assets/whiteEditIcon.svg'
                    alt='edit'
                    className='mr-2'
                  />
                  <span className='font-semibold font-ProductSans'>EDIT</span>
                </button>

                <button
                  onClick={deleteClicked}
                  className='w-[125px] h-[51px] mr-3 px-5 sm:mt-[10px] bg-[#F9342E] text-white border rounded-[13px] flex items-center'
                >
                  <img
                    src='/Assets/whiteDeleteIcon.svg'
                    alt='edit'
                    className='mr-2'
                  />
                  <span className='font-semibold font-ProductSans'>DELETE</span>
                </button>
              </div>
            </div>
          </div>
          <hr className='mt-[25px]xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[5px]'></hr>
          {finaldata?.map((item, index) => {
            return (
              <div key={index} className="mt-[19px] mx-3 grid lg:grid-cols-12 sm:col-span-2">
                <div className="lg:col-span-6 sm:col-span-1 border-r-2">
                  <div
                    className={`flex items-center mb-[15px] ${
                      flexing ? "flex-col" : "flex-row"
                    }`}
                  >
                    <img
                      src={google.src}
                      alt='googleIcon'
                      className='w-[60px] h-[60px]'
                    />
                    <div>
                      <p className='text-2xl font-extrabold  xl:pl-[17px] lg:pl-[17px] sm:pl-[17px] md:pl-[17px] pl-[5px]  h-[19px] mb-[15px] mt-[15px] text-[#000000] text-left font-sans'>
                        UX Designer
                      </p>

                      <div className='flex items-center justify-between align-baseline'>
                        <p className='w-[54px] mr-6 xl:pl-[17px] lg:pl-[17px] sm:pl-[17px] md:pl-[17px] pl-[5px] font-bold h-[19px] mb-[10px] mt-[10px] text-[#000000] text-left font-sans'>
                          Google
                        </p>
                        <p className='pt-1'>company Id</p>
                      </div>
                    </div>
                  </div>

                  <div className='flex m-3 '>
                    <img
                      src={experienceicon.src}
                      alt=''
                      className='w-[44px] h-[44px]'
                    />

                    <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      {item?.experience} years
                    </p>
                  </div>

                  <div className='flex m-3 '>
                    <img
                      src={building.src}
                      alt=''
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      IT consultancy
                    </p>
                  </div>
                  <div className='flex m-3 '>
                    <img
                      src={money.src}
                      alt='money'
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      {item?.salary}
                    </p>
                  </div>
                  <div className='flex m-3 '>
                    <img
                      src={laptop.src}
                      alt='laptop'
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      {item?.jobType}{" "}
                    </p>
                  </div>
                  <div className='flex m-3 '>
                    <img
                      src={location.src}
                      alt=''
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      Silicon Valley
                    </p>
                  </div>
                  <hr className='xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[25px]'></hr>

                  <div className='flex m-3 '>
                    <img
                      src={scheduler.src}
                      alt='calender'
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      20-04-2024
                    </p>
                  </div>
                  <div className='flex m-3 '>
                    <img
                      src={mail.src}
                      alt='mail'
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      {item?.email}{" "}
                    </p>
                  </div>
                  <div className='flex m-3 '>
                    <img
                      src={call.src}
                      alt='Phone number'
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      {item?.phoneNumber}{" "}
                    </p>
                  </div>
                  <hr className='xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[25px]'></hr>
                </div>

                <div className=' pl-[30px] lg:col-span-6 sm:col-span-1 '>
                  <div className='py-5'>
                    <h1 className='text-[#1E0F3B] mb-[20px] w-[152px] h-[24px] font-bold tracking-[0.2px]'>
                      About the job
                    </h1>
                    <p
                      className=' h-auto text-[#1E0F3B] opacity-[0.7] font-normal font-sans text-left'
                      style={{ width: "100%" }}
                    >
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ViewProfile;
