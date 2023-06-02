import React from 'react';

function createData(consultantName, experience, email, currentProjects) {
  return {
    consultantName,
    experience,
    email,
    currentProjects,
  };
}
const rows = [
  createData('Samuel Jack', '5 years', 'SamuelJack@gmail.com', 3),
  createData('Samuel Jack', '5 years', 'SamuelJack@gmail.com', 3),
  createData('Samuel Jack', '5 years', 'SamuelJack@gmail.com', 3),
  createData('Samuel Jack', '5 years', 'SamuelJack@gmail.com', 3),
  createData('Samuel Jack', '5 years', 'SamuelJack@gmail.com', 3),
  createData('Samuel Jack', '5 years', 'SamuelJack@gmail.com', 3),
  createData('Samuel Jack', '5 years', 'SamuelJack@gmail.com', 3),
  createData('Samuel Jack', '5 years', 'SamuelJack@gmail.com', 3),
];
const tableHeading = [
  'Consultant Name',
  'Experience',
  'Email',
  'Current projects',
];

const ConsultantTable = () => {
  return (
    <>
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
            {rows.map((row, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? 'border-slate-200 border rounded-lg'
                    : 'border-slate-200 border rounded-lg bg-[#EEEFEF]'
                }
              >
                {Object.values(row).map((value, index) => (
                  <td key={index} className='px-6 py-7'>
                    {value}
                  </td>
                ))}
                <td>
                  <img src='/Assets/arrow-blue.svg' alt='save' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ConsultantTable;
