import React from "react";
import { useRouter } from "next/router";
import { Navbar } from "Components/Navbar/Navbar";
import { SideBar } from "Components/Sidebar/sideBar";
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
    "/search_job",
    "/resume-templates",
    "/cviewprofile",
    // "/samplepage",
    "/consultant/applied-jobs",
    // "/jobsearch-details",
    "/resume-created",
    "/job-apply-search/",
    "/googleAuth",
  ].includes(pathname);
  const onlyNav = ["/viewProfileCon"];

  const excludeSideBarPaths = ["/job-apply-search"];

  const shouldRenderSidebar =
    shouldRenderComponents &&
    !excludeSideBarPaths.some((path) => pathname.startsWith(path));

  return (
    <div className="layout">
      {shouldRenderComponents && (
        <>
          <Navbar />
          {shouldRenderSidebar ? (
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row min-w-[100%]">
              <SideBar />
              <div className="relative xl:left-[220px] lg:left-[220px] md:left-[220px] sm:left-[220px] xl:w-[calc(100%_-_14rem)] lg::w-[calc(100%_-_14rem) sm:w-[calc(100%_-_14rem) md:w-[calc(100%_-_14rem)">
                {children}
              </div>
            </div>
          ) : (
            <div className="relative xl:w-[calc(100%_-_14rem)] lg::w-[calc(100%_-_14rem) sm:w-[calc(100%_-_14rem) md:w-[calc(100%_-_14rem)]">
              {children}
            </div>
          )}
        </>
      )}

      {!shouldRenderComponents && <>{children}</>}
    </div>
  );
}

export default Layout;

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { Navbar } from "Components/Navbar/Navbar";
// import { SideBar } from "Components/Sidebar/sideBar";
// import Login from "pages/login";
// import ProtectedRoute from "Components/ProtectedRoute/ProtectedRoute";

// function Layout(props) {
//   const { children } = props;
//   const router = useRouter();
//   const [userRole, setUserRole] = useState(null);

//   // Define the allowed routes for each role
//   const roleRoutes = {
//     employer: ["/profile", "/editProfile"],
//     consultant: [
//       // "/dashboard",
//       "/resume-upload",
//       "/resume-json",
//       "/setup-details",
//       "/search_job",
//       "/resume-templates",
//       "/cviewprofile",
//       "/samplepage",
//       "/consultant/applied-jobs",
//       "/jobsearch-details",
//       "/resume-created",
//       "/job-apply-search",
//       ,
//     ],
//   };

//   // Determine if the current route is allowed for the user's role
//   const isRouteAllowed = (role) => {
//     const allowedRoutes = roleRoutes[role];
//     return allowedRoutes ? allowedRoutes.includes(router.pathname) : false;
//   };

//   // Determine if the user should see the navbar and sidebar components
//   const shouldRenderNavbar =
//     userRole &&
//     router.pathname !== "/login" &&
//     router.pathname !== "/register" &&
//     router.pathname !== "/googleAuth";

//   const shouldRenderSidebar =
//     shouldRenderNavbar && userRole === "employer" && !isRouteAllowed(userRole);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedRole = localStorage.getItem("role");
//       setUserRole(storedRole);
//     }
//   }, []);

//   return (
//     <div className="layout">
//       {shouldRenderNavbar && <Navbar />}
//       <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row min-w-[100%]">
//         {shouldRenderSidebar && <SideBar />}

//         {userRole === "employer" ? (
//           <div className="relative xl:left-[220px] lg:left-[220px] md:left-[220px] sm:left-[220px] xl:w-[calc(100%_-_14rem)] lg::w-[calc(100%_-_14rem) sm:w-[calc(100%_-_14rem) md:w-[calc(100%_-_14rem)">
//             <ProtectedRoute allowedRoles={["employer"]}>
//               {children}
//             </ProtectedRoute>
//           </div>
//         ) : (
//           <div className="relative ">
//             <ProtectedRoute allowedRoles={["consultant"]}>
//               {children}
//             </ProtectedRoute>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Layout;
