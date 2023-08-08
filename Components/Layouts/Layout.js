import React from "react";
import { useRouter } from "next/router";
import { Navbar } from "Components/Navbar/Navbar";
import SideBar from "Components/Sidebar/sideBar";
function Layout(props) {
  const router = useRouter();

  const { children } = props;
  const { pathname } = router;

  const shouldRenderComponents = ![
    "/login",
    "/register",
    "/profile",
    "/forgotPassword",
    "/resetPassword",
    "/confirmPassword",
    "/verifyotp",
    "/resume-upload",
    "/resume-json",
    "/setup-details",
    "/editProfile",
    "/setup-details",
    "/resume",
    "/resumeNew",
    "/search_job",
    "/resume-templates",
    "/cviewprofile",
    // "/samplepage",
    "/consultant/applied-jobs",
    "/consultant-applied-jobs/applied-jobs",
    "/consultant-saved-jobs/saved-jobs",
    // "/jobsearch-details",
    "/resume-created",
    "/job-apply-search/",
    "/googleAuth",
    "/viewjobpost/cviewprofile",
    "/reset-password",
    "/consultant-interview",
    "/edit-consultant-profile",
    "/chat-page",
  ].includes(pathname);
  const onlyNav = ["/viewProfileCon"];

  const excludeSideBarPaths = ["/job-apply-search", "/reset-password"];

  const shouldRenderSidebar =
    shouldRenderComponents &&
    !excludeSideBarPaths.some((path) => pathname.startsWith(path));

  const navbarRoutes = [
    "/login",
    "/reset-password",
    "/googleAuth",
    "/verifyotp",
    "/register",
    "/confirmPassword",
    "/resetPassword",
    "/forgotPassword",
    "/resume-upload",
    "/resume-json",
    "/setup-details",
    "/resume-templates",
    "/resume-created",
    "/profile",
  ];

  const shouldRenderNavbar = !navbarRoutes.includes(pathname);

  return (
    <div className="container__class">
      {shouldRenderNavbar && <Navbar />}
      {shouldRenderComponents && (
        <>
          {/* <Navbar /> */}
          {shouldRenderSidebar ? (
            <div className="flex flex-col xl:flex-row lg:flex-row min-w-[100%] h-[100vh] bg-white 2xl:max-w-[1536px] overflow-y-auto 2xl:justify-start">
              <SideBar />
              <div className="relative lg:left-[245px] xl:left-[245px] 2xl:left-[245px] lg:w-[calc(100%_-_15rem)] xl:w-[calc(100%_-_16rem)] 2xl:w-[calc(100%_-_18rem)] ">
                {children}
              </div>
            </div>
          ) : (
            <div className="relative">{children}</div>
          )}
        </>
      )}

      {!shouldRenderComponents && <>{children}</>}
    </div>
  );
}

export default Layout;
