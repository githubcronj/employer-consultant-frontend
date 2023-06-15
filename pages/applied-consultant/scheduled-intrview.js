import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Popoverr from "Components/PopOver/popOver";
import ConsultantCard, {
  cardData,
} from "../../Components/Cards/ConsultantsCard";


import Link from "next/link";

import ConfirmationModal from "Components/Modals/ConfirmationModal";
import withAuth from "Components/ProtectedRoute/WithAuth";
import withEmployerAuth from "Components/ProtectedRoute/withEmployerAuth";

const ScheduleInterview = () => {
  const router = useRouter();

  const [selectedCard, setSelectedCard] = useState(null);
  const [scheduledCard, setscheduledCard] = useState([]);
  const [shortlistMessage, setShortlistMessage] = useState(
    `Shortlisted.`
  );
  const [scheduledMessage, setscheduleMessage] = useState(
    `Add to schedule.`
  );
  const [invitationClick, setinvitationClick] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleYes = () => {
    setYesClicked(true);
    setModalOpen(false);
  };

  const handleNo = () => {
    setModalOpen(false);
  };

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const openSelectConsultantModal = () => {
    setModalOpen(true)
  }
  const handleScheduleClick = (id) => {
    if (!scheduledCard.includes(id)) {
      setscheduledCard([...scheduledCard, id]);
      const currentDate = new Date().toLocaleDateString("en-US");
      const message = `Add to schedule.\n${currentDate} `;
      setinvitationClick(message);
    
    }
  };

  
  const handleRemovescheduled = () => {
    const updatedscheduledCard = scheduledCard.filter(
      (cardId) => cardId !== selectedCard
    );
    setscheduledCard(updatedscheduledCard);
    setinvitationClick(false);
   
  };
 

  const isCardShortlisted = scheduledCard.includes(selectedCard);

  const renderShortlistButton = () => {
    if (isCardShortlisted || invitationClick === "Consultant shortlisted.") {
      return (
        <>
          <button onClick={() => handleRemovescheduled()}>
            <img src="/Assets/removeShortlistedButton.svg" alt="remove" />
          </button>
        </>
      );
    } else {
      return (
        <Popoverr text={"Select and add into shortlist"}>
          <button
            onClick={() => handleShortlistClick(selectedCard)}
            className="flex justify-end px-3 py-3"
          >
            <img src="/Assets/tick.svg" alt="tick" />
          </button>
        </Popoverr>
      );
    }
  };

  return (
    <div className=" grid lg:grid-cols-12 sm:grid-col-span-2 bg-[#2B373C1C] py-5 px-2 sm:px-2">
      <div className="lg:col-start-1 lg:col-end-12  sm:col-span-3">
      <div className="grid lg:grid-cols-12  gap-4 mx-2 sm:mx-6 bg-white border px-4 py-4">
          <div className="flex items-center lg:col-span-4 sm:col-span-2">
            <div>
              <p className="text-[26px] text-[#2B373C] sm:text-2xl font-bold">
              Scheduled Interview
              </p>
            </div>
          </div>
          <div className="  lg:col-span-5 sm:col-span-2">
          
     
            <div>
              <select
                id="experience1"
                required
                className="py-2 px-5 border rounded-[10px] border-[#D8D8DD] lg:w-[310px] sm:w-[300px] custom-select"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                  backgroundImage: "none",
                  backgroundColor: "#E8E7EB",
                  backgroundImage: "url(/Assets/down-arrow.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "95% center",
                  paddingRight: "20px",
                  ...(errors.experience ? { borderColor: "red" } : {}),
                }}
              >
                <option value="">UX Designer</option>
                <option value="one">1 year</option>
                <option value="two">2 years</option>
                <option value="three">3 years</option>
              </select>
            </div>
          </div>
          <div className="lg:col-span-3">
          {invitationClick ?  <button className="px-5 py-2 bg-[rgb(231,71,65)] text-[#ffffff] font-bold rounded-lg">
           1 SEND INVITES
          </button>
         :   <button className="px-5 py-2 bg-[#FEE2E1] text-[#F9342E] font-bold  rounded-lg">
           0 SEND INVITES
          </button> 
           
          }
          </div>
                </div>
        <div className="grid lg:grid-cols-12  gap-4 mx-2 sm:mx-6 bg-[#F9F6EE] border px-4 py-4">
          <div className="lg:col-span-4">
            <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search"
                required
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Image
                  src="/Assets/searchIcon.svg"
                  alt="Search Icon"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="flex gap-4">
              <p className="text-[16px] text-[#2B373C]">3-5 yrs experience.</p>
              <p className="text-[16px] text-[#2B373C]">Full Time .</p>
              <p className="text-[16px] text-[#2B373C]">$10-15 /hr .</p>
              <p className="text-[16px] text-[#2B373C]">12-09-2023</p>
            </div>
          </div>
        </div>

        <div className=" bg-white    mx-2 sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-6">
          {/* first section */}
          <div
            className="flex flex-col lg:col-span-2 py-6"
            style={{ borderRight: "2px solid #D8D8DD" }}
          >
            <div className="flex px-1">
            
              <p className=" text-[18px] text-[#2B373C]  font-bold">
              Scheduled Consultants
              </p>
              <div  className="ml-[25px] text-[#F9342E] font-bold">
               <p>select all</p>
              </div>
            
            
            </div>
            <div
              className="h-[550px] overflow-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              {cardData.map((card) => (
                <ConsultantCard
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  jobTitle={card.jobTitle}
                  experience={card.experience}
                  imageSrc={card.imageSrc}
                  selected={card.id === selectedCard}
                  shortlisted={scheduledCard.includes(card.id)}
                  onClick={() => handleCardClick(card.id)}
                  onRemove={() => handleRemoveClick(card.id)}
                  showCheckbox={true}
                >
                  {card.id === selectedCard && (
                    <div className="flex flex-col gap-y-4">
                      {renderShortlistButton()}
                      <Link
                        href="/consultant/[id]"
                        as={`/consultant/${card.id}`}
                      >
                        <a>View Details</a>
                      </Link>
                    </div>
                  )}
                </ConsultantCard>
              ))}
            </div>

            <div></div>
          </div>
          {/* section 2 */}
          <div className="lg:col-span-3">
            <div className="grid lg:grid-cols-12">
              <div className="border-l lg:col-start-1 lg:col-end-12">
                <img src="/Assets/resumeTemplate.png" alt="cameraIcon" />
              </div>
              <div className="border-l lg:col-start-12 lg:col-end-12 flex justify-end items-end ">
                <img src="/Assets/downloadbtn.svg" alt="cameraIcon" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col  lg:justify-normal sm:justify-center py-6 px-3 lg:col-span-1 border-l lg:ml-12 sm:ml-0">
            <div className="flex items-center justify-center mt-2">
              
           
                <div className="mt-2 px-4 py-2 bg-[#EAE9EA] text-[#131523] border rounded border-gray-300 shadow w-[150px] lg:ml-[-50px] sm:ml-[0px]">
                <div className="px-1 py-2">
                <p className="font-bold ">
                
                {shortlistMessage}
          
              </p>
              <p>  {new Date().toLocaleDateString("en-US")}</p>
                </div>
                <div className="px-1 py-2">
              <p  className="font-bold">

                {scheduledMessage}
               
              </p>
              <p>  {new Date().toLocaleDateString("en-US")}</p>
              </div>
           
                
              
            </div>
        
            </div>
            {invitationClick ? (
              <>
               
    
                  <Popoverr text={"Remove from Invite list"}>
                    <button
                      onClick={handleRemovescheduled}
                      className="flex justify-end px-3 py-3"
                    >
                      <img
                        src="/Assets/removeShortlistedButton.svg"
                        alt="tick"
                      />
                    </button>
                  </Popoverr>
              

              
              </>
            ) : (
              <>
                <Popoverr text={"Add to Invite list"}>
                  <button
                    onClick={() => handleScheduleClick(selectedCard)}
                    className="flex justify-end px-3 py-3"
                  >
                    <img src="/Assets/addInvite.svg" alt="tick" />
                  </button>
                </Popoverr>
                <Popoverr text={"Remove from Schedule"}>
                  <button
                    onClick={handleRemovescheduled}
                    className="flex justify-end px-3 py-3"
                  >
                    <img src="/Assets/crossBtn.svg" alt="tick" />
                  </button>
                </Popoverr>
              
              </>
            )}

            <hr />
            <Popoverr text={"Select Consultant"}>
              <button onClick={openSelectConsultantModal} className="flex justify-end px-3 py-3">
                <img src="/Assets/tick.svg" alt="tick" />
              </button>
            </Popoverr>
           
            <Popoverr text={"Send mail invite for interview"}>
              <button className="flex justify-end px-3 py-3">
                <img src="/Assets/mailBtn.svg" alt="tick" />
              </button>
            </Popoverr>
            <Popoverr text={"Chat with consultant"}>
              <button className="flex justify-end px-3 py-3">
                <img src="/Assets/chat.svg" alt="tick" />
              </button>
            </Popoverr>
            <Popoverr text={"Send E-mail"}>
              <button className="flex justify-end px-3 py-3">
                <img src="/Assets/mail2.svg" alt="tick" />
              </button>
            </Popoverr>
            <ConfirmationModal
               text={"Are you sure selecting, Olivia Wilson?"}
               isOpen={modalOpen}
               onClose={handleCloseModal}
               onYes={handleYes}
               onNo={handleNo}
            />
          </div>
        </div>
      </div>

      <div className=" lg:col-start-12 lg:col-end-12 sm:col-start-1 sm:col-end-12"></div>
    </div>
  );
};

export default withEmployerAuth(ScheduleInterview);
