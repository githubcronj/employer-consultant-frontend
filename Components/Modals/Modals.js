import { useState } from "react";
import { useRouter } from "next/router";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const handleCloseModal = () => {
    setIsOpen(false);
    router.push("/login");
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-lg backdrop-filter backdrop-blur-lg">
        <h2 className="text-lg font-bold mb-4">{props.title ? props.title : "We just sent you an email!"}</h2>
        <div className="mb-4">
          {props.content ? (
            <p>{props.content}</p>
          ) : (
            <>
              <p className="mb-2">Thank you for signing up!</p>
              <p>Please check your email to activate your account.</p>
            </>
          )}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
