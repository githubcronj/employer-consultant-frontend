import React from 'react'


const ConfirmationModal = ({ isOpen, onClose, onYes, onNo,text }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md">
        <p className="mb-4">{text}</p>
        <div className="flex justify-center">
          <button
            className="mr-2 px-4 py-2 border-[1px] border-[#90889E]  bg-[#ffffff] text-[#90889E] rounded-lg w-[100px]"
            onClick={onNo}
          >
            No
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg w-[100px]"
            onClick={onYes}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
