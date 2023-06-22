import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import profile from "../../asset/images/profile.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";
import { GET_PROFILE_REQUEST } from "store/type/viewProfileType";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useSelector } from "react-redux";
import { appliedJobSuccess } from "store/action/applyJobAction";

const ProfileSideBar = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const payload = {
    token: getToken(),
  };
  const finaltoken = getToken();

  useEffect(() => {
    dispatch({ type: GET_PROFILE_REQUEST, payload });
  }, []);
  useEffect(() => {
    dispatch(appliedJobSuccess(finaltoken));
  }, []);
  const response = useSelector(
    (state) => state?.viewProfileReducer?.CurrentUser
  );
  const jobData = useSelector((state) => state?.appliedJobReducer?.data);
  console.log("new response", response);
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "flex-start",
        alignItems: "center",
        width: { xs: "100%", lg: "28%" },
      }}
    >
      <Box
        mt={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {/* src={data?.user.image} */}
        <Image
          style={{ borderRadius: "50%" }}
          src="/Assets/homeProfile.png"
          alt="profile"
          width="100"
          height="100"
        />
        <Typography sx={{ fontWeight: "bold" }}>
          {response?.fullName}
        </Typography>
        {/* {response?.experience.map((item, index) => { */}
        {/* return ( */}
        <Typography
          // key={index}
          sx={{ color: "#5E5E5E", fontSize: "14px", textAlign: "center" }}
        >
          {response?.jobRole}
        </Typography>
        {/* );
        })} */}

        <Button
          onClick={() => router.push("/viewjobpost/cviewprofile")}
          style={{
            background: "#E7E9E9",
            color: "red",
            borderRadius: "13px",
            padding: ".7rem",
          }}
        >
          View Profile
        </Button>
      </Box>
      <Divider sx={{ width: "95%", height: "2px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: { xs: "1rem" },
        }}
      >
        <Link href="/consultant-applied-jobs/applied-jobs">
          <Button
            style={{
              backgroundColor: "red",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "13px",
              textTransform: "none",
              fontSize: "16px",
              padding: "0.5rem 1rem",
              whiteSpace: "nowrap",
            }}
          >
            Applied Job
            <span style={{ marginLeft: "3rem" }}>{jobData?.length}</span>
            <ArrowForwardIosIcon
              fontSize="small"
              style={{ marginLeft: "0.5rem" }}
            />
          </Button>
        </Link>
        <Link href="/consultant-interview">
          <Button
            style={{
              backgroundColor: "red",
              color: "white",
              display: "flex",
              alignItems: "center",
              borderRadius: "13px",
              justifyContent: "space-between",
              textTransform: "none",
              fontSize: "16px",
              padding: "0.5rem 1rem",
            }}
          >
            Interview schedule
            <ArrowForwardIosIcon
              fontSize="small"
              style={{ marginLeft: "0.5rem" }}
            />
          </Button>
        </Link>
      </Box>
      <Box>
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
                      <div className="text-[15px] break-words">{item.year}</div>
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
                          Description - In publishing and graphic design, Lorem
                          ipsum is a placeholder text commonly used to
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
                            {item?.joinedDate?.split("-")[0]} <span> to </span>
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
      </Box>
    </Paper>
  );
};

export default ProfileSideBar;
