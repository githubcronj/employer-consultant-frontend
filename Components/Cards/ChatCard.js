import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/LoginPage.module.css";

const ChatCard = ({
  id,
  name,
  jobTitle,
  experience,
  imageSrc,
  selected,
  onClick,
  shortlisted,
  showCheckbox,
}) => {
  let cardClassName = `${styles.card} ${styles.border}`;

  if (selected && shortlisted) {
    cardClassName += ` ${styles.selectedShortlistedCard}`;
  } else if (selected) {
    cardClassName += ` ${styles.shortlistedCard2}`;
  } else if (shortlisted) {
    cardClassName += ` ${styles.shortlistedCard}`;
  }
  return (
    <>
      <div onClick={onClick}>
        <div
          className={`flex items-center border-b py-5 px-2 ${cardClassName}`}
        >
          <p className="px-2">12 Jan 2022</p>
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
          <div>
            {" "}
            {showCheckbox && (
              <input
                type="checkbox"
                checked={selected}
                onChange={onClick}
                className="cursor-pointer lg:ml-[75px] sm:ml-[200px]"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatCard;
