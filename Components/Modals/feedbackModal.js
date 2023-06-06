import Image from "next/image";
import React from "react";

const FeedbackModal = ({ isOpen, onClose, onYes, onNo, text,image }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md lg:w-[500px] sm:w-64">
        <div className="flex justify-between">
        <p className="mb-4 font-bold text-[20px] ">{text}</p>
        <Image src={image ? "" :  "/Assets/modalDeleteIcon.svg"} width={15} height={15} alt="modaldeleteicon"></Image>
        </div>
        <div class="w-full">
          <textarea
            class="w-full h-40 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Write your comments..."
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="mr-2 px-4 py-2 border-[1px]  border-[#90889E]  bg-[#ffffff] text-[#90889E] rounded-lg w-[100px]"
            onClick={onNo}
          >
      Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg w-[100px]"
            onClick={onYes}
          >
          Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
