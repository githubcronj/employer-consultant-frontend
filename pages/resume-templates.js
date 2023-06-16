import withConsultantAuth from "Components/ProtectedRoute/withConsultantAuth";
import Link from "next/link";
import { useState } from "react";

const TemplateOne = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div>
        <div className="m-[20px] p-[20px] border border-[#ccc] rounded-[5px] ">
          <div className="flex items-center">
            <div className="w-[80px] h-[80px] mr-[20px] ">
              <img
                src="/Assets/appleIcon.png"
                alt="Profile"
                className="w-full h-full rounded-[50%] "
              />
            </div>
            <div className="text-[20px] font-bold ">John Doe</div>
            <div className="text-[24px] text-[#888] ">Web Developer</div>
          </div>
          <div className="content">
            <div className="mb-[20px] ">
              <h2>Education</h2>
              <div className="item">
                <div className="text-[18px] font-bold ">
                  Bachelor of Science in Computer Science
                </div>
                <div className="text-[14px] text-[#888] mb-[10px] ">
                  University of XYZ, 2015-2019
                </div>
              </div>
            </div>
            <div className="mb-[20px]">
              <h2>Experience</h2>
              <div className="item">
                <div className="text-[18px] font-bold ">Frontend Developer</div>
                <div className="text-[14px] text-[#888] mb-[10px] ">
                  ABC Company, 2019-Present
                </div>
                <ul className="pl-[20px] m-0 ">
                  <li className="mb-[5px] ">
                    Developed and maintained responsive web applications using
                    React.js
                  </li>
                  <li className="mb-[5px] ">
                    Collaborated with designers to implement user interface
                    components
                  </li>
                  <li className="mb-[5px] ">
                    Worked with backend developers to integrate APIs
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-[20px] ">
              <h2>Skills</h2>
              <div className="item">
                <ul className="pl-[20px] m-0 ">
                  <li className="mb-[5px] ">React.js</li>
                  <li className="mb-[5px] ">HTML</li>
                  <li className="mb-[5px] ">CSS</li>
                  <li className="mb-[5px] ">JavaScript</li>
                  <li className="mb-[5px] ">Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TemplateTwo = () => {
  return (
    <div className="m-[20px] p-[20px] border border-[#ccc] rounded-[5px] ">
      <div className="flex justify-center mb-[30px]">
        <div className="flex items-center">
          <img
            src="/Assets/appleIcon.png"
            alt="Profile"
            className="profile-image"
          />
          <div className="flex flex-col">
            <div className="text-[24px] font-bold mb-[10px] ">John Doe</div>
            <div className="text-[18px] text-[#888] mb-[10px] ">
              Web Developer
            </div>
            <div className="contact">
              <span className="block mb-[5px] ">
                Email: john.doe@example.com
              </span>
              <span className="block mb-[5px] ">Phone: (123) 456-7890</span>
              <span className="block mb-[5px] ">Website: johndoe.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="mb-[20px]">
          <h2>Education</h2>
          <div className="item">
            <div className="text-[18px] font-bold mb-[10px] ">
              Bachelor of Science in Computer Science
            </div>
            <div className="text-[14px] text-[#888] mb-[10px] ">
              University of XYZ, 2015-2019
            </div>
          </div>
        </div>
        <div className="mb-[20px]">
          <h2>Experience</h2>
          <div className="item">
            <div className="text-[18px] font-bold mb-[10px] ">
              Frontend Developer
            </div>
            <div className="text-[14px] text-[#888] mb-[10px] ">
              ABC Company, 2019-Present
            </div>
            <ul className="pl-[20px] m-0 ">
              <li className="mb-[5px]">
                Developed and maintained responsive web applications using
                React.js
              </li>
              <li className="mb-[5px]">
                Collaborated with designers to implement user interface
                components
              </li>
              <li>Worked with backend developers to integrate APIs</li>
            </ul>
          </div>
        </div>
        <div className="mb-[20px]">
          <h2>Skills</h2>
          <div className="item">
            <ul className="pl-[20px] m-0 ">
              <li className="mb-[5px]">React.js</li>
              <li className="mb-[5px]">HTML</li>
              <li className="mb-[5px]">CSS</li>
              <li className="mb-[5px]">JavaScript</li>
              <li className="mb-[5px]">Git</li>
            </ul>
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
    <div className="bg-[#EEEFEF] px-14 py-4 pb-8 flex flex-col ">
      <div className="flex flex-row justify-between">
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
      <div className="flex flex-row justify-between ">
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
