
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UxDesignerCardList from "Components/Cards/ux-designer-card";
import Popover from "Components/PopOver/popOver";
import Popoverr from "Components/PopOver/popOver";
import {cardData} from "../Components/Cards/ux-designer-card";
import UxDesignerCard from "Components/Cards/ux-designer-card";
const appliedConsultant = () => {
  const router = useRouter();
   
  const [selectedCard, setSelectedCard] = useState(null);
  const [shortlistedCards, setShortlistedCards] = useState([]);

  useEffect(() => {
    const selectedCardData = localStorage.getItem("selectedCard");
    const shortlistedCardsData = localStorage.getItem("shortlistedCards");

    if (selectedCardData) {
      setSelectedCard(JSON.parse(selectedCardData));
    }

    if (shortlistedCardsData) {
      setShortlistedCards(JSON.parse(shortlistedCardsData));
    }
  }, []);

  // Update local storage whenever selectedCard or shortlistedCards change
  useEffect(() => {
    localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
    localStorage.setItem("shortlistedCards", JSON.stringify(shortlistedCards));
  }, [selectedCard, shortlistedCards]);

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const handleShortlistClick = (id) => {
    if (!shortlistedCards.includes(id)) {
      setShortlistedCards([...shortlistedCards, id]);
      console.log("shortlisted")
    }
  };
  const shortlistedCount = shortlistedCards.length;

  const handleRemoveShortlisted = () => {
    const updatedShortlistedCards = shortlistedCards.filter((cardId) => cardId !== selectedCard);
    setShortlistedCards(updatedShortlistedCards);
  };
  
   const [errors, setErrors] = useState({});
  const renderErrorMessage = (fieldName) => {
    if (errors[fieldName]) {
      return (
        <p className="text-red-500 text-xs font-bold">{errors[fieldName]}</p>
      );
    }
    return null;
  };



  return (
   
    <div className=" grid lg:grid-cols-12 sm:grid-col-span-2 bg-[#2B373C1C] py-5 px-2 sm:px-2">
        <div className="lg:col-start-1 lg:col-end-12  sm:col-span-3">
   <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mx-2 sm:mx-6 bg-white border px-4 py-4">
  <div className="flex items-center gap-x-4 lg:col-span-1 sm:col-span-2">
    <Image
      src="/Assets/backbtn.svg"
      alt="back button"
      width={46}
      height={46}
      className="cursor-pointer"
    />
    <div>
      <p className="text-[26px] text-[#2B373C] sm:text-2xl font-bold">
        UX Designer
      </p>
      <p className="text-[14px] text-[#2B373C]">3-5 years experience</p>
    </div>
  </div>
  <div className="flex items-center gap-x-4 lg:col-span-1 sm:col-span-2">
    <p className="text-[16px] text-[#2B373C]">Full Time .</p>
    <p className="text-[16px] text-[#2B373C]">$10-15 /hr .</p>
    <p className="text-[16px] text-[#2B373C]">12-09-2023</p>
  </div>
  
  <div className="flex items-center  lg:justify-end gap-x-4 lg:col-span-1 sm:col-span-2">
    <p className="text-[16px] text-[#5E9AF8] font-bold">View Job Post</p>
    <img src="/Assets/forwardArr.svg" alt="frw-ar" />
  </div>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-6 bg-[#F9F6EE] border px-4 py-4">
  <div className="col-span-1 sm:col-span-2 lg:col-span-1">
    <div className="relative w-full">
      <input
        type="text"
        id="simple-search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Search"
        required
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Image src="/Assets/searchIcon.svg" alt="Search Icon" width={16} height={16} />
      </div>
    </div>
  </div>
  <div className="col-span-1 sm:col-span-1 lg:col-span-2">
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="lg:col-span-1 sm:col-span-3">
        <select
          id="experience1"
          required
          className="py-2 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select"
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            backgroundImage: "none",
            backgroundImage: "url(/Assets/down-arrow.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "95% center",
            paddingRight: "20px",
            ...(errors.experience ? { borderColor: "red" } : {}),
          }}
        >
          <option value="">Education Level</option>
          <option value="one">1 year</option>
          <option value="two">2 years</option>
          <option value="three">3 years</option>
        </select>
      </div>
      <div className="lg:col-span-1 sm:col-span-3">
        <select
          id="experience2"
          required
          className="py-2 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select"
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            backgroundImage: "none",
            backgroundImage: "url(/Assets/down-arrow.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "95% center",
            paddingRight: "20px",
            ...(errors.experience ? { borderColor: "red" } : {}),
          }}
        >
          <option value="">Applied Date</option>
          <option value="one">1 year</option>
          <option value="two">2 years</option>
          <option value="three">3 years</option>
        </select>
      </div>
      <div className="lg:col-span-1 sm:col-span-3">
        <select
          id="experience3"
          required
          className="py-2 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select"
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            backgroundImage: "none",
            backgroundImage: "url(/Assets/down-arrow.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "95% center",
            paddingRight: "20px",
            ...(errors.experience ? { borderColor: "red" } : {}),
          }}
        >
          <option value="">Location</option>
          <option value="one">1 year</option>
          <option value="two">2 years</option>
          <option value="three">3 years</option>
        </select>
      </div>
      <div className="lg:col-span-1 sm:col-span-3">
        <button
          type="submit"
          className="flex items-center gap-2 px-8 py-2 bg-transparent text-[#A7A7A7] border border-[#A7A7A7] rounded-[16px] inline-flex gap-4 items-center tracking-wide  mr-1 sm:mr-3"
        >
          <img src="/Assets/crossIcon.svg" alt="Image" className="w-4 h-4" />
          Clear
        </button>
      </div>
    </div>
  </div>
