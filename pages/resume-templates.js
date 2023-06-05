import Link from 'next/link';
import { useState } from 'react';

const TemplatePreview = ({ template }) => {
  return (
    <div className='flex flex-col justify-center '>
      {/* Resume */}
      <div>
        <div className='m-[20px] p-[20px] border border-[#ccc] rounded-[5px] '>
          <div className='flex items-center'>
            <div className='w-[80px] h-[80px] mr-[20px] '>
              <img
                src='/Assets/appleIcon.png'
                alt='Profile'
                className='w-full h-full rounded-[50%] '
              />
            </div>
            <div className='text-[20px] font-bold '>John Doe</div>
            <div className='text-[24px] text-[#888] '>Web Developer</div>
          </div>
          <div className='content'>
            <div className='mb-[20px] '>
              <h2>Education</h2>
              <div className='item'>
                <div className='text-[18px] font-bold '>
                  Bachelor of Science in Computer Science
                </div>
                <div className='text-[14px] text-[#888] mb-[10px] '>
                  University of XYZ, 2015-2019
                </div>
              </div>
            </div>
            <div className='mb-[20px]'>
              <h2>Experience</h2>
              <div className='item'>
                <div className='text-[18px] font-bold '>Frontend Developer</div>
                <div className='text-[14px] text-[#888] mb-[10px] '>
                  ABC Company, 2019-Present
                </div>
                <ul className='pl-[20px] m-0 '>
                  <li className='mb-[5px] '>
                    Developed and maintained responsive web applications using
                    React.js
                  </li>
                  <li className='mb-[5px] '>
                    Collaborated with designers to implement user interface
                    components
                  </li>
                  <li className='mb-[5px] '>
                    Worked with backend developers to integrate APIs
                  </li>
                </ul>
              </div>
            </div>
            <div className='mb-[20px] '>
              <h2>Skills</h2>
              <div className='item'>
                <ul className='pl-[20px] m-0 '>
                  <li className='mb-[5px] '>React.js</li>
                  <li className='mb-[5px] '>HTML</li>
                  <li className='mb-[5px] '>CSS</li>
                  <li className='mb-[5px] '>JavaScript</li>
                  <li className='mb-[5px] '>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TemplateList = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    { id: 1, name: 'Template 1', description: 'Template 1 description' },
    { id: 2, name: 'Template 2', description: 'Template 2 description' },
    { id: 3, name: 'Template 3', description: 'Template 3 description' },
    { id: 4, name: 'Template 4', description: 'Template 4 description' },
    { id: 5, name: 'Template 5', description: 'Template 5 description' },
  ];

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className='bg-[#EEEFEF] px-14 py-4 pb-8 flex flex-col '>
      <div className='flex flex-row justify-between'>
        <h1 className='text-left font-sans font-bold tracking-[0.52px] text-[22px] xl:text-[26px] '>
          Resume
        </h1>
        <button className='uppercase px-9 py-3 bg-[#F9342E] text-[#FFFFFF] tracking-[1.6px] rounded-[15px] '>
          Next
        </button>
      </div>
      <div className='flex flex-row justify-between'>
        <div>
          {templates.map((template) => (
            <div key={template.id} className='template-item flex flex-col'>
              <button onClick={() => handleTemplateSelect(template)}>
                <div className='template-content'>
                  <h3>{template.name}</h3>
                  <p>{template.description}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
        {<TemplatePreview template={selectedTemplate} />}
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

export default SelectResumeTemplatePage;
