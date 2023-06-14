import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const ResumeCreated = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/search_job");
  }, 1000);

  return (
    <div className="bg-[#2B373C1C] py-5 px-2 sm:px-10 mx-auto">
      <div className=" bg-white max-w-[1620px]  mx-2 lg:mx-auto sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-4">
        <div className="lg:col-span-2 mx-auto mt-8 lg:mx-0 lg:mt-0 py-10 lg:pl-20">
          <img src="/Assets/resumeTemplate.png" alt="cameraIcon" />
        </div>
        <div
          className="flex flex-col justify-center lg:col-span-2"
          style={{
            borderRight: "2px solid #D8D8DD",
            marginTop: "1.5rem",
          }}
        >
          <div className="text-center ">
            <Image
              className="mx-auto"
              src="/Assets/rightClick.png"
              alt="resume created"
              width={140}
              height={140}
            />
            <p className="text-[26px] text-[#2B373C] sm:text-2xl font-bold py-8">
              Your Resume created succesfully
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCreated;
