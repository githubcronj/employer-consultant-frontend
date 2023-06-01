
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
const UxDesignerCard = ({name,jobTitle,experience,imageSrc,imageAlt,imageSize}) => {
  return (
   <>
   <div className="gap-3">
          <div className={`flex items-center mt-5 m-3 border-b p-2 ${styles.uxCard}` }>
      
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


const UxDesignerCardList = () => {
    return (
      <>
        {cardData.map((card) => (
          <UxDesignerCard
            key={card.name}
            name={card.name}
            jobTitle={card.jobTitle}
            experience={card.experience}
            imageSrc={card.imageSrc}
            
          />
        ))}
      </>
    );
  };
  
  export default UxDesignerCardList;