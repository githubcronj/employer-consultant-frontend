import ChatComponent from "Components/ChatComponent/ChatComponent";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Popoverr from "Components/PopOver/index";
import { cardData } from "../Components/Cards/ConsultantsCard";
import ChatCard from "Components/Cards/ChatCard";
import Link from "next/link";
import { Box } from "@mui/material";
import styles from "../styles/LoginPage.module.css";
import withConsultantAuth from "Components/ProtectedRoute/withConsultantAuth";

const cardDaat2 = [
  {
    id: 1,
    name: "Google",
    jobTitle: "simply dummy text of the printing and",

    imageSrc: "/Assets/googleIcon2.svg",
    selected: true,
    shortlisted: true,
  },
  {
    id: 2,
    name: "Google",
    jobTitle: "simply dummy text of the printing and",

    imageSrc: "/Assets/googleIcon2.svg",
    selected: true,
    shortlisted: true,
  },
  {
    id: 3,
    name: "Google",
    jobTitle: "simply dummy text of the printing and",

    imageSrc: "/Assets/googleIcon2.svg",
    selected: true,
    shortlisted: true,
  },
];
const ChatPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [shortlistedCards, setShortlistedCards] = useState([]);
  const [shortlistMessage, setShortlistMessage] = useState("");

  const isCardShortlisted = shortlistedCards.includes(selectedCard);
  const backClicked = () => {
    router.push("/");
  };
  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const handleShortlistClick = (id) => {
    if (!shortlistedCards.includes(id)) {
      setShortlistedCards([...shortlistedCards, id]);
      const currentDate = new Date().toLocaleDateString("en-US");
      const message = `Shortlisted.\n${currentDate}`;
      setShortlistMessage(message);
    }
  };

  const shortlistedCount = shortlistedCards.length;

  const handleRemoveShortlisted = () => {
    const updatedShortlistedCards = shortlistedCards.filter(
      (cardId) => cardId !== selectedCard
    );
    setShortlistedCards(updatedShortlistedCards);
    setShortlistMessage(false);
  };
  const renderShortlistButton = () => {
    if (isCardShortlisted || shortlistMessage === "Consultant shortlisted.") {
      return (
        <>
          <button onClick={() => handleRemoveShortlisted()}>
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
  let cardClassName = `${styles.card} ${styles.border}`;
  return (
    <>
      <div>
        <div className=" grid lg:grid-cols-12 sm:grid-col-span-2 bg-[#2B373C1C] py-5 px-2 sm:px-2">
          <div className="lg:col-start-1 lg:col-end-12  sm:col-span-3">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mx-2 sm:mx-6 bg-white border px-4 py-4">
              <div className="flex items-center gap-x-4 lg:col-span-1 sm:col-span-2">
                <Image
                  onClick={backClicked}
                  src="/Assets/backbtn.svg"
                  alt="back button"
                  width={46}
                  height={46}
                  className="cursor-pointer"
                />
                <div>
                  <p className="text-[26px] text-[#2B373C] sm:text-2xl font-bold">
                    Chat
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white mx-2 sm:mx-6 lg-mx-12 border rounded-xl grid lg:grid-cols-6">
              {/* first section */}
              <div className="flex flex-col lg:col-span-3">
                <div
                  className="h-[550px] overflow-auto bg-[#F9F6EE]"
                  style={{ scrollbarWidth: "thin" }}
                >
                  <div className="px-[30px]">
                    <div className="relative w-full px-2 py-2">
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-[#FFFFFF] border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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

                  <Box>
                    {cardDaat2.map((card) => (
                      <ChatCard
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        jobTitle={card.jobTitle}
                        experience={card.experience}
                        imageSrc={card.imageSrc}
                        selected={card.id === selectedCard}
                        shortlisted={shortlistedCards.includes(card.id)}
                        onClick={() => handleCardClick(card.id)}
                        onRemove={() => handleRemoveClick(card.id)}
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
                      </ChatCard>
                    ))}
                  </Box>
                </div>

                <div></div>
              </div>

              <div className="lg:col-span-3">
                <div className="grid ">
                  <div
                    className={`flex items-center border-b py-5 px-2 ${cardClassName}`}
                  >
                    <Image
                      src="/Assets/googleIcon2.svg"
                      alt="back button"
                      width={46}
                      height={46}
                      className="cursor-pointer w-10 h-10 rounded-full mr-4"
                    />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none font-bold text-[16px]">
                        Google
                      </p>
                      <p className="text-gray-600 mt-2">Tech service</p>
                    </div>
                    <div className="text-sm ml-[200px]">
                      <p className="text-[#F9342E] leading-none font-bold text-[16px]">
                        Remove
                      </p>
                    </div>
                  </div>
                  <ChatComponent />
                  <div className="bg-[#F1F0F3] flex justify-center px-3 py-3 align-center mt-[100px]">
                    {" "}
                    <form>
                      <input
                        type="text"
                        style={{
                          width: "415px",
                          padding: "10px",
                          border: "none",
                          borderRadius: "5px",
                          fontFamily: "Arial, sans-serif",
                          fontSize: "14px",
                        }}
                        //           value={this.state.inputText}
                        //           onChange={(e) => this.onInputChange(e)}
                        placeholder="Type Something......"
                      />
                      <button>
                        {" "}
                        <Image
                          src="/Assets/sendIcon.svg"
                          alt="back button"
                          width={30}
                          height={0}
                          className="cursor-pointer"
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withConsultantAuth(ChatPage);
