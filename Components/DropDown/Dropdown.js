import { useState, useEffect, useRef } from "react";
import Avatar from "public/Assets/man.png";
import DownArrow from "public/Assets/down-arrow.svg";
import UpArrow from "public/Assets/up-arrow.svg";
import RightArrow from "public/Assets/right-arrow.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../store/action/loginaction";
import { useRouter } from "next/router";
import Link from "next/link";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  const handleLogout = (e) => {
    // e.preventDefault();
    dispatch(logout());
    // router.push('/login');
    localStorage.clear();
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className='flex flex-row'>
      <div className='w-[36px] h-[36px] rounded-full '>
        <img src={Avatar.src} alt='avatar' className='rounded-full' />
      </div>
      <div className='dropdown inline-block relative' ref={dropdownRef}>
        <button
          className='text-[#131523] text-[14px] py-2 px-4 pl-2 rounded inline-flex items-center'
          onClick={toggleDropdown}
        >
          <span className='text-[#131523] mr-2 '>NAME</span>
          <img src={isOpen ? UpArrow.src : DownArrow.src} alt='Arrow' />
        </button>
        {isOpen && (
          <ul className='dropdown-content absolute bg-[#F9F6EE] mt-[0.8rem] py-1 whitespace-nowrap shadow-[0px_6px_16px_rgba(0,0,0,0.16)] opacity-100 z-50 right-0 w-[146px] rounded-[10px] '>
            <li>
              <Link
                className='flex flex-row  px-4 py-2 text-gray-800 '
                href='#'
              >
                <span
                  className='flex-1 text-[#1E0F3B]'
                  onClick={() => router.push("/view-profile")}
                >
                  View Profile
                </span>
                <img src={RightArrow.src} alt='' />
              </Link>
            </li>
            <li>
              <Link
                className='flex flex-row px-4 py-2 text-gray-800'
                href='/editProfile'
              >
                <span className='flex-1 text-[#1E0F3B] '>Edit Profile</span>
                <img src={RightArrow.src} alt='' />
              </Link>
            </li>
            <li>
              <Link
                className='flex flex-row px-4 py-2 text-gray-800 cursor-pointer'
                onClick={handleLogout}
                href='/Login'
              >
                <span className='flex-1 text-[#F9342E] '>Logout</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