</div>


      <div className=" bg-white    mx-2 sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-6">
        {/* first section */}
        <div className="flex flex-col lg:col-span-2 py-6"
          style={{ borderRight: "2px solid #D8D8DD" }}
        >
            <div className="flex px-3">
            <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
            {cardData.length} Consultant
          </p>
          <div className="bg-[#5E9AF8] ml-2 px-2 py-1 border rounded text-[#ffffff]">{shortlistedCount}</div>
            </div>
            <div className="h-[550px] overflow-auto"
              style={{ scrollbarWidth: "thin" }}>
        {cardData.map((card) => (
          <UxDesignerCard
          key ={card.id}
          name={card.name}
          jobTitle={card.jobTitle}
          experience={card.experience}
          imageSrc={card.imageSrc}
          selected={card.id === selectedCard}
          shortlisted={shortlistedCards.includes(card.id)}
          onClick={() => handleCardClick(card.id)}
          onRemove={() => handleRemoveClick(card.id)}
          />

        ))}</div>
            
        <div>
          
        </div>
        
        </div>
        {/* section 2 */}
        <div className="lg:col-span-3">
        <div className="grid lg:grid-cols-12">
  <div className="border-l border-r lg:col-start-1 lg:col-end-12">
    <img src="/Assets/resumeTemplate.png" alt="cameraIcon" />
  </div>
  <div className="border-l lg:col-start-12 lg:col-end-12 flex justify-end items-end ">
    <img src="/Assets/downloadbtn.svg" alt="cameraIcon" />
  </div>
</div>

 
</div>
        <div className=" flex lg:flex-col sm:flex-row  py-6 px-3 lg:col-span-1 border-l lg:ml-12 sm:ml-0"  style={{ width: "fit-content" }}>
       
      
<Popoverr text={"Select and add into shortlist"}>
        <button onClick={() => handleShortlistClick(selectedCard)} className="flex justify-end px-3 py-3">
          <img src="/Assets/tick.svg" alt="tick" />
        </button>
      </Popoverr>
      <Popoverr text={"Reject the consultant"}>
          <button onClick={handleRemoveShortlisted} className="flex justify-end px-3 py-3">
            <img src="/Assets/crossbtn.svg" alt="tick"/>
          </button>
          </Popoverr>
          <hr/>
          <Popoverr text={"Send mail invite for interview"}>
          <button className="flex justify-end px-3 py-3">
            <img src="/Assets/mailBtn.svg" alt="tick"/>
          </button>
          </Popoverr>
          <Popoverr text={"Chat with consultant"}>
          <button className="flex justify-end px-3 py-3">
            <img src="/Assets/chat.svg" alt="tick"/>
          </button>
          </Popoverr>
          <Popoverr text={"Send E-mail"}>
          <button className="flex justify-end px-3 py-3">
            <img src="/Assets/mail2.svg" alt="tick"/>
          </button>
          </Popoverr>
          
        </div>
      
      </div>
      </div>

      <div className=" lg:col-start-12 lg:col-end-12 sm:col-start-1 sm:col-end-12" >
        <div className="">
      <div className="flex items-center justify-center">
  <button className="flex justify-center items-center font-bold text-16px m-2">
  <span className="mr-2">
      <img src="/Assets/editIcon.svg" alt="Delete Icon" />
    </span>
    Edit
  
  </button>
</div>
        <div className="flex items-center justify-center">
  <button className="flex justify-center items-center font-bold text-16px m-2">
  <span className="mr-2">
      <img src="/Assets/deleteIcon.svg" alt="Delete Icon" />
    </span>
    Delete
  
  </button>
 
</div>
</div>

      </div>
    </div>
   
  
  );
};

export default appliedConsultant;