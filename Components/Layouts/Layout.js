import React from 'react';
import { useRouter } from 'next/router';
import { Navbar } from 'Components/Navbar/Navbar';
import { SideBar } from 'Components/Sidebar/sideBar';
function Layout(props) {
  const router = useRouter();

  const { children } = props;
  const { pathname } = router;

  const shouldRenderComponents = ![
    '/Login',
    '/register',
    '/profile',
    '/forgotPassword',
    '/resetPassword',
    '/confirmPassword',
    '/verifyotp',
    '/resume-upload',
    '/resume-json',
    '/setup-details',
    '/editProfile',
    '/setup-details',
    '/searchJob',
    '/resume-templates',
    '/cviewprofile',
    '/samplepage',
    '/consultant/applied-jobs'
  ].includes(pathname);
  const onlyNav = ['/viewProfileCon'];
  return (
    <>
      <div className='layout '>
        {shouldRenderComponents && (
          <>
            <Navbar />
            {/* {!onlyNav && ( */}
            <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row min-w-[100%] '>
              <SideBar />
              <div className='relative xl:left-[220px] lg:left-[220px] md:left-[220px] sm:left-[220px] xl:w-[calc(100%_-_14rem)] lg::w-[calc(100%_-_14rem) sm:w-[calc(100%_-_14rem) md:w-[calc(100%_-_14rem)'>
                {children}
              </div>
            </div>
            {/* )} */}
            {/* {onlyNav && <>{children}</>} */}
          </>
        )}

        {!shouldRenderComponents && <>{children}</>}
      </div>
    </>
  );
}

export default Layout;
