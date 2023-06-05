import React from "react";

const SetupSkills = ({
  skillsDetails,
  tempSkills,
  handleSkillsAdd,
  infodata,
  handleSkillsremovedata,
}) => {
  function skillHandleChange(e) {
    tempSkills(e);
  }
  const addData = (section) => {
    handleSkillsAdd(section);
  };

  const removeData = (indexdata) => {
    handleSkillsremovedata(indexdata);
  };

  return (
    <div className=" bg-white ">
      {/* first section */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-4 mb-8">
          <div className="relative">
            <input
              type="text"
              id="skillName"
              placeholder="Skill name"
              required
              className="py-5 pl-4 pr-32 border rounded-[10px] border-[#D8D8DD] w-full"
              name="tempSkills.skillName"
              value={skillsDetails?.skillName || ""}
              onChange={skillHandleChange}
            />
            <button
              type="submit"
              className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase absolute top-0 right-0 mt-2 mr-1 sm:mr-3 sm:mt-2"
              onClick={() => addData("skillsDetails")}
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex justify-end"></div>
      </form>
      {/* block display */}
      <div className="py-4 grid sm:grid-cols-2 gap-7">
        {infodata.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#F9F6EE] p-6 bordr rounded-xl text-[#1E0F3B] font-bold"
              style={{ position: "relative" }}
            >
              <div>
                <p className="">{item.skillName}</p>
              </div>
              <img
                src="/Assets/cross.svg"
                alt="cameraIcon"
                className=" justify-end"
                style={{ position: "absolute", top: "11%", right: "2%" }}
                onClick={() => removeData(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SetupSkills;
