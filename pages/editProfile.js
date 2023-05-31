import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchFormData, submitFormData } from "store/action/editProfileAction";
import { profileSaveRequest } from "store/action/profileAction";
import { initialState } from "store/reducer/editProfileReducer";

// ...

const EditProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFormData());
    console.log("Fetching form data");
  }, []);

  const formDataa = useSelector((state) => state?.editProfileReducer?.data);
 
  const router = useRouter();
  const [isFieldChanged, setIsFieldChanged] = useState(false);
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("Assets/newCronjLogo.svg");
  const [formValues, setFormValues] = useState({
    companyName: "",
    industryType: "",
    companyId: "",
    companyWebsiteUrl: "",
    email: "",
    aboutCompany: "",
    companySize: "",
    companyLocation: "",
    companyFoundedDate: "",
    accessToken: "",
  });
  useEffect(() => {
    if (formDataa?.response) {
      const {
        companyName,
        industryType,
        companyId,
        companyWebsiteUrl,
        email,
        aboutCompany,
        companySize,
        companyLocation,
        companyFoundedDate,
        accessToken,
      } = formDataa.response;

      setFormValues({
        companyName,
        industryType,
        companyId,
        companyWebsiteUrl,
        email,
        aboutCompany,
        companySize,
        companyLocation,
        companyFoundedDate,
        accessToken,
      });
    }
  }, [formDataa]);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      setData(JSON.parse(storedData));
    }
  }, []);
  useEffect(() => {
    if (data && data.token && data.token.accessToken) {
      setFormValues((prevValues) => ({
        ...prevValues,
        accessToken: data.token.accessToken,
      }));
    }
  }, [data]);
  console.log("formmm", formValues);
  const [errors, setErrors] = useState({});
 
  console.log('datttt',data)
 
  const renderErrorMessage = (fieldName) => {
    if (errors[fieldName]) {
      return <p className='text-red-500 text-xs'>{errors[fieldName]}</p>;
    }
    return null;
  };
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
    const requiredFields = [
      "companyName",
      "industry",
      "companyId",
      "companyURL",
      "email",
      "companyDetail",
      "companySize",
      "companyFounded",
      "companyLocation",
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      console.log(formValues);
      if (formValues[field] === "") {
        errors[field] = "This field is required";
      }
    });
    console.log(errors);

    if (
      formValues.email !== "" &&
      !/^[\w+.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(formValues.email)
    ) {
      errors.email = "Invalid email format";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
console.log('formvalues',formValues)
  const handleSave = (e) => {
    e.preventDefault();
    if (isFormValid() && data?.token?.accessToken) {
      // dispatch(profileSaveRequest(formValues));
      dispatch(submitFormData(formValues,data));
      const initialFormValues = {
        companyName: "",
        industry: "",
        companyId: "",
        companyWebsiteUrl: "",
        email: "",
        companyDetail: "",
        companySize: "",
        founded: "",
        companyLocation: "",
        accessToken: "",
      };

      setFormValues(initialFormValues);
      setSelectedImage(null);
      router.push("/");
    } else {
      return;
    }
  };
  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as "yyyy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;

    setFormValues((prevValues) => ({
      ...prevValues,
      companyFoundedDate: formattedDate, // Update the companyFoundedDate field in formValues with the formatted date
    }));
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    setIsFieldChanged(true);
    if (id === "email") {
      const isValidEmail = /^[\w+.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(
        value
      );
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: isValidEmail ? "" : "Invalid email format",
      }));
    }
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
    <div className='bg-[#2B373C1C] py-10 px-2 sm:px-10'>
      <div className='sm:flex justify-between items-center mx-5 sm:mx-9'>
        <div className='my-3 m'>
          <p className='text-lg sm:text-2xl font-bold'>Edit Employer Profile</p>
        </div>
        <button
          className='px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3'
          onClick={handleSave}
        >
          <img src='/Assets/check.svg' alt='save' />
          Save
        </button>
      </div>
      <div className=' bg-white px-4 py-12 mx-2 sm:mx-8 border rounded-xl'>
        <div className='flex items-center flex-col'>
          <div
            className='bg-[#2B373C1C] flex justify-center items-center'
            style={{ width: "120px", height: "120px", borderRadius: "24px" }}
            onClick={handleCameraIconClick}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                style={{ width: "120px", height: "120px" }}
                alt='selectedImage'
              />
            ) : (
              <img src='/Assets/camera-icon.svg' alt='cameraIcon' />
            )}
            <input
              id='image-preview'
              type='file'
              name='company_logo'
              accept='.jpg,.jpeg,.png,.svg'
              hidden
              onChange={handleImageChange}
            />
          </div>
          <p className='py-5' style={{ color: "#2B373C", opacity: "56%" }}>
            Upload Company Logo
          </p>
        </div>

        {/* form */}
        <form>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='relative'>
              <label
                className='absolute top-[-8px] left-0 ml-2 mt-px  bg-white px-1 text-[#1E0F3B] text-xs font-bold'
                for='companyName'
              >
                Company Name
              </label>
              <input
                type='text'
                id='companyName'
                placeholder='Google'
                required
                style={errors.companyName ? { borderColor: "red" } : {}}
                className='py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full'
                value={formValues.companyName}
                onChange={handleChange}
              />
              {renderErrorMessage("companyName")}
            </div>
            {/*  */}
            <div className='relative'>
              <input
                type='text'
                id='industryType'
                placeholder=' '
                required
                style={errors.industry ? { borderColor: "red" } : {}}
                className='block py-5 px-4 w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                value={formValues.industryType}
                onChange={handleChange}
              />
              {renderErrorMessage("industry")}
              <label
                for='industryType'
                className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
              >
                Industry Type
              </label>
            </div>

            {/*  */}
            <div className='relative'>
              <input
                type='text'
                id='companyId'
                placeholder=' '
                required
                style={errors.companyId ? { borderColor: "red" } : {}}
                className='block py-5 px-4  w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                value={formValues.companyId}
                onChange={handleChange}
              />
              {renderErrorMessage("companyId")}
              <label
                for='companyId'
                className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
              >
                Company ID number
              </label>
            </div>
            {/*  */}
            <div className='sm:col-span-2'>
              <div className='relative flex items-center'>
                <input
                  type='text'
                  id='companyWebsiteUrl'
                  placeholder=' '
                  required
                  style={errors.companyWebsiteUrl ? { borderColor: "red" } : {}}
                  // className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  className='block py-5 px-4 w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  value={formValues.companyWebsiteUrl}
                  onChange={handleChange}
                />
                <label
                  for='companyUrl'
                  className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
                >
                  Company website URL
                </label>
                <button
                  className=' absolute right-2 px-6 sm:px-8 py-3 bg-[#5E9AF8] text-white rounded-[10px]'
                  onClick={handlePaste}
                >
                  Paste
                </button>
              </div>
              {renderErrorMessage("companyURL")}
            </div>
            {/*  */}
            <div className='relative'>
              <input
                type='text'
                id='email'
                placeholder=' '
                required
                style={errors.email ? { borderColor: "red" } : {}}
                className={`block py-5 px-4 w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  isFieldChanged && errors.email ? "border-red-500" : ""
                }`}
                value={formValues.email}
                onChange={handleChange}
              />
              {renderErrorMessage("email")}
              <label
                for='email'
                className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
              >
                Email
              </label>
            </div>
            {/*  */}
            <div className='sm:col-span-3 relative'>
              <textarea
                type='text'
                id='aboutCompany'
                placeholder=' '
                required
                style={errors.aboutCompany ? { borderColor: "red" } : {}}
                className='block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                value={formValues.aboutCompany}
                onChange={handleChange}
              />
              <label
                for='aboutCompany'
                className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
              >
                Write about company...
              </label>
            </div>
            {/*  */}
            <div className='relative'>
              <input
                type='text'
                id='companySize'
                placeholder=' '
                required
                style={errors.companySize ? { borderColor: "red" } : {}}
                className='block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                value={formValues.companySize}
                onChange={handleChange}
              />
              {renderErrorMessage("companySize")}
              <label
                for='companySize'
                className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
              >
                Company Size
              </label>
            </div>
            {/*  */}
            <div>
              <div className='relative flex items-center'>
                {/* <DatePicker
                  id="founded"
                  placeholderText=" "
                  required
                  className={`block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${errors?.founded ? "border-red-600" : ""}`}
                  selected={formValues.founded}
                  onChange={(date) =>
                    handleChange({ target: { id: "founded", value: date } })
                  }
                /> */}
                <DatePicker
                  id='companyFoundedDate'
                  placeholderText=' '
                  required
                  className={`block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                    errors?.companyFoundedDate ? "border-red-600" : ""
                  }`}
                  // selected={formValues.companyFoundedDate}

                  // onChange={(date) =>
                  //   handleChange({ target: { id: "companyFoundedDate", value: date } })
                  // }
                  selected={
                    formValues.companyFoundedDate
                      ? new Date(formValues.companyFoundedDate)
                      : null
                  }
                  onChange={handleDateChange}
                />
                <label
                  for='companyFoundedDate'
                  className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
                >
                  Founded In{" "}
                </label>
                <img
                  src='/Assets/blue-calendar.svg'
                  alt='calendar'
                  className='absolute right-2'
                  onClick={() => document.getElementById("founded").click()}
                />{" "}
              </div>{" "}
              {renderErrorMessage("founded")}{" "}
            </div>

            {/*  */}
            <div className='relative'>
              <input
                type='text'
                id='companyLocation'
                placeholder=' '
                required
                style={errors.companyLocation ? { borderColor: "red" } : {}}
                className='block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                value={formValues.companyLocation}
                onChange={handleChange}
              />
              {renderErrorMessage("companyLocation")}
              <label
                for='companyLocation'
                className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
              >
                Company Location
              </label>
            </div>
          </div>

          {/* main div  */}
        </form>
      </div>
    </div>
  );
};

export default EditProfile;