import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/LoginPage.module.css";

export const cardData = [
  {
    id: 1,
    name: "James Joy",
    jobTitle: "UX Designer",
    experience: "2 yr Exp",
    imageSrc: "/Assets/clientImg.png",
    selected: true,
    shortlisted: true,
  },
  {
    id: 2,
    name: "James Joy",
    jobTitle: "UX Designer",
    experience: "2 yr Exp",
    imageSrc: "/Assets/clientImg.png",
  },
  {
    id: 3,
    name: "James Joy",
    jobTitle: "UX Designer",
    experience: "2 yr Exp",
    imageSrc: "/Assets/clientImg.png",
  },
  {
    id: 4,
    name: "James Joy",
    jobTitle: "UX Designer",
    experience: "2 yr Exp",
    imageSrc: "/Assets/clientImg.png",
  },
  {
    id: 5,
    name: "James Joy",
    jobTitle: "UX Designer",
    experience: "2 yr Exp",
    imageSrc: "/Assets/clientImg.png",
  },
  {
    id: 6,
    name: "James Joy",
    jobTitle: "UX Designer",
    experience: "2 yr Exp",
    imageSrc: "/Assets/clientImg.png",
  },
  {
    id: 7,
    name: "James Joy",
    jobTitle: "UX Designer",
    experience: "2 yr Exp",
    imageSrc: "/Assets/clientImg.png",
  },
  {
    id: 8,
    name: "James Joy",
    jobTitle: "UX Designer",
    experience: "2 yr Exp",
    imageSrc: "/Assets/clientImg.png",
  },
  {
    id: 9,
    name: "James Joy",
    jobTitle: "UX Designer",
    experience: "2 yr Exp",
    imageSrc: "/Assets/clientImg.png",
  },
];
const ConsultantCard = ({
  id,
  name,
  jobTitle,
  experience,
  imageSrc,
  selected,
  onClick,
  shortlisted,
  showCheckbox
}) => {
  let cardClassName = `${styles.card} ${styles.border}`;
  
  if (selected && shortlisted) {
    cardClassName += ` ${styles.selectedShortlistedCard}`;
  } else if (selected) {
    cardClassName += ` ${styles.selectedCard}`;
  } else if (shortlisted) {
    cardClassName += ` ${styles.shortlistedCard}`;
  }
  return (
    <>
      <div  onClick={onClick}>
        <div
          className={`flex items-center border-b py-5 px-2 ${cardClassName}`}
         
        >
          <Image
            src={imageSrc}
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer w-10 h-10 rounded-full mr-4"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none font-bold text-[16px]">
              {name}
            </p>
            <p className="text-gray-600 mt-2">
              {jobTitle} . {experience} yr Exp
            </p>
          </div>
          <div> {showCheckbox && (
            <input
              type="checkbox"
              checked={selected}
              onChange={onClick}
              className="cursor-pointer lg:ml-[75px] sm:ml-[200px]"
            />
          )}</div>
        </div>
      </div>
    </>
  );
};

export default ConsultantCard;
