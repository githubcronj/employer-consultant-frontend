
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/LoginPage.module.css";
const cardData = [
    {
     id:1,
        name: "James Joy",
        jobTitle: "UX Designer",
        experience: "2 yr Exp",
        imageSrc: "/Assets/clientImg.png",
        selected:true,
        shortlisted:true,
       
    },
    {
      id:2,
        name: "James Joy",
        jobTitle: "UX Designer",
        experience: "2 yr Exp",
        imageSrc: "/Assets/clientImg.png",
        
       
    },
    {
      id:3,
        name: "James Joy",
        jobTitle: "UX Designer",
        experience: "2 yr Exp",
        imageSrc: "/Assets/clientImg.png",
        
       
    },
    {
      id:4,
        name: "James Joy",
        jobTitle: "UX Designer",
        experience: "2 yr Exp",
        imageSrc: "/Assets/clientImg.png",
        
       
    },
    {
      id:5,
        name: "James Joy",
        jobTitle: "UX Designer",
        experience: "2 yr Exp",
        imageSrc: "/Assets/clientImg.png",
        
       
    },
    {
      id:6,
        name: "James Joy",
        jobTitle: "UX Designer",
        experience: "2 yr Exp",
        imageSrc: "/Assets/clientImg.png",
        
       
    }
   
]
const UxDesignerCard = ({ name, jobTitle, experience, imageSrc, selected, onClick, shortlisted }) => {
  const [isChecked, setIsChecked] = useState(false);
// const [cardData, setCardData] = useState();

  useEffect(() => {
    setIsChecked(selected);
  }, [selected]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div onClick={onClick}>
        <div
          className={`flex items-center border-b py-5 px-2 border-l-4[#ffffff] ${styles.uxCard} ${selected ? "" : ""}`}
          style={
            shortlisted
              ?  { borderLeft: "4px solid #5E9AF8", background: "linear-gradient( to left,#5E9AF800, #5E9AF833)" }
              : selected
              ?{ borderLeft: "4px solid red", background: "linear-gradient(#F9342E00,#F9342E33)" }
              : {}
          }
        >
          <Image src={imageSrc} alt="back button" width={46} height={46} className="cursor-pointer w-10 h-10 rounded-full mr-4" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none font-bold text-[16px]">{name}</p>
            <p className="text-gray-600 mt-2">
              {jobTitle} . {experience}
            </p>
          </div>
       
        </div>
      </div>
    </>
  );
};

const UxDesignerCardList = ({ onShortlistClick, shortlistedCard, selectedCard }) => {
  const handleClickShortlistBtn = (cardName) => {
    // Call the callback function to update the shortlisted state in the parent component
    onShortlistClick(cardName);
  };

  return (
    <>
      {cardData.map((card, index) => (
        <UxDesignerCard
          key={index}
          name={card.name}
          jobTitle={card.jobTitle}
          experience={card.experience}
          imageSrc={card.imageSrc}
          selected={selectedCard === index}
          shortlisted={shortlistedCard === index}
          onClick={() => handleClickShortlistBtn(index)}
        />
      ))}
    </>
  );
};

export default UxDesignerCardList;