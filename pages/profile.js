import { useRouter } from "next/router";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const profile = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [formValues, setFormValues] = useState({
    companyName: "",
    industry: "",
    companyId: "",
    companyURL: "",
    email: "",
    companyDetail: "",
    companySize: "",
    founded: "",
    companyLocation: "",
  });
  const handleCameraIconClick = () => {
    const fileInput = document.getElementById("image-preview");
    fileInput.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
    }
  };
  const isFormValid = () => {
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key) && formValues[key] === "") {
        return false;
      }
    }
    return true;
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log(formValues);
      const initialFormValues = {
        companyName: "",
        industry: "",
        companyId: "",
        companyURL: "",
        email: "",
        companyDetail: "",
        companySize: "",
        founded: "",
        companyLocation: "",
      };
      setFormValues(initialFormValues);
      setSelectedImage(null);
      router.push("/");
    } else {
      alert("Please fill in all the required fields.");
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };
  const handlePaste = async (event) => {
    event.preventDefault();

    try {
      const text = await navigator.clipboard.readText();
      setFormValues((prevValues) => ({ ...prevValues, companyURL: text }));
    } catch (error) {
      console.error("Failed to read clipboard content:", error);
    }
  };

  return (
    <div className="bg-[#2B373C1C] py-10 px-2 sm:px-10">
      <div className="flex justify-between items-center mx-5 sm:mx-9">
        <div className="my-3 m">
          <p className="text-lg sm:text-2xl font-bold">Set Employer Profile</p>
        </div>
        <button
          className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3"
          onClick={handleSave}
        >
          <img src="/Assets/check.svg" alt="save" />
          Save
        </button>
      </div>
      <div className=" bg-white px-4 py-12 mx-2 sm:mx-8 border rounded-xl">
        <div className="flex items-center flex-col">
          <div
            className="bg-[#2B373C1C] flex justify-center items-center"
            style={{ width: "120px", height: "120px", borderRadius: "24px" }}
            onClick={handleCameraIconClick}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                style={{ width: "120px", height: "120px" }}
                alt="selectedImage"
              />
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative">
              <label
                className="absolute top-[-8px] left-0 ml-2 mt-px  bg-white px-1 text-[#1E0F3B] text-xs font-bold"
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
                value={formValues.companyName}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div>
              <input
                type="text"
                id="industry"
                placeholder="Industry Type"
                required
                className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                value={formValues.industry}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div>
              <input
                type="text"
                id="companyId"
                placeholder="Company ID number"
                required
                className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                value={formValues.companyId}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div className="relative flex items-center sm:col-span-2">
              <input
                type="text"
                id="companyURL"
                placeholder="Company website URL"
                required
                className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                value={formValues.companyURL}
                onChange={handleChange}
              />
              <button
                className=" absolute right-2 px-6 sm:px-8 py-3 bg-red-500 text-white rounded-[10px]"
                onClick={handlePaste}
              >
                Paste
              </button>
            </div>
            {/*  */}
            <div>
              <input
                type="text"
                id="email"
                placeholder="Email"
                required
                className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div className="sm:col-span-3">
              <textarea
                type="text"
                id="companyDetail"
                placeholder="Write about company..."
                required
                className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                value={formValues.companyDetail}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div>
              <input
                type="text"
                id="companySize"
                placeholder="Company Size"
                required
                className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                value={formValues.companySize}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div className="relative flex items-center">
              <DatePicker
                id="founded"
                placeholderText="Founded in"
                required
                className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                selected={formValues.founded}
                onChange={(date) =>
                  handleChange({ target: { id: "founded", value: date } })
                }
              />
              <img
                src="/Assets/calendar.svg"
                alt="calendar"
                className="absolute right-2"
                onClick={() => document.getElementById("founded").click()}
              />{" "}
            </div>
            {/*  */}
            <div>
              <input
                type="text"
                id="companyLocation"
                placeholder="Company Location"
                required
                className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                value={formValues.companyLocation}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* main div  */}
        </form>
      </div>
    </div>
  );
};

export default profile;
