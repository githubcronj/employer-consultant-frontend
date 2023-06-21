import withConsultantAuth from "Components/ProtectedRoute/withConsultantAuth";
import Link from "next/link";
import { useState } from "react";

const TemplateOne = () => {
  return (
    <div className="mx-auto mt-8 lg:mx-0 max-h-[800px] lg:mt-0 overflow-y-scroll max-w-[800px] ">
      {/* resume */}
      {/* <div className='grid sm:grid-cols-5 bg-black lg:px-4'> */}
      <div className="sm:flex items-center bg-black lg:px-4">
        {/* <div className='sm:col-span-2 flex items-center my-10'> */}
        <div className="w-[32%] flex items-center my-4 bg-[#FAD02C] rounded-full">
          <img
            src="/Assets/image.svg"
            alt="profile"
            className="h-[93%] w-[100%]"
          ></img>
        </div>

        {/* <div className='sm:col-span-3 mx-3 my-10'> */}
        <div className="w-[68%] px-3 py-4 bg-black">
          <div className="text-[24px] font-bold mb-[10px] text-white">
            David Anderson
          </div>
          <div className="text-[16px] w-[fit-content] font-medium text-white bg-gray-800 p-1">
            UX Designer - job role
          </div>
          <div className="grid grid-cols-2 gap-2 my-10">
            {/* 1 */}
            <div>
              <div className="text-[14px] text-white font-bold">Phone:</div>
              <div className="text-[16px] text-white">+1290 7878 890</div>
            </div>
            {/* 2 */}
            <div>
              <div className="text-[14px] text-white font-bold">Email</div>
              <div className="text-[16px] text-white">test@gmail.com</div>
            </div>

            {/* 3 */}
            <div>
              <div className="text-[14px] text-white font-bold">Gender:</div>
              <div className="text-[16px] text-white">Male</div>
            </div>

            {/* new */}

            {/* 1 */}
            <div>
              <div className="text-[14px] text-white font-bold">Loaction:</div>
              <div className="text-[16px] text-white">Banglore</div>
            </div>
            {/* 2 */}
            <div>
              <div className="text-[14px] text-white font-bold">
                Year of Experience
              </div>
              <div className="text-[16px] text-white">5 years</div>
            </div>

            {/* 3 */}
          </div>
        </div>
      </div>

      <div className="flex items-start lg:mx-4 bg-[#EEEFEF]">
        {/* education and skills */}

        <div className="flex items-center py-10 pl-4 sm:w-[32%]">
          <div>
            <div className="text-[20px] font-bold mb-[10px]">Education</div>
            <div className="my-3">
              <div className="text-[15px]">2020</div>
              <div className="text-[15px] font-bold">
                BCA in Bachelor Degree
              </div>
              <div className="text-[15px]">Mumbai University</div>
            </div>
            <div className="my-3">
              <div className="text-[15px]">2020</div>
              <div className="text-[15px] font-bold">
                BCA in Bachelor Degree
              </div>
              <div className="text-[15px]">Mumbai University</div>
            </div>
            <div className="my-3">
              <div className="text-[15px]">2020</div>
              <div className="text-[15px] font-bold">
                BCA in Bachelor Degree
              </div>
              <div className="text-[15px]">Mumbai University</div>
            </div>

            {/* skills */}

            <div className="text-[20px] font-bold mt-8">Skills</div>
            <div className="my-3 flex items-center gap-2">
              <div>
                <img src="/Assets/pointer.svg" alt="points" className=""></img>
              </div>
              <div className="text-[15px] font-bold">Javascript</div>
            </div>
            <div className="my-3 flex items-center gap-2">
              <div>
                <img src="/Assets/pointer.svg" alt="points" className=""></img>
              </div>
              <div className="text-[15px] font-bold">Javascript</div>
            </div>
            <div className="my-3 flex items-center gap-2">
              <div>
                <img src="/Assets/pointer.svg" alt="points" className=""></img>
              </div>
              <div className="text-[15px] font-bold">Javascript</div>
            </div>
          </div>

          {/* skills */}
        </div>
        {/* expe and projects */}

        <div className="px-3 py-10 sm:w-[68%] bg-white">
          <div>
            <div className="text-[20px] font-bold mb-[10px]">Experience</div>

            <div className="grid sm:grid-cols-5 gap-2 my-2">
              {/* 1 */}
              <div className="sm:col-span-2">
                <div className="text-[15px]">2020 to 2021</div>
                <div className="text-[15px] font-bold">Company Name</div>
              </div>
              {/* 2 */}
              <div className="sm:col-span-3">
                <div className="text-[15px] font-bold">Senior Developer</div>
                <div className="text-[15px]">
                  Description - In publishing and graphic design, Lorem ipsum is
                  a placeholder text commonly used to demonstrate the visual
                  form of a document or a typeface without relying on meaningful
                  content.
                </div>
              </div>
            </div>
            {/* 2 exp */}
            <div className="grid sm:grid-cols-5 gap-2 my-2">
              {/* 1 */}
              <div className="sm:col-span-2">
                <div className="text-[15px]">2020 to 2021</div>
                <div className="text-[15px] font-bold">Company Name</div>
              </div>
              {/* 2 */}
              <div className="sm:col-span-3">
                <div className="text-[15px] font-bold">Senior Developer</div>
                <div className="text-[15px]">
                  Description - In publishing and graphic design, Lorem ipsum is
                  a placeholder text commonly used to demonstrate the visual
                  form of a document or a typeface without relying on meaningful
                  content.
                </div>
              </div>
            </div>

            {/* end exp */}

            {/* skills */}
            <div>
              <div className="text-[20px] font-bold mt-8">Certfication</div>

              {/* 1 */}
              <div>
                <div className="text-[15px] font-bold">
                  Data Science Certification Course by Caltech
                </div>

                <div>issued On: 20-02-2020</div>
                <div>expiration Date: 20-02-2020</div>

                <div>
                  <a
                    href="http://localhost:3000/resume"
                    className="text-blue-400 underline italic "
                  >
                    view certificate
                  </a>
                </div>
              </div>
              {/* 2 */}
              <div>
                <div className="text-[15px] font-bold">
                  Big Data Certification Course by Caltech
                </div>

                <div>issued On: 20-02-2020</div>
                <div>expiration Date: 20-02-2020</div>

                <div>
                  <a
                    href="http://localhost:3000/resume"
                    className="text-blue-400 underline italic "
                  >
                    view certificate
                  </a>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TemplateTwo = () => {
  return (
    <div className="lg:col-span-2 mx-auto mt-8 lg:mx-0 lg:mt-0  max-w-[800px] max-h-[800px] overflow-y-scroll ">
      {/* resume */}
      {/* <div className='grid sm:grid-cols-5 bg-black lg:px-4'> */}
      <div className="sm:flex items-center bg-[#ebcbbb] sm:bg-[#6c999a]">
        {/* <div className='sm:col-span-2 flex items-center my-10'> */}
        <div className="w-[32%] flex items-center my-4 bg-[#FAD02C] rounded-full">
          <img
            src="/Assets/image.svg"
            alt="profile"
            className="h-[93%] w-[100%]"
          ></img>
        </div>

        {/* <div className='sm:col-span-3 mx-3 my-10'> */}
        <div className="w-[68%] px-3 py-4 bg-[#ebcbbb]">
          <div className="text-[24px] font-bold mb-[10px]">David Anderson</div>
          <div className="text-[16px] w-[fit-content] font-medium">
            UX Designer - job role
          </div>
          <div className="grid grid-cols-2 gap-2 my-10">
            {/* 1 */}
            <div>
              <div className="text-[14px] font-bold">Phone:</div>
              <div className="text-[16px]">+1290 7878 890</div>
            </div>
            {/* 2 */}
            <div>
              <div className="text-[14px] font-bold">Email</div>
              <div className="text-[16px]">test@gmail.com</div>
            </div>

            {/* 3 */}
            <div>
              <div className="text-[14px] font-bold">Gender:</div>
              <div className="text-[16px]">Male</div>
            </div>

            {/* new */}

            {/* 1 */}
            <div>
              <div className="text-[14px] font-bold">Loaction:</div>
              <div className="text-[16px]">Banglore</div>
            </div>
            {/* 2 */}
            <div>
              <div className="text-[14px] font-bold">Year of Experience</div>
              <div className="text-[16px]">5 years</div>
            </div>

            {/* 3 */}
          </div>
        </div>
      </div>

      <div className="flex items-start bg-[#6c999a]">
        {/* education and skills */}

        <div className="flex items-center py-10 px-4 sm:w-[32%]">
          <div>
            <div className="text-[20px] font-bold mb-[10px] text-white">
              Education
            </div>
            <div className="my-3">
              <div className="text-[15px] text-white">2020</div>
              <div className="text-[15px] font-bold text-white">
                BCA in Bachelor Degree
              </div>
              <div className="text-[15px] text-white">Mumbai University</div>
            </div>
            <div className="my-3">
              <div className="text-[15px] text-white">2020</div>
              <div className="text-[15px] text-white font-bold">
                BCA in Bachelor Degree
              </div>
              <div className="text-[15px] text-white">Mumbai University</div>
            </div>
            <div className="my-3">
              <div className="text-[15px] text-white">2020</div>
              <div className="text-[15px] font-bold text-white">
                BCA in Bachelor Degree
              </div>
              <div className="text-[15px] text-white">Mumbai University</div>
            </div>

            {/* skills */}

            <div className="text-[20px] font-bold mt-8 text-white">Skills</div>
            <div className="my-3 flex items-center gap-2">
              <div>
                <img
                  src="/Assets/pointer-white.svg"
                  alt="points"
                  className=""
                ></img>
              </div>
              <div className="text-[15px] font-bold text-white">Javascript</div>
            </div>
            <div className="my-3 flex items-center gap-2">
              <div>
                <img
                  src="/Assets/pointer-white.svg"
                  alt="points"
                  className=""
                ></img>
              </div>
              <div className="text-[15px] font-bold text-white">Javascript</div>
            </div>
            <div className="my-3 flex items-center gap-2">
              <div>
                <img
                  src="/Assets/pointer-white.svg"
                  alt="points"
                  className=""
                ></img>
              </div>
              <div className="text-[15px] font-bold text-white">Javascript</div>
            </div>
          </div>

          {/* skills */}
        </div>
        {/* expe and projects */}

        <div className="px-3 py-10 sm:w-[68%] bg-white">
          <div>
            <div className="text-[20px] font-bold mb-[10px]">Experience</div>

            <div className="grid sm:grid-cols-5 gap-2 my-2">
              {/* 1 */}
              <div className="sm:col-span-2">
                <div className="text-[15px]">2020 to 2021</div>
                <div className="text-[15px] font-bold">Company Name</div>
              </div>
              {/* 2 */}
              <div className="sm:col-span-3">
                <div className="text-[15px] font-bold">Senior Developer</div>
                <div className="text-[15px]">
                  Description - In publishing and graphic design, Lorem ipsum is
                  a placeholder text commonly used to demonstrate the visual
                  form of a document or a typeface without relying on meaningful
                  content.
                </div>
              </div>
            </div>
            {/* 2 exp */}
            <div className="grid sm:grid-cols-5 gap-2 my-2">
              {/* 1 */}
              <div className="sm:col-span-2">
                <div className="text-[15px]">2020 to 2021</div>
                <div className="text-[15px] font-bold">Company Name</div>
              </div>
              {/* 2 */}
              <div className="sm:col-span-3">
                <div className="text-[15px] font-bold">Senior Developer</div>
                <div className="text-[15px]">
                  Description - In publishing and graphic design, Lorem ipsum is
                  a placeholder text commonly used to demonstrate the visual
                  form of a document or a typeface without relying on meaningful
                  content.
                </div>
              </div>
            </div>

            {/* end exp */}

            {/* skills */}
            <div>
              <div className="text-[20px] font-bold mt-8">Certfication</div>

              {/* 1 */}
              <div>
                <div className="text-[15px] font-bold">
                  Data Science Certification Course by Caltech
                </div>

                <div>issued On: 20-02-2020</div>
                <div>expiration Date: 20-02-2020</div>

                <div>
                  <a
                    href="http://localhost:3000/resume"
                    className="text-blue-400 underline italic "
                  >
                    view certificate
                  </a>
                </div>
              </div>
              {/* 2 */}
              <div>
                <div className="text-[15px] font-bold">
                  Big Data Certification Course by Caltech
                </div>

                <div>issued On: 20-02-2020</div>
                <div>expiration Date: 20-02-2020</div>

                <div>
                  <a
                    href="http://localhost:3000/resume"
                    className="text-blue-400 underline italic "
                  >
                    view certificate
                  </a>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Preview = ({ selectedTemplate }) => {
  if (!selectedTemplate) {
    return null;
  }

  const TemplateComponent = selectedTemplate.component;
  return <TemplateComponent />;
};

const TemplateList = () => {
  const templates = [
    {
      id: "templateOne",
      component: TemplateOne,
      src: "/Assets/resume_1.png",
    },
    {
      id: "templateTwo",
      component: TemplateTwo,
      src: "/Assets/resume_2.png",
    },
  ];
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  const handleTemplateSelection = (templateId) => {
    const selectedTemplate = templates.find(
      (template) => template.id === templateId
    );
    setSelectedTemplate(selectedTemplate);
  };

  return (
    <div className="bg-[] px-14 py-4 pb-8 flex flex-col ">
      <div className="flex flex-row justify-between mb-8 mt-4">
        <h1 className="text-left font-sans font-bold tracking-[0.52px] text-[22px] xl:text-[26px] ">
          Resume
        </h1>
        <Link
          href={{
            pathname: "/setup-details",
            query: { templateId: selectedTemplate.id },
          }}
        >
          <button className="uppercase px-9 py-3 bg-[#F9342E] text-[#FFFFFF] tracking-[1.6px] rounded-[15px] ">
            Next
          </button>
        </Link>
      </div>
      <div className="flex flex-row justify-between gap-8 ">
        <div className="flex flex-col bg-[#F9F6EE] px-4 ">
          <h3 className="text-[#2B373C] text-[20px] font-bold my-4 ">
            Select Resume Template
          </h3>
          <div className="flex flex-row gap-6 ">
            {templates.map((template) => (
              <img
                src={template.src}
                key={template.id}
                onClick={() => handleTemplateSelection(template.id)}
                className="w-[182px] h-[200px] cursor-pointer "
              />
            ))}
          </div>
        </div>
        <div>
          <Preview selectedTemplate={selectedTemplate} />
        </div>
      </div>
    </div>
  );
};

const SelectResumeTemplatePage = () => {
  return (
    <div>
      <TemplateList />
    </div>
  );
};

export default withConsultantAuth(SelectResumeTemplatePage);
