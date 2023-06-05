import React, { useState } from "react";
import home from "../../public/Assets/home.svg";
import shortlisted from "../../public/Assets/userlist.svg";
import task from "../../public/Assets/task.svg";
import calender from "../../public/Assets/calendar1.svg";
import consultant from "../../public/Assets/group.svg";
import communication from "../../public/Assets/communication.svg";
import subscription from "../../public/Assets/subscription.svg";
import { useRef } from "react";
import { useEffect } from "react";
import cross from "../../public/Assets/x.png";
import { Router, useRouter } from "next/router";
export const SideBar = () => {
  const [display, setDisplay] = useState(true);
  const [homebg, setHomebg] = useState(true);
  const [shortlistedbg, setShortlistedbg] = useState(false);
  const [taskbg, setTaskbg] = useState(false);
  const [consultantbg, setConsultantbg] = useState(false);
  const [communicationbg, setCommunicationbg] = useState(false);
  const [subscriptionbg, setSubscriptionbg] = useState(false);
  const [scheduledbg, setScheduledbg] = useState(false);
  const [modal, setModal] = useState(false);
  const [isfixed, setIsfixed] = useState(false);
  const router = useRouter()
  const click = (id) => {
    if (id == 0) {
      setCommunicationbg(false);
      setConsultantbg(false);
      setSubscriptionbg(false);
      setTaskbg(false);
      setShortlistedbg(false);
      setScheduledbg(false);
      setHomebg(true);
      router.push("/")
    } else if (id == 1) {
      setHomebg(false);
      setCommunicationbg(false);
      setConsultantbg(false);
      setSubscriptionbg(false);
      setTaskbg(false);
      setScheduledbg(false);
      setShortlistedbg(true);
      router.push("/appliedConsultant/shortlisted-consultant")
      
    } else if (id == 2) {
      setHomebg(false);
      setCommunicationbg(false);
      setConsultantbg(false);
      setSubscriptionbg(false);
      setTaskbg(false);
      setShortlistedbg(false);
      setScheduledbg(true);
    
    } else if (id == 3) {
      setHomebg(false);
      setCommunicationbg(false);
      setSubscriptionbg(false);
      setTaskbg(false);
      setShortlistedbg(false);
      setScheduledbg(false);
      setConsultantbg(true);
    } else if (id == 4) {
      setHomebg(false);
      setCommunicationbg(false);
      setConsultantbg(false);
      setSubscriptionbg(false);
      setShortlistedbg(false);
      setScheduledbg(false);
      setTaskbg(true);
    } else if (id == 5) {
      setHomebg(false);
      setConsultantbg(false);
      setSubscriptionbg(false);
      setTaskbg(false);
      setShortlistedbg(false);
      setScheduledbg(false);
      setCommunicationbg(true);
    } else if (id == 6) {
      setHomebg(false);
      setCommunicationbg(false);
      setConsultantbg(false);
      setTaskbg(false);
      setShortlistedbg(false);
      setScheduledbg(false);
      setSubscriptionbg(true);
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setDisplay(false);
      setModal(true);
    } else {
      setDisplay(true);
      setModal(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [setDisplay]);
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 10) {
        setIsfixed(true);
      } else {
        setIsfixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='w-auto z-10'>
      <div
        className='cursor-pointer mt-3 ml-3 z-0 xl:hidden lg:hidden md:hidden sm:hidden'
        onClick={() => setDisplay(!display)}
      >
        {!display && (
          <div>
            <h3 className='w-5 h-[1px] border border-black mb-1'></h3>
            <h3 className='w-5 h-[1px] border border-black mb-1'></h3>
            <h3 className='w-5 h-[1px] border border-black mb-1'></h3>
          </div>
        )}
        {display && (
          <div>
            <img src={cross.src} alt='x' className='w-5 h-5' />
          </div>
        )}
      </div>
      {display && (
        <div
          className={`bg-white w-[220px] max-h-[832px] h-[100%] 
         
           fixed  ${isfixed ? "top-0" : "top-15"} `}
          style={{
            boxShadow: modal ? "rgba(0, 0, 0, 0.20) 212px 38px 0px 220px" : "",
          }}
        >
          <div
            className='flex items-center align-middle  justify-baseline h-[52px] pl-[20.74px] cursor-pointer w-[220px]'
            style={{
              background: homebg
                ? "linear-gradient(to right,rgba(230,100,101,0.35),rgba(230,100,101,0.10)  )"
                : "",
              borderLeft: homebg ? "2px solid red" : "",
            }}
            onClick={() => click(0)}
          >
            <img
              className='h-[20px] w-[21.04px] bg-transparent opacity-[1]'
              src={home.src}
            />
            <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tighter text-black pl-[19px] opacity-[1]'>
              Home
            </h5>
          </div>
          <div
            style={{
              background: shortlistedbg
                ? "linear-gradient(to right,rgba(230,100,101,0.35),rgba(230,100,101,0.10)  )"
                : "",
              borderLeft: shortlistedbg ? "2px solid red" : "",
            }}
            onClick={() => click(1)}
            className='flex items-center align-middle -mt-[9px] justify-baseline h-[52px] pl-[20.74px] cursor-pointer w-[220px]'
          >
            <img
              className='h-[20px] w-[21.04px] bg-transparent opacity-[1]'
              src={shortlisted.src}
            />

            <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tighter text-black pl-[19px] opacity-[1]'>
              Shortlisted Consultants
            </h5>
          </div>
          <div
            style={{
              background: scheduledbg
                ? "linear-gradient(to right,rgba(230,100,101,0.35),rgba(230,100,101,0.10)  )"
                : "",
              borderLeft: scheduledbg ? "2px solid red" : "",
            }}
            onClick={() => click(2)}
            className='flex items-center align-middle -mt-[9px] justify-baseline h-[52px] pl-[20.74px] cursor-pointer w-[220px]'
          >
            <img
              className='h-[20px] w-[21.04px] bg-transparent opacity-[1]'
              src={calender.src}
            />

            <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tighter text-black pl-[19px] opacity-[1]'>
              Scheduled Interview
            </h5>
          </div>
          <div
            style={{
              background: consultantbg
                ? "linear-gradient(to right,rgba(230,100,101,0.35),rgba(230,100,101,0.10)  )"
                : "",
              borderLeft: consultantbg ? "2px solid red" : "",
            }}
            onClick={() => click(3)}
            className='flex items-center align-middle -mt-[9px] justify-baseline h-[52px] pl-[20.74px] cursor-pointer w-[220px]'
          >
            <img
              className='h-[20px] w-[21.04px] bg-transparent opacity-[1]'
              src={consultant.src}
            />

            <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tighter text-black pl-[19px] opacity-[1]'>
              Selected Consultant
            </h5>
          </div>
          <div
            style={{
              background: taskbg
                ? "linear-gradient(to right,rgba(230,100,101,0.35),rgba(230,100,101,0.10)  )"
                : "",
              borderLeft: taskbg ? "2px solid red" : "",
            }}
            onClick={() => click(4)}
            className='flex items-center align-middle -mt-[9px] justify-baseline h-[52px] pl-[20.74px] cursor-pointer w-[220px]'
          >
            <img
              className='h-[20px] w-[21.04px] bg-transparent opacity-[1]'
              src={task.src}
            />

            <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tighter text-black pl-[19px] opacity-[1]'>
              Task Managment
            </h5>
          </div>
          <div
            style={{
              background: communicationbg
                ? "linear-gradient(to right,rgba(230,100,101,0.35),rgba(230,100,101,0.10)  )"
                : "",
              borderLeft: communicationbg ? "2px solid red" : "",
            }}
            onClick={() => click(5)}
            className='flex items-center align-middle -mt-[9px] justify-baseline h-[52px] pl-[20.74px] cursor-pointer w-[220px]'
          >
            <img
              className='h-[20px] w-[21.04px] bg-transparent opacity-[1]'
              src={communication.src}
            />

            <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tighter text-black pl-[19px] opacity-[1]'>
              Chat
            </h5>
          </div>
          <div
            style={{
              background: subscriptionbg
                ? "linear-gradient(to right,rgba(230,100,101,0.35),rgba(230,100,101,0.10)  )"
                : "",
              borderLeft: subscriptionbg ? "2px solid red" : "",
            }}
            onClick={() => click(6)}
            className='flex items-center align-middle -mt-[9px] justify-baseline h-[52px] pl-[20.74px] cursor-pointer w-[220px]'
          >
            <img
              className='h-[20px] w-[21.04px] bg-transparent opacity-[1]'
              src={subscription.src}
            />

            <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tighter text-black pl-[19px] opacity-[1]'>
              Subscription
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};
