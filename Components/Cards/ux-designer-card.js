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
];
const UxDesignerCard = ({
  name,
  jobTitle,
  experience,
  imageSrc,
  selected,
  onClick,
  shortlisted,
}) => {
  return (
    <>
      <div onClick={onClick}>
        <div
          className={`flex items-center border-b py-5 px-2 ${
            selected
              ? `${styles.selectedCard}`
              : shortlisted
              ? `${styles.shortlistedCard}`
              : ""
          }`}
         
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
              {jobTitle} . {experience}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UxDesignerCard;
