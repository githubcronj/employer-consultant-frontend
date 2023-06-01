
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/LoginPage.module.css";
const cardData = [
    {
     
        name: "James Joy",
        jobTitle: "UX Designer",
        experience: "2 yr Exp",
        imageSrc: "/Assets/clientImg.png",
        selected:true,
        shortlisted:true,
       
    },
    {
        name: "James Joy",
        jobTitle: "UX Designer",
        experience: "2 yr Exp",
        imageSrc: "/Assets/clientImg.png",
        
       
    },
    {
        name: "James Joy",
        jobTitle: "UX Designer",
        experience: "2 yr Exp",
        imageSrc: "/Assets/clientImg.png",
        
       
    }
   
]
const UxDesignerCard = ({name,jobTitle,experience,imageSrc,selected,onClick,shortlisted}) => {
  return (
   <>
   <div onClick={onClick}>
   <div className={`flex items-center mt-5 border-b p-2 ${styles.uxCard} ${
          selected ? "mt-2" : ""
        }`}
        style={
          selected && shortlisted
            ? { borderLeft: "4px solid red" ,background: "linear-gradient(#F9342E00,#F9342E33)"}
            : selected
            ? { borderLeft: "4px solid #5E9AF8" ,background: "linear-gradient(#5E9AF800, #5E9AF833)"}
            : {}
        }>


      <Image
            src={imageSrc}
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer w-10 h-10 rounded-full mr-4"
          />
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-bold text-[16px]">{name}</p>
        <p className="text-gray-600 mt-2">{jobTitle} . {experience}</p>
      </div>
    </div>
    
    </div>
   </>
  )
}


const UxDesignerCardList = ({ onShortlistClick ,shortlistedCard}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (cardName) => {
    setSelectedCard(cardName);
  };
  const handleClickShortlistBtn = (cardName) => {
    // Call the callback function to update the shortlisted state in the parent component
    onShortlistClick(cardName);
    setSelectedCard(cardName);
  };
    return (
      <>
        {cardData.map((card,index) => (
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