import React from "react";

const Resume = () => {
  return (
    <div>
      <div className=' bg-white mx-2 sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-5'>
        {/* sec 1 */}
        <div
          className='flex flex-col lg:col-span-3 lg:max-h-[719px] lg:overflow-y-scroll'
          style={{
            borderRight: "2px solid #D8D8DD",
            marginTop: "1.5rem",
          }}
        >
          det
        </div>
        {/* sec 2 */}
        <div className='lg:col-span-2 mx-auto mt-8 lg:mx-0 lg:mt-0 max-h-[719px] overflow-y-scroll '>
          {/* resume */}
          {/* <div className='grid sm:grid-cols-5 bg-black lg:px-4'> */}
          <div className='sm:flex items-center bg-black lg:px-4'>
            {/* <div className='sm:col-span-2 flex items-center my-10'> */}
            <div className='w-[32%] flex items-center my-4 bg-[#FAD02C] rounded-full'>
              <img
                src='/Assets/image.svg'
                alt='profile'
                className='h-[93%] w-[100%]'
              ></img>
            </div>
           

            {/* <div className='sm:col-span-3 mx-3 my-10'> */}
            <div className='w-[68%] px-3 py-4 bg-black'>
              <div className='text-[24px] font-bold mb-[10px] text-white'>
                David Anderson
              </div>
              <div className='text-[16px] w-[fit-content] font-medium text-white bg-gray-800 p-1'>
                UX Designer - job role
              </div>
              <div className='grid grid-cols-2 gap-2 my-10'>
                {/* 1 */}
                <div>
                  <div className='text-[14px] text-white font-bold'>Phone:</div>
                  <div className='text-[16px] text-white'>+1290 7878 890</div>
                </div>
                {/* 2 */}
                <div>
                  <div className='text-[14px] text-white font-bold'>Email</div>
                  <div className='text-[16px] text-white'>test@gmail.com</div>
                </div>

                {/* 3 */}
                <div>
                  <div className='text-[14px] text-white font-bold'>
                    Gender:
                  </div>
                  <div className='text-[16px] text-white'>Male</div>
                </div>

                {/* new */}

                {/* 1 */}
                <div>
                  <div className='text-[14px] text-white font-bold'>
                    Loaction:
                  </div>
                  <div className='text-[16px] text-white'>Banglore</div>
                </div>
                {/* 2 */}
                <div>
                  <div className='text-[14px] text-white font-bold'>
                    Year of Experience
                  </div>
                  <div className='text-[16px] text-white'>5 years</div>
                </div>

                {/* 3 */}
              </div>
            </div>
          </div>

          <div className='flex items-start lg:mx-4 bg-[#EEEFEF]'>
            {/* education and skills */}

            <div className='flex items-center py-10 pl-4 sm:w-[32%]'>
              <div>
                <div className='text-[20px] font-bold mb-[10px]'>Education</div>
                <div className='my-3'>
                  <div className='text-[15px]'>2020</div>
                  <div className='text-[15px] font-bold'>
                    BCA in Bachelor Degree
                  </div>
                  <div className='text-[15px]'>Mumbai University</div>
                </div>
                <div className='my-3'>
                  <div className='text-[15px]'>2020</div>
                  <div className='text-[15px] font-bold'>
                    BCA in Bachelor Degree
                  </div>
                  <div className='text-[15px]'>Mumbai University</div>
                </div>
                <div className='my-3'>
                  <div className='text-[15px]'>2020</div>
                  <div className='text-[15px] font-bold'>
                    BCA in Bachelor Degree
                  </div>
                  <div className='text-[15px]'>Mumbai University</div>
                </div>

                {/* skills */}

                <div className='text-[20px] font-bold mt-8'>Skills</div>
                <div className='my-3 flex items-center gap-2'>
                  <div>
                    <img
                      src='/Assets/pointer.svg'
                      alt='points'
                      className=''
                    ></img>
                  </div>
                  <div className='text-[15px] font-bold'>Javascript</div>
                </div>
                <div className='my-3 flex items-center gap-2'>
                  <div>
                    <img
                      src='/Assets/pointer.svg'
                      alt='points'
                      className=''
                    ></img>
                  </div>
                  <div className='text-[15px] font-bold'>Javascript</div>
                </div>
                <div className='my-3 flex items-center gap-2'>
                  <div>
                    <img
                      src='/Assets/pointer.svg'
                      alt='points'
                      className=''
                    ></img>
                  </div>
                  <div className='text-[15px] font-bold'>Javascript</div>
                </div>
              </div>

              {/* skills */}
            </div>
            {/* expe and projects */}

            <div className='px-3 py-10 sm:w-[68%] bg-white'>
              <div>
                <div className='text-[20px] font-bold mb-[10px]'>
                  Experience
                </div>

                <div className='grid sm:grid-cols-5 gap-2 my-2'>
                  {/* 1 */}
                  <div className='sm:col-span-2'>
                    <div className='text-[15px]'>2020 to 2021</div>
                    <div className='text-[15px] font-bold'>Company Name</div>
                  </div>
                  {/* 2 */}
                  <div className='sm:col-span-3'>
                    <div className='text-[15px] font-bold'>
                      Senior Developer
                    </div>
                    <div className='text-[15px]'>
                      Description - In publishing and graphic design, Lorem
                      ipsum is a placeholder text commonly used to demonstrate
                      the visual form of a document or a typeface without
                      relying on meaningful content.
                    </div>
                  </div>
                </div>
                {/* 2 exp */}
                <div className='grid sm:grid-cols-5 gap-2 my-2'>
                  {/* 1 */}
                  <div className='sm:col-span-2'>
                    <div className='text-[15px]'>2020 to 2021</div>
                    <div className='text-[15px] font-bold'>Company Name</div>
                  </div>
                  {/* 2 */}
                  <div className='sm:col-span-3'>
                    <div className='text-[15px] font-bold'>
                      Senior Developer
                    </div>
                    <div className='text-[15px]'>
                      Description - In publishing and graphic design, Lorem
                      ipsum is a placeholder text commonly used to demonstrate
                      the visual form of a document or a typeface without
                      relying on meaningful content.
                    </div>
                  </div>
                </div>

                {/* end exp */}

                {/* skills */}
                <div>
                  <div className='text-[20px] font-bold mt-8'>Certfication</div>

                  {/* 1 */}
                  <div>
                    <div className='text-[15px] font-bold'>
                      Data Science Certification Course by Caltech
                    </div>

                    <div>issued On: 20-02-2020</div>
                    <div>expiration Date: 20-02-2020</div>

                    <div>
                      <a
                        href='http://localhost:3000/resume'
                        className='text-blue-400 underline italic '
                      >
                        view certificate
                      </a>
                    </div>
                  </div>
                  {/* 2 */}
                  <div>
                    <div className='text-[15px] font-bold'>
                      Big Data Certification Course by Caltech
                    </div>

                    <div>issued On: 20-02-2020</div>
                    <div>expiration Date: 20-02-2020</div>

                    <div>
                      <a
                        href='http://localhost:3000/resume'
                        className='text-blue-400 underline italic '
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
      </div>
    </div>
  );
};

export default Resume;
