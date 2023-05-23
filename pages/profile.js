import InputComponent from "Components/Input/inputComponent";
import React from "react";

const profile = () => {
  return (
    <>
      {/* <div>profile</div> */}

      <div
        className="bg-[#2B373C1C] flex justify-center items-center"
        style={{ width: "120px", height: "120px", borderRadius: "24px" }}
      >
        <img src="/Assets/camera-icon.svg" alt="cameraIcon" />
      </div>
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
          <div className="relative flex items-center col-span-2">
            <input
              type="text"
              id="companyURL"
              placeholder="Company website URL"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
            />
            <button className=" absolute right-2 px-5 py-3 bg-red-500 text-white rounded-[10px]">
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
    </>
  );
};

export default profile;
