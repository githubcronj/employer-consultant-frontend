import { useDispatch, useSelector } from 'react-redux';
import { updateField, clearFields } from 'store/slices/formSlice';

const FormTable = () => {
  const dispatch = useDispatch();
  const formFields = useSelector((state) => state.form);

  const handleInputChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleSave = () => {
    // Perform save action here or dispatch another action to handle saving to the backend
    // For this example, we'll just clear the fields
    dispatch(clearFields());
  };

  return (
    <div className='flex flex-col justify-center items-center '>
      <table className='w-full'>
        <tbody className='gap-2 my-4'>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>Name</td>
            <td className='w-full'>
              <input
                type='text'
                value={formFields.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>email</td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>Phone No</td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.phoneNo}
                onChange={(e) => handleInputChange('phoneNo', e.target.value)}
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>Gender</td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Date Of Birth
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.dateOfBirth}
                onChange={(e) =>
                  handleInputChange('dateOfBirth', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>Location</td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Highest Education Level
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.highestEducationLevel}
                onChange={(e) =>
                  handleInputChange('highestEducationLevel', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Institution Name
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.institutionName}
                onChange={(e) =>
                  handleInputChange('institutionName', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>Degree</td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.degree}
                onChange={(e) => handleInputChange('degree', e.target.value)}
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Year Of Passing
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.yearOfPassing}
                onChange={(e) =>
                  handleInputChange('yearOfPassing', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Company Name
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.companyName}
                onChange={(e) =>
                  handleInputChange('companyName', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Job Position
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.jobPosition}
                onChange={(e) =>
                  handleInputChange('jobPosition', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Technological Environment
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.technologyEnvironment}
                onChange={(e) =>
                  handleInputChange('technologyEnvironment', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Employement Type
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.employementType}
                onChange={(e) =>
                  handleInputChange('employementType', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Date of Joined
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.dateofJoined}
                onChange={(e) =>
                  handleInputChange('dateofJoined', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>Skills</td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Project Name
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.projectName}
                onChange={(e) =>
                  handleInputChange('projectName', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>Project Url</td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.projectUrl}
                onChange={(e) =>
                  handleInputChange('projectUrl', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Start And EndDate
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.startAndEndDate}
                onChange={(e) =>
                  handleInputChange('startAndEndDate', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
          <tr className='border-2 border-green-950'>
            <td className='inline-block whitespace-nowrap ml-4'>
              Project Description
            </td>

            <td className='w-full'>
              <input
                type='text'
                value={formFields.projectDescription}
                onChange={(e) =>
                  handleInputChange('projectDescription', e.target.value)
                }
                className='focus:outline-none focus:border-teal-500 w-full '
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={handleSave}
        className='w-[180px] bg-red-950 text-white py-4 mt-5 rounded-lg '
      >
        Save
      </button>
    </div>
  );
};

export default FormTable;
