import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const ResumeUpload = () => {
  const router = useRouter();
  const [uploadedFile, setUploadedFile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const navigateToNext = () => {
    // router.push('/setup-details');
    router.push('/resume-templates');
  };
  const navigateToJsonPage = () => {
    router.push('/resume-json');
  };

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage(
          'Invalid file type. Only PDF, DOCX, and DOC files are allowed.'
        );
        return;
      }

      // Validate file size
      const maxSize = 10 * 1024 * 1024; // 10 MB
      if (file.size > maxSize) {
        setErrorMessage('File size exceeds the limit of 10 MB.');
        return;
      }

      setUploadedFile(file);
      setErrorMessage(''); // Reset the error message
    }
  };
  const handleRemoveFile = (event) => {
    setUploadedFile(null);
    setErrorMessage('');

    // Clear the file input value
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevents browser from opening the file
    event.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevents browser from opening the file
    const file = event.dataTransfer.files[0];
    setUploadedFile(file);
    setErrorMessage('');
  };

  return (
    <div className='bg-[#2B373C1C] py-4 px-2 sm:px-10'>
      <div className='flex justify-between items-center mx-5 sm:mx-9'>
        <div className='my-3 m'>
          <p className='text-[26px] text-[#2B373C] sm:text-2xl font-bold'>
            Resume
          </p>
        </div>
        <button
          className='px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3 font-medium cursor-pointer'
          onClick={navigateToNext}
        >
          NEXT
        </button>
      </div>
      <div className=' bg-white px-4 pt-14 pb-14 mx-2 sm:mx-6 lg-mx-8 border rounded-xl sm:pt-36 sm:pb-52'>
        <p className='text-[#1E0F3B] text-[26px] font-bold text-center'>
          Create or Upload Resume
        </p>
        <div className='flex justify-center gap-x-10  flex-col md:flex-row'>
          <div className='mt-8 md:mt-12  w-auto bg-[#F9F6EE] py-6 flex flex-col items-center justify-center rounded-[15px] md:w-[281px] lg:w-[399px] text-center'>
            <Image
              src='/Assets/surface1.svg'
              alt='upload resume'
              width={62}
              height={80}
            />
            <p className='pt-3 text-lg font-bold'>Create new resume</p>
            <p className='text-sm text-[#6C627F] px-2'>
              Explore resume templates and set data
            </p>
            <Image
              src='/Assets/arrow-left.svg'
              alt='Picture of the author'
              width={48}
              height={48}
              className='mt-6 cursor-pointer'
              onClick={navigateToNext}
            />
          </div>
          {/* <label
            htmlFor='fileInput'
            className='cursor-pointer'
            // onDragOver={handleDragOver}
            // onDrop={handleDrop}
          > */}
          <div
            className=' mt-8 md:mt-12  w-auto bg-[#F9F6EE] py-6 flex flex-col items-center justify-center rounded-[15px] md:w-[281px] lg:w-[399px] text-center cursor-pointer '
            onClick={navigateToJsonPage}
          >
            <Image
              src='/Assets/surface2.svg'
              alt='upload resume'
              width={62}
              height={80}
            />
            <p className='pt-3 text-lg font-bold'>Export Link</p>
            {/* <p className='text-sm text-[#6C627F] px-2'>
                or drag and drop it here
              </p> */}
            {/* {errorMessage && (
              <p className='text-red-500 font-semibold mt-2 px-4'>
                {errorMessage}
              </p>
            )} */}
            <Image
              src='/Assets/arrow-left.svg'
              alt='Picture of the author'
              width={48}
              height={48}
              className='mt-6 cursor-pointer'
              // onClick={(event) => {
              //   event.preventDefault();
              //   navigateToJsonPage();
              // }}
            />
            {/* <input
                type='file'
                id='fileInput'
                ref={fileInputRef}
                className='hidden'
                onChange={handleFileUpload}
                accept='.pdf, .docx, .doc'
              /> */}
            {/* {uploadedFile && (
                <div className='mt-2'>
                  <p>Uploaded file: {uploadedFile.name}</p>
                  <button
                    className='text-red-500 font-semibold'
                    onClick={(event) => {
                      event.preventDefault();
                      handleRemoveFile();
                    }}
                  >
                    Remove
                  </button>
                </div>
              )} */}
          </div>
          {/* </label> */}
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
