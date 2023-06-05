import Link from 'next/link';
import React, { use, useEffect } from 'react';
import UploadCSVModal from './uploadCSVModal';
import FilterModal from './filterModal';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { GET_JOB_REQUEST } from 'store/type/getjobType';
import { useSelector } from 'react-redux';

const tableHeading = [
  'Applied Consultant',
  'Job Title',
  'Experience',
  'Job Type',
  'Salary',
  'Created date',
  'Deadline date',
];

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let payload;
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('CurrentUser')) {
      const storedData = localStorage.getItem('CurrentUser');

      const tokenset = JSON.parse(storedData);
      payload = tokenset.token.accessToken;
    }
  });

  useEffect(() => {
    dispatch({ type: GET_JOB_REQUEST, payload });
  }, []);
  const response = useSelector(
    (state) => state?.getjobReducer?.CurrentUser?.data
  );

  // console.log(response);

  const nextclick = (id) => {
    console.log(id);
    router.push(`/viewjobpost/${id}`);
  };
  

  return (
    <div>
      <div className='bg-[#2B373C1C] py-4 px-2 sm:px-4'>
        <div className='bg-white pt-3'>
          <div className='flex justify-between items-center mx-5 sm:mx-9 '>
            <div className='my-3 flex gap-4'>
              <p className='text-lg sm:text-2xl font-bold mr-4'>Home</p>
              <div className='relative w-full'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </div>
                <input
                  type='text'
                  id='simple-search'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                  placeholder='Search'
                  required
                />
              </div>
            </div>
            <div className='flex'>
              <div>
                <FilterModal />
              </div>
              <div>
                <UploadCSVModal />
              </div>
              <div>
                <Link href='/newJobPost'>
                  <button className='m-3'>
                    <img src='/Assets/add.svg' alt='save' />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='my-3 relative overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white'>
              <thead className='text-sm text-white  bg-[#1E0F3B] dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  {tableHeading.map((heading, index) => (
                    <th key={index} scope='col' className='px-6 py-5'>
                      {heading}
                    </th>
                  ))}
                  <th className='text-transparent'>icon</th>
                </tr>
              </thead>
              <tbody className=' text-black text-md'>
                {response?.map((row, index) => (
                  <tr onClick={() => nextclick(row?._id)}
                    key={index}
                    className={
                      index % 2 === 0
                        ? 'border-slate-200 border rounded-lg'
                        : 'border-slate-200 border rounded-lg bg-[#EEEFEF]'
                    }
                  >
                    <td className='px-6 py-7'>{row?.appliedConsultant}</td>
                    <td className='px-6 py-7'>{row?.jobTitle}</td>
                    <td className='px-6 py-7'>{row?.experience}</td>
                    <td className='px-6 py-7'>{row?.jobType}</td>
                    <td className='px-6 py-7'>{row?.salary}</td>
                    <td className='px-6 py-7'>{row?.createdAt}</td>
                    <td className='px-6 py-7'>{row?.deadline}</td>

                    <td onClick={() => nextclick(row?._id)}>
                      <img src='/Assets/arrow-blue.svg' alt='save' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
