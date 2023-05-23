import InputComponent from "Components/Input/inputComponent";
import React, { useState } from "react";

const profile = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleCameraIconClick = () => {
        const fileInput = document.getElementById("image-preview");
        fileInput.click();
      };
      const handleImageChange = (e) => {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
      };
  return (
    <div className="bg-[#2B373C1C] py-10 px-10">
        <div className="flex justify-between mx-9">
            <div className="my-3 m">
                <p className="text-2xl font-bold	">Set Employer Profile</p>
            </div>
        <button className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3">
            <img src="/Assets/check.svg" alt="save"/>
              Save
            </button></div>
    <div className=" bg-white px-4 py-12 mx-8 border rounded-xl">

      <div className="flex items-center flex-col">
        <div
          className="bg-[#2B373C1C] flex justify-center items-center"
          style={{ width: "120px", height: "120px", borderRadius: "24px" }}
          onClick={handleCameraIconClick}
        >
          {selectedImage ? (
            <img src={selectedImage} alt="selectedImage" />
          ) : (
            <img src="/Assets/camera-icon.svg" alt="cameraIcon" />
          )}
          <input
                        id="image-preview"
                        type="file"
                        name="company_logo"
                        accept=".jpg,.jpeg,.png,.svg"
                        hidden
                        onChange={handleImageChange}
                      />
        </div>
        <p className="py-5" style={{ color: "#2B373C", opacity: "56%" }}>
          Upload Company Logo
        </p>
      </div>

      {/* form */}
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="relative">
            <label
              className="absolute top-[-8px] left-0 ml-2 mt-px  bg-white px-1 text-gray-600 text-xs"
              for="companyName"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Google"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
            />
          </div>
          {/*  */}
          <div>
            <input
              type="text"
              id="Industry"
              placeholder="Industry Type"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
            />
          </div>
          {/*  */}
          <div>
            <input
              type="text"
              id="CompanyId"
              placeholder="Company ID number"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
            />
          </div>
          {/*  */}
          <div className="relative flex items-center col-span-4">
            <input
              type="text"
              id="companyURL"
              placeholder="Company website URL"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
            />
            <button className=" absolute right-2 px-8 py-3 bg-red-500 text-white rounded-[10px]">
              Paste
            </button>
          </div>
          {/*  */}
          <div>
            <input
              type="text"
              id="Email"
              placeholder="Email"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
            />
          </div>
          {/*  */}
          <div className="col-span-6">
            <textarea
              type="text"
              id="CompanySize"
              placeholder="Write about company..."
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
            />
          </div>
          {/*  */}
          <div>
            <input
              type="text"
              id="CompanySize"
              placeholder="Company Size"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
            />
          </div>
          {/*  */}
          <div>
            <input
              type="text"
              id="Founded"
              placeholder="Founded in"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
            />
          </div>
          {/*  */}
          <div>
            <input
              type="text"
              id="CompanyLocation"
              placeholder="Company Location"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
            />
          </div>
        </div>
        {/* main div  */}

        {/*  */}
      </form>

    </div>
    </div>
  );
};

export default profile;
