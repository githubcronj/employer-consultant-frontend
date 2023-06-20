import { useState, useEffect, useRef } from "react";
import Avatar from "public/Assets/man.png";
import DownArrow from "public/Assets/down-arrow.svg";
import UpArrow from "public/Assets/up-arrow.svg";
import RightArrow from "public/Assets/right-arrow.svg";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../store/action/loginaction";
import { useRouter } from "next/router";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession, signIn } from "next-auth/react";
import { PROFILE_REQUEST } from "store/type/getProfileType";
import { GET_PROFILE_REQUEST } from "store/type/viewProfileType";

const Dropdown = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  // const productionUrl = "http://13.53.75.126:3000"; //need to be changed in future
  const productionUrl = process.env.NEXT_PUBLIC_FRONTEND_PROD_URL;
  // const devUrl = "http://localhost:3000";
  const devUrl = process.env.NEXT_PUBLIC_FRONTEND_LOCAL_URL;
  const handleLogout = async (e) => {
    // e.preventDefault();
    // await signOut({
    //   redirect: false,
    //   // callbackUrl: `/login`,
    // });
    // await router.push("/login");
    sessionStorage.clear();
    localStorage.clear();
    const url = process.env.NODE_ENV === "development" ? productionUrl : devUrl;
    window.location = url + "/login";
    localStorage.removeItem("CurrentUser");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLogout();
      // router.push("/login");
    }, 1800000);
    return () => clearTimeout(timeout);
  }, []);

  function handleNavigate(url1, url2) {
    if (role === "employer") {
      router.push(`/${url1}`);
    } else {
      router.push(`/${url2}`);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("CurrentUser"));
    const role = storedData?.user?.role;
    setRole(role);
  }, []);

  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();
  const payload = {
    token: finaltoken,
  };
  useEffect(() => {
    if (role === "employer") {
      dispatch({ type: PROFILE_REQUEST, payload });
    }
    if (role === "consultant") {
      dispatch({ type: GET_PROFILE_REQUEST, payload });
    }
  }, [role]);
  const response = useSelector(
    (state) => state?.viewProfileReducer?.CurrentUser
  );

  const data1 = useSelector((state) => state.getProfileReducer?.CurrentUser);
  const nameParts = session?.user?.name?.split(" ");
  const firstName =
    nameParts && nameParts.length > 0
      ? nameParts[0]
      : role === "employer"
      ? data1?.companyName
      : response?.fullName;

  return (
    <div className="flex flex-row">
      <div className="w-[36px] h-[36px] rounded-full ">
        <img src={Avatar.src} alt="avatar" className="rounded-full" />
      </div>
      <div className="dropdown inline-block relative" ref={dropdownRef}>
        <button
          className="text-[#131523] text-[14px] py-2 px-4 pl-2 rounded inline-flex items-center"
          onClick={toggleDropdown}
        >
          <span className="text-[#131523] mr-2 ">{firstName}</span>
          <img src={isOpen ? UpArrow.src : DownArrow.src} alt="Arrow" />
        </button>
        {isOpen && (
          <ul className="dropdown-content absolute bg-[#F9F6EE] mt-[0.8rem] py-1 whitespace-nowrap shadow-[0px_6px_16px_rgba(0,0,0,0.16)] opacity-100 z-50 right-0 w-[146px] rounded-[10px] ">
            <li>
              <div
                className="flex flex-row  px-4 py-2 text-gray-800 "
                // href={`${
                //   role === "employer"
                //     ? "view-profile"
                //     : "viewjobpost/cviewprofile"
                // }`}
                onClick={() =>
                  handleNavigate("view-profile", "viewjobpost/cviewprofile")
                }
              >
                <span className="flex-1 text-[#1E0F3B]">View Profile</span>
                <img src={RightArrow.src} alt="" />
              </div>
            </li>
            <li>
              <div
                className="flex flex-row px-4 py-2 text-gray-800"
                // href="/editProfile"
                // href={`${
                //   role === "employer" ? "editProfile" : "setup-details"
                // }`}
                onClick={() => handleNavigate("editProfile", "search_job")}
              >
                <span className="flex-1 text-[#1E0F3B] ">Edit Profile</span>
                <img src={RightArrow.src} alt="" />
              </div>
            </li>
            <li>
              <div
                className="flex flex-row px-4 py-2 text-gray-800 cursor-pointer"
                onClick={handleLogout}
                // href="/login"
              >
                <span className="flex-1 text-[#F9342E] ">Logout</span>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
