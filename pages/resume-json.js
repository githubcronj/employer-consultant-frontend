import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField, clearFields } from "store/slices/formSlice";
import { resumeDataFillingAction } from "store/action/resumeDataFillingAction";
import Link from "next/link";

const FormTable = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const formFields = useSelector((state) => state.form);
  // console.log(formFields);

  // const handleInputChange = (field, value) => {
  //   dispatch(updateField({ field, value }));
  // };

  const handleSave = () => {
    // dispatch(clearFields());
    dispatch(resumeDataFillingAction(resumeForm));
    // router.push("/setup-details");
  };

  const [resumeForm, setResumeForm] = useState({
    personalDetails: {
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      birth: "",
      location: "",
      text: "",
      image: null,
    },
    education: [],
    experience: [],
    skill: [],
    project: [],
    certification: [],
    totalExperience: "",
  });

  console.log(resumeForm);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const [section, field] = name.split(".");
    let fieldValue = value;

    setResumeForm((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: fieldValue,
      },
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <table className="w-full">
        <tbody className="gap-2 my-4">
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">Name</td>
            <td className="w-full">
              <input
                type="text"
                id="fullName"
                placeholder="James Joy"
                required
                name="personalDetails.fullName"
                value={resumeForm.personalDetails?.fullName || ""}
                onChange={handleInputChange}
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">email</td>

            <td className="w-full">
              <input
                type="text"
                id="email"
                placeholder="Email"
                required
                name="personalDetails.email"
                value={resumeForm.personalDetails?.email || ""}
                onChange={handleInputChange}
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">Phone No</td>

            <td className="w-full">
              <input
                type="number"
                id="phoneNumber"
                placeholder="Phone Number"
                required
                name="personalDetails.phoneNumber"
                value={resumeForm.personalDetails?.phoneNumber || ""}
                onChange={handleInputChange}
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">Gender</td>

            <td className="w-full">
              <input
                id="gender"
                required
                placeholder="Type male or female or other"
                name="personalDetails.gender"
                value={resumeForm.personalDetails?.gender || ""}
                onChange={handleInputChange}
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">
              Date Of Birth
            </td>

            <td className="w-full">
              <input
                id="birth"
                placeholder="Date of Birth(YYYY-MM-DD)"
                required
                name="personalDetails.birth"
                value={resumeForm.personalDetails?.birth || ""}
                onChange={handleInputChange}
                className="focus:outline-none focus:border-teal-500 w-full ml-[5px] "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">Location</td>

            <td className="w-full">
              <input
                type="text"
                id="location"
                placeholder="Location"
                required
                name="personalDetails.location"
                value={resumeForm.personalDetails?.location || ""}
                onChange={handleInputChange}
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">Job role</td>

            <td className="w-full">
              <input
                type="text"
                id="role"
                placeholder="Job role"
                required
                name="personalDetails.text"
                value={resumeForm.personalDetails?.text || ""}
                onChange={handleInputChange}
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          {/* <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">
              Institution Name
            </td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.institutionName}
                onChange={(e) =>
                  handleInputChange("institutionName", e.target.value)
                }
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">Degree</td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.degree}
                onChange={(e) => handleInputChange("degree", e.target.value)}
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">
              Year Of Passing
            </td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.yearOfPassing}
                onChange={(e) =>
                  handleInputChange("yearOfPassing", e.target.value)
                }
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">
              Company Name
            </td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.companyName}
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">
              Job Position
            </td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.jobPosition}
                onChange={(e) =>
                  handleInputChange("jobPosition", e.target.value)
                }
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">
              Technological Environment
            </td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.technologyEnvironment}
                onChange={(e) =>
                  handleInputChange("technologyEnvironment", e.target.value)
                }
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">
              Employement Type
            </td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.employementType}
                onChange={(e) =>
                  handleInputChange("employementType", e.target.value)
                }
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">
              Date of Joined
            </td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.dateofJoined}
                onChange={(e) =>
                  handleInputChange("dateofJoined", e.target.value)
                }
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">Skills</td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">
              Project Name
            </td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.projectName}
                onChange={(e) =>
                  handleInputChange("projectName", e.target.value)
                }
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">Project Url</td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.projectUrl}
                onChange={(e) =>
                  handleInputChange("projectUrl", e.target.value)
                }
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">
              Start And EndDate
            </td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.startAndEndDate}
                onChange={(e) =>
                  handleInputChange("startAndEndDate", e.target.value)
                }
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr>
          <tr className="border-2 border-green-950">
            <td className="inline-block whitespace-nowrap ml-4">
              Project Description
            </td>

            <td className="w-full">
              <input
                type="text"
                value={formFields.projectDescription}
                onChange={(e) =>
                  handleInputChange("projectDescription", e.target.value)
                }
                className="focus:outline-none focus:border-teal-500 w-full "
              />
            </td>
          </tr> */}
        </tbody>
      </table>
      <Link
        href={{
          pathname: "/setup-details",
          query: { templateId: "templateTwo" },
        }}
      >
        <button
          onClick={handleSave}
          className="w-[180px] bg-red-950 text-white py-4 mt-5 rounded-lg "
        >
          Save
        </button>
      </Link>
    </div>
  );
};

export default FormTable;
