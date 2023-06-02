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
import { object } from "yup";
const viewProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [flexing, setFlexing] = useState(false);
  const [popup, setPopup] = useState(false);
  const route = useRouter();
  const dispatch = useDispatch();
  // const editClick = () => {
  //   route.push("/editJobPost");
  // };
  const backClicked = () => {
    route.push("/");

  };

  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  useEffect(() => {
    dispatch({ type: PROFILE_REQUEST, getToken });
  }, []);
  const data = useSelector((state) => state.getProfileReducer?.CurrentUser);
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
  // console.log("response", response);
  let finaldata = response?.filter((x, y) => {
    return id == x?._id;
  });
  console.log('finaldata',finaldata)
  const editClick = () => {

    // const data = finaldata
    // console.log('router',data);
    // router.push({
    //   pathname: '/editJobPost',
    //   query: { id: id,  },
    //   undefined,
    //   shallow: true  
    // });
    const stateString = JSON.stringify(finaldata);
    const encodedState = encodeURIComponent(stateString);

    router.push({
      pathname: '/editJobPost',
      query: { state: encodedState },
    });
  };
  const mappedData = finaldata?.map((item, index) => {
    const description = item.description;
    const jobTitle = item.name;
    const experience = item.experience;
    const salary = item.salary;
    const deadline = item.deadline;
    const email = item.email;
    const phoneNumber = item.phoneNumber;
    return (
      deadline, email, description, jobTitle, experience, salary, phoneNumber
    );
  });

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
            className={`justify-between xl:mt-[10px] lg:mt-[10px] md:mt-[10px] sm:mt-[10px]
           pt-[10px] -mt-[10px] xl:pt-[10px] mb-4
           lg:pt-[10px] md:pt-[10px] sm:pt-[10px] items-center mx-4 sm:mr-9 sm:ml-[10px] flex ${
             flexing ? "flex-col" : "flex-row"
           }
           `}
          >
            <div className='flex items-center gap-x-4 '>
              <img
                src={backbtn.src}
                alt='back button'
                width={46}
                height={46}
                className='cursor-pointer'
                onClick={backClicked}
              />
              <p className=' text-[26px] text-[#2B373C] sm:text-2xl font-bold'>
                View JobPost
              </p>
            </div>
            <div>
              <button onClick={editClick}>
                <img
                  src={edit.src}
                  alt='edit'
                  className='w-[125px] h-[51px] mr-3'
                />
              </button>
              <button onClick={deleteClicked}>
                <img
                  src={deletebutton.src}
                  alt='delete'
                  className='w-[125px] h-[51px]'
                />
              </button>
            </div>
          </div>
          <hr className='mt-[25px]xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[5px]'></hr>
          {finaldata?.map((item, index) => {
            return (
              <div className='mt-[19px] mx-3 flex justify-between'>
                <div style={{ width: "100%" }}>
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
                      <p className='text-xl font-extrabold  xl:pl-[17px] lg:pl-[17px] sm:pl-[17px] md:pl-[17px] pl-[5px]  h-[19px] mb-[15px] mt-[15px] text-[#000000] text-left font-sans'>
                        UX Designer
                      </p>

                      <div className='flex items-center justify-between align-baseline'>
                        <p className='w-[54px] mr-6 xl:pl-[17px] lg:pl-[17px] sm:pl-[17px] md:pl-[17px] pl-[5px] font-bold h-[19px] mb-[15px] mt-[15px] text-[#000000] text-left font-sans'>
                          Google
                        </p>
                        <p className='pt-1'>company Id</p>
                      </div>
                    </div>
                  </div>

                  <hr className=' ' style={{ width: "100%" }}></hr>

                  <div className='flex m-3 '>
                    <img
                      src={experienceicon.src}
                      alt=''
                      className='w-[44px] h-[44px]'
                    />

                    <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      {item?.experience} years
                    </p>
                  </div>

                  <div className='flex m-3 '>
                    <img
                      src={building.src}
                      alt=''
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      IT consultancy
                    </p>
                  </div>
                  <div className='flex m-3 '>
                    <img
                      src={money.src}
                      alt='money'
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      {item?.salary}
                    </p>
                  </div>
                  <div className='flex m-3 '>
                    <img
                      src={laptop.src}
                      alt='laptop'
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      {item?.jobType}{" "}
                    </p>
                  </div>
                  <div className='flex m-3 '>
                    <img
                      src={location.src}
                      alt=''
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
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
                    <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      20-04-2024
                    </p>
                  </div>
                  <div className='flex m-3 '>
                    <img
                      src={mail.src}
                      alt='mail'
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      {item?.email}{" "}
                    </p>
                  </div>
                  <div className='flex m-3 '>
                    <img
                      src={call.src}
                      alt='Phone number'
                      className='w-[44px] h-[44px]'
                    />
                    <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                      {item?.phoneNumber}{" "}
                    </p>
                  </div>
                  <hr className='xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[25px]'></hr>
                </div>
                <div className='border w-[1px] h-[100vh] -mt-[19px] ml-[5px]'></div>
                <div className='w-[100%] pl-[30px]'>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default viewProfile;
