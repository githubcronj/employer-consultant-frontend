import React, { useState } from "react";
import clientimg from "../../public/Assets/clientImg.png";
import resume from "../../public/Assets/resumeTemplate.png";
import email from "../../public/Assets/envelopeIcon.svg";
import call from "../../public/Assets/callbtn.svg";
import location from "../../public/Assets/locationIcon.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_PROFILE_REQUEST } from "store/type/viewProfileType";
import { useSelector } from "react-redux";
const LeftProfile = () => {
  const dispatch = useDispatch();
  const [flexing, setFlexing] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 700) {
      setFlexing(true);
    } else {
      setFlexing(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [handleResize]);
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();
  const payload = {
    token: finaltoken,
  };
  const response = useSelector(
    (state) => state.viewProfileReducer?.CurrentUser
  );

  console.log("in left", response);
  useEffect(() => {
    dispatch({ type: GET_PROFILE_REQUEST, payload });
  }, []);
  return (
    <div
      className=" w-auto max-w-[400px] h-[100vh] flex flex-1"
      style={{ overflow: "hidden" }}
    >
      <div>
        <div className="">
          <div className="bg-white flex">
            <img src={clientimg.src} alt="client Image" className="p-[24px]" />
            <div className="flex flex-col pt-[24px]">
              <p className="font-bold">{response?.fullName}</p>
              <div className="flex gap-3 pt-0">
                <p>{response?.jobRole}</p>
                <p className="font-extrabold -mt-1">.</p>
                <p>
                  {response?.totalExperience == (undefined || 0)
                    ? "Fresher"
                    : `NA`}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F3F2F4] pl-[24px] py-1">
            <div className="flex gap-4 py-2">
              <img src={email.src} alt="email" />
              <p>{response?.email}</p>
            </div>
            <div className="flex gap-4 py-2">
              <img src={call.src} alt="Phone" />
              <p>{response?.phoneNumber}</p>
            </div>
            <div className="flex gap-4 py-2">
              <img src={location.src} alt="location" />
              <p>{response?.location}</p>
            </div>
          </div>
          {/* <img src={resume.src} style={{ maxHeight: "85vh" }} /> */}
          <div className="lg:col-span-2 mx-auto mt-8 lg:mx-0 lg:mt-0 max-h-[719px] overflow-y-scroll max-w-[700px] ">
            <div className="sm:flex items-center bg-black lg:px-4">
              <div className="w-[32%] flex items-center my-4 bg-[#FAD02C] rounded-full">
                {/* {selectedImage ? (
                  <img
                    src={selectedImage}
                    style={{ width: "fit-content", height: "auto" }}
                    alt="selectedImage"
                    className="h-[93%] w-[100%]"
                  />
                ) : ( */}
                <img
                  src="/Assets/image.svg"
                  alt="profile"
                  className="h-[93%] w-[100%]"
                />
                {/* )} */}
              </div>

              <div className="w-[68%] px-3 py-4 bg-black">
                <div className="text-[24px] font-bold mb-[10px] text-white break-words">
                  {response?.fullName && response?.fullName}
                  {response?.fullName === "" ? "David Anderson" : null}
                  {response?.fullName === undefined ? "David Anderson" : null}
                </div>
                <div className="text-[16px] w-[fit-content] font-medium text-white bg-gray-800 p-1 break-words">
                  {response?.jobRole && response?.jobRole}
                  {response?.jobRole === "" ? "UX Designer" : null}
                  {response?.jobRole === undefined ? "UX Designer" : null}
                  <span>- job role</span>
                </div>
                <div className="grid grid-cols-2 gap-2 my-10">
                  <div>
                    <div className="text-[14px] text-white font-bold break-words">
                      Phone:
                    </div>
                    <div className="text-[16px] text-white break-words">
                      {response?.phoneNumber && response?.phoneNumber}
                      {response?.phoneNumber === "" ? "+0000 0000 000" : null}
                      {response?.phoneNumber === undefined
                        ? "+0000 0000 000"
                        : null}
                    </div>
                  </div>

                  <div>
                    <div className="text-[14px] text-white font-bold break-words">
                      Email
                    </div>
                    <div className="text-[16px] text-white break-words">
                      {response?.email && response?.email}
                      {response?.email === "" ? "abc@email.com" : null}
                      {response?.email === undefined ? "abc@email.com" : null}
                    </div>
                  </div>

                  <div>
                    <div className="text-[14px] text-white font-bold break-words">
                      Gender:
                    </div>
                    <div className="text-[16px] text-white break-words">
                      {response?.gender && response?.gender}
                      {response?.gender === "" ? "Male" : null}
                      {response?.gender === undefined ? "Male" : null}
                    </div>
                  </div>

                  <div>
                    <div className="text-[14px] text-white font-bold break-words">
                      Loaction:
                    </div>
                    <div className="text-[16px] text-white break-words">
                      {response?.location && response?.location}
                      {response?.location === "" ? "Banglore" : null}
                      {response?.location === undefined ? "Banglore" : null}
                    </div>
                  </div>

                  <div>
                    <div className="text-[14px] text-white font-bold break-words">
                      Year of Experience
                    </div>
                    <div className="text-[16px] text-white break-words">
                      {response?.totalExperience && response?.totalExperience}
                      {response?.totalExperience === "" ? "5" : null}
                      {response?.totalExperience === undefined ? "5" : null}
                      <span>{` years`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start lg:mx-4 bg-[#EEEFEF]">
              <div className="flex items-center py-10 pl-4 sm:w-[32%]">
                <div>
                  <div className="text-[20px] font-bold mb-[10px] break-words">
                    Education
                  </div>
                  {response?.education?.length == 0 ? (
                    <div className="my-3">
                      <div className="text-[15px] break-words">2020</div>
                      <div className="text-[15px] font-bold break-words">
                        BCA in Bachelor Degree
                      </div>
                      <div className="text-[15px] break-words">
                        Mumbai University
                      </div>
                    </div>
                  ) : null}
                  {response?.education?.map((item, index) => {
                    return (
                      <div className="my-3" key={index}>
                        <div className="text-[15px] break-words">
                          {item.year}
                        </div>
                        <div className="text-[15px] font-bold break-words">
                          {item.level} in {item.degreeName}
                        </div>
                        <div className="text-[15px] break-words">
                          {item.institutionName}
                        </div>
                      </div>
                    );
                  })}

                  <div className="text-[20px] font-bold mt-8 break-words">
                    Skills
                  </div>
                  {response?.skill?.length == 0 ? (
                    <div className="my-3 flex items-center gap-2">
                      <div>
                        <img
                          src="/Assets/pointer.svg"
                          alt="points"
                          className=""
                        />
                      </div>
                      <div className="text-[15px] font-bold break-words">
                        Javascript
                      </div>
                    </div>
                  ) : null}
                  {response?.skill?.skillName?.map((item, index) => {
                    return (
                      <div className="my-3 flex items-center gap-2" key={index}>
                        <div>
                          <img
                            src="/Assets/pointer.svg"
                            alt="points"
                            className=""
                          />
                        </div>
                        <div className="text-[15px] font-bold break-words">
                          {item}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="px-3 py-10 sm:w-[68%] bg-white">
                <div>
                  <div>
                    <h2 className="text-[20px] font-bold mb-[10px] break-words">
                      Experience
                    </h2>
                    {response?.experience?.length == 0 ? (
                      <div className="grid sm:grid-cols-5 gap-2 my-2">
                        <div className="sm:col-span-2">
                          <div className="text-[15px] break-words">
                            2020 to 2021
                          </div>
                          <div className="text-[15px] font-bold break-words">
                            Company Name
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <div className="text-[15px] font-bold break-words">
                            Senior Developer
                          </div>
                          <div className="text-[15px] break-words">
                            Description - In publishing and graphic design,
                            Lorem ipsum is a placeholder text commonly used to
                            demonstrate the visual form of a document or a
                            typeface without relying on meaningful content.
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {response?.experience?.map((item, index) => {
                      return (
                        <div
                          className="grid sm:grid-cols-5 gap-2 my-2"
                          key={index}
                        >
                          <div className="sm:col-span-2">
                            <div className="text-[15px] break-words">
                              {item?.joinedDate?.split("-")[0]}{" "}
                              <span> to </span>
                              {item?.endDate?.split("-")[0]}
                            </div>
                            <div className="text-[15px] font-bold break-words">
                              {item.companyName}
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <div className="text-[15px] font-bold break-words">
                              {item.jobPosition}
                            </div>
                            <div className="text-[15px] break-words">
                              {item?.description}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <h2 className="text-[20px] font-bold mb-[10px] break-words">
                      Projects
                    </h2>
                    {response?.project?.length == 0 ? (
                      <div className="grid sm:grid-cols-5 gap-2 my-2">
                        <div className="sm:col-span-2">
                          <div className="text-[15px] break-words">
                            2020 to 2021
                          </div>
                          <div className="text-[15px] font-bold break-words">
                            Project Name
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <div className="text-[15px] font-bold break-words">
                            Link
                          </div>
                          <div className="text-[15px] break-words">
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without
                            relying on meaningful content.
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {response?.project?.map((item, index) => {
                      return (
                        <div
                          className="grid sm:grid-cols-5 gap-2 my-2"
                          key={index}
                        >
                          <div className="sm:col-span-2">
                            <div className="text-[15px] break-words">
                              {item?.startDate?.split("-")[0]} <span> to </span>
                              {item?.endDate?.split("-")[0]}
                            </div>
                            <div className="text-[15px] font-bold break-words">
                              {item.projectName}
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <div className="text-[15px] font-bold break-words">
                              <a
                                href={item.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline italic break-words "
                              >
                                link
                              </a>
                            </div>
                            <div className="text-[15px] w-full break-words ">
                              {item.projectDescription}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    {response?.certification?.length == 0 ? (
                      <div>
                        <div className="text-[20px] font-bold mt-8 break-words">
                          Certfication
                        </div>
                        <div>
                          <div className="text-[15px] font-bold break-words">
                            Big Data Certification Course by Caltech
                          </div>

                          <div>issued On: 20-02-2020</div>
                          <div>expiration Date: 20-02-2020</div>

                          <div>
                            <a
                              href="http://localhost:3000/resume"
                              className="text-blue-400 underline italic break-words "
                            >
                              view certificate
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {response?.certification?.length != 0 && (
                      <div className="text-[20px] font-bold mt-8">
                        Certfication
                      </div>
                    )}

                    {response?.certification?.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="text-[15px] font-bold break-words">
                            {item.courseName} <span> by </span>
                            {item.issuingOrganization}
                          </div>

                          <div>issued On: {item.issueDate}</div>
                          <div>expiration Date: {item.expirationDate}</div>

                          <div>
                            <a
                              href={item.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 underline italic break-words "
                            >
                              view certificate
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftProfile;
