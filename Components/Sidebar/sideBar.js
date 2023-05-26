import React, { useState } from "react";
import home from "../../public/Assets/home.svg";
import shortlisted from "../../public/Assets/userlist.svg";
import task from "../../public/Assets/task.svg";
import calender from "../../public/Assets/calendar1.svg";
import consultant from "../../public/Assets/group.svg";
import communication from "../../public/Assets/communication.svg";
import subscription from "../../public/Assets/subscription.svg";

export const SideBar = () => {
  const [homebg, setHomebg] = useState(false);
  const [shortlistedbg, setShortlistedbg] = useState(false);
  const [taskbg, setTaskbg] = useState(false);
  const [consultantbg, setConsultantbg] = useState(false);
  const [communicationbg, setCommunicationbg] = useState(false);
  const [subscriptionbg, setSubscriptionbg] = useState(false);
  const [scheduledbg, setScheduledbg] = useState(false);

  const click = (id) => {
    if (id == 0) {
      setCommunicationbg(false);
      setConsultantbg(false);
      setSubscriptionbg(false);
      setTaskbg(false);
      setShortlistedbg(false);
      setScheduledbg(false);
      setHomebg(true);
    } else if (id == 1) {
      setHomebg(false);
      setCommunicationbg(false);
      setConsultantbg(false);
      setSubscriptionbg(false);
      setTaskbg(false);
      setScheduledbg(false);
      setShortlistedbg(true);
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

  return (
    <div>
      <div className='fixed w-[220px] max-h-[832px] h-[100%] pt-[38px] shadow-[0px_1px_1px_rgba(21,34,50,0.08)]'>
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
          <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tight text-black pl-[19px] opacity-[1]'>
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

          <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tight text-black pl-[19px] opacity-[1]'>
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

          <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tight text-black pl-[19px] opacity-[1]'>
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

          <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tight text-black pl-[19px] opacity-[1]'>
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

          <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tight text-black pl-[19px] opacity-[1]'>
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

          <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tight text-black pl-[19px] opacity-[1]'>
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

          <h5 className='h-[17px] text-left -mt-[9px] font-sans tracking-tight text-black pl-[19px] opacity-[1]'>
            Subscription
          </h5>
        </div>
      </div>
    </div>
  );
};
