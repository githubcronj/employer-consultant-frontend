import React from "react";

const SetupEducation = ({
  educationDetails,
  tempeducation,
  handleEducationAdd,
  infodata,
  handleEducationremovedata,
}) => {
  function eduHandleChage(e) {
    tempeducation(e);
  }

  const addData = (section) => {
    handleEducationAdd(section);
  };
  const removeData = (indexdata) => {
    handleEducationremovedata(indexdata);
  };
  return (
    <div className=" bg-white ">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div>
            <select
              id="level"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
                backgroundImage: "none",
                backgroundImage: "url(/Assets/down-arrow.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "95% center",
                paddingRight: "20px",
              }}
              name="tempeducation.level"
              value={educationDetails.level || ""}
              onChange={eduHandleChage}
            >
              <option value="">Highest Education Level</option>
              <option value="BCA">BCA</option>
              <option value="BE">BE</option>
              <option value="B.Tech">B.Tech</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              id="institutionName"
              placeholder="Institution Name"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
              name="tempeducation.institutionName"
              value={educationDetails.institutionName || ""}
              onChange={eduHandleChage}
            />{" "}
          </div>
          <div>
            <select
              id="degreeName"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
                backgroundImage: "none",
                backgroundImage: "url(/Assets/down-arrow.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "95% center",
                paddingRight: "20px",
              }}
              name="tempeducation.degreeName"
              value={educationDetails.degreeName || ""}
              onChange={eduHandleChage}
            >
              <option value="">Degree/Diploma</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Associate degree">Associate degree</option>
              <option value="Bachelor degree">Bachelor degree</option>
              <option value="Master degree">Master degree</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              id="year"
              placeholder="Year of Passing"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
              name="tempeducation.year"
              value={educationDetails.year || ""}
              onChange={eduHandleChage}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={addData}
            type="submit"
            className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase"
          >
            Add
          </button>
        </div>
      </form>
      {/* block display */}
      <div className="py-4 grid sm:grid-cols-2 gap-7">
        {infodata?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#F9F6EE] p-6 bordr rounded-xl text-[#1E0F3B] font-bold"
              style={{ position: "relative" }}
            >
              <div>
                <p className="">{item.level + " " + item.degreeName}</p>
                <p className="py-1">{item.institutionName}</p>
                <p className="text-[#9C94A2]">{item.year}</p>
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

export default SetupEducation;
