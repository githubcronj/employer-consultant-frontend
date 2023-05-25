import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Components/Button/buttonComponent';
import InputComponent from '../Components/Input/inputComponent';
import envelope from '../public/Assets/envelope.svg';
import lock from '../public/Assets/lock.svg';
import eye from '../public/Assets/eye.svg';
import Link from 'next/link';
import styles from '../styles/LoginPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/action/loginaction';
import { useRouter } from 'next/router';
import validator from 'validator';
import closedeye from '../public/Assets/closedeye.svg';
const Login = () => {
  const [alignment, setAlignment] = useState('web');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailError] = useState('');
  const [pasErr, setPasswordErr] = useState('');
  const [password, setPassword] = useState('');
  const [iconsetone, setIconsetOne] = useState(false);
  const [displayPassword, setDisplayPassword] = useState('password');

  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const passwordclick = () => {
    setDisplayPassword(displayPassword == 'password' ? 'text' : 'password');
    setIconsetOne(!iconsetone);
  };
  const handleLogin = () => {
    if (emailErr === '') {
      setEmailError(true);
    }
    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Enter valid Email');
      return;
    }
    if (password.trim() === '') {
      setPasswordErr('Password is required');
      return;
    } else if (password.length < 6) {
      setPasswordErr('password should be at least 6 character');
    } else {
      setPasswordErr('');
    }
    const payload = {
      email: email,
      password: password,
    };

    dispatch(login(payload));
  };
  useEffect(() => {
    if (isLoggedIn) {
      router.push('/profile');
    }
  }, [isLoggedIn, router]);
  return (
    <div
      className={`max-w-[1536px] mx-auto flex flex-col  xl:flex-row xl:items-center justify-center lg:flex-row
      lg:items-center lg:justify-center md:flex-col lg:gap-12 xl:gap-0 h-[100%] lg:h-auto ${styles.desk}`}
    >
      <div className='flex flex-col items-center justify-center sm:pl-0  sm:mr-[2px] md:mr-[2px] flex-1 '>
        <div
          style={{ marginTop: '20px' }}
          className=' xl:w-1/2  md:w-full   flex flex-col justify-center items-center pt-0  gap-4 '
        >
          <h1
            className='text-2xl font-bold text-#1E0F3B mb-1 xl:ml-6 lg:ml-6'
            style={{ width: '72px', height: '29px', fontSize: '24px' }}
          >
            LOGO
          </h1>
          <div
            style={{
              marginTop: '15px',
              borderRadius: '20px',
              backgroundColor: '#EEEFEF',
              width: '412px',
              height: '60px',
            }}
            className='flex rounded-20 transition-all duration-300 gap-3 border-radius-2'
          >
            <button
              style={{
                borderRadius: '15px',
                backgroundColor: alignment === 'web' ? '#ffffff' : '#EEEFEF',
                padding: alignment === 'web' ? '12px' : '12px',
                fontWeight: alignment === 'web' ? '700' : '400',
                margin: '5px',
                width: '140px',
              }}
              className={`${
                alignment === 'web' ? 'bg-primary' : 'bg-white'
              } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
                alignment === 'web' ? 'bg-primary' : 'bg-white border-primary'
              }  sm:w-auto md:w-1/4 lg:w-1/5`}
              onClick={(e) => handleChange(e, 'web')}
            >
              Employer
            </button>
            <button
              style={{
                padding: alignment === 'android' ? '12px' : '12px',
                borderRadius: '15px',
                backgroundColor:
                  alignment === 'android' ? '#ffffff' : '#EEEFEF',
                fontWeight: alignment === 'android' ? '700' : '400',
                margin: '5px',
                width: '140px',
              }}
              className={`${
                alignment === 'android' ? 'bg-primary ' : 'bg-white'
              } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
                alignment === 'android'
                  ? 'bg-primary'
                  : 'bg-white border-primary'
              }  sm:w-auto md:w-1/4 lg:w-1/5`}
              onClick={(e) => handleChange(e, 'android')}
            >
              Consultant
            </button>
          </div>
        </div>
        {alignment == 'web' && (
          <>
            {' '}
            <div>
              <h1 className='text-3xl font-bold text-black pb-4 ml-2 mt-5 mb-5 '>
                Log In
              </h1>
            </div>
            <div className='xl:pl-10 lg:pl-10'>
              <InputComponent
                type='email'
                value={email}
                placeholder='Email address'
                onchange={(e) => setEmail(e.target.value)}
                lefticon={envelope.src}
              />
              <p
                style={{
                  color: emailErr === 'Valid Email' ? 'green' : 'red',
                }}
              >
                {emailErr}
              </p>

              <InputComponent
                type={displayPassword}
                value={password}
                placeholder='Password'
                lefticon={lock.src}
                righticon={iconsetone ? eye.src : closedeye.src}
                showpassword={passwordclick}
                onchange={(e) => setPassword(e.target.value)}
              />
              <p style={{ color: 'red' }}>{pasErr}</p>
              <div className='flex justify-end'>
                <div
                  style={{
                    marginLeft: 'auto',
                    marginTop: '-10px',
                    fontWeight: 'bold',
                  }}
                  className='text-right'
                >
                  <Link href='/forgotPassword'>
                    <h3 className='whitespace-nowrap'>Forgot Password?</h3>
                  </Link>
                </div>
              </div>
              <div style={{ marginTop: '15px' }}>
                <Button onClick={handleLogin}>Log In</Button>
              </div>
            </div>
            <div
              className='flex items-center xl:pl-10 lg:pl-10 mt-3 sm:w-96'
              style={{ width: '435px' }}
            >
              <hr className='flex-grow border-t-2 border-gray-300 w-24 sm:w-40 mr-5' />
              <span className='text-black'>OR</span>
              <hr className='flex-grow border-t-2 border-gray-300 w-24 sm:w-40 ml-5' />
            </div>
            <div className='flex items-center ml-10 gap-5 mt-3 '>
              <img
                src='/Assets/googleIcon.png'
                alt='googleIcon'
                style={{ width: '50px', height: '50px' }}
              />
              <img
                src='/Assets/facebookIcon.png'
                alt='facebookIcon'
                style={{ width: '50px', height: '50px' }}
              />
              <img
                src='/Assets/appleIcon.png'
                alt='appleIcon'
                style={{ width: '50px', height: '50px' }}
              />
            </div>
            <h3 className='ml-9 mt-4'>
              Already have account?
              <Link href='/register'>
                <span
                  style={{
                    color: '#F9342E',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                  onClick={() => console.log('signup clicked')}
                  className='pl-4'
                >
                  Register
                </span>
              </Link>
            </h3>
          </>
        )}
        {alignment !== 'web' && (
          <>
            <div>
              <h1 className='text-3xl font-bold text-black pb-4 ml-2 mt-5 mb-5  '>
                Log In
              </h1>
            </div>
            <div className='xl:pl-10 lg:pl-10'>
              <InputComponent
                type='email'
                value={email}
                placeholder='Email address'
                onchange={(e) => setEmail(e.target.value)}
                lefticon={envelope.src}
              />
              <p
                style={{
                  color: emailErr === 'Valid Email' ? 'green' : 'red',
                }}
              >
                {emailErr}
              </p>
              <InputComponent
                type={displayPassword}
                value={password}
                placeholder='Password'
                lefticon={lock.src}
                righticon={iconsetone ? eye.src : closedeye.src}
                showpassword={passwordclick}
                onchange={(e) => setPassword(e.target.value)}
              />
              <p style={{ color: 'red' }}>{pasErr}</p>
              <div className='flex justify-end'>
                <div
                  style={{
                    marginLeft: 'auto',
                    marginTop: '-10px',
                    fontWeight: 'bold',
                  }}
                  className='text-right'
                >
                  <Link href='/forgotPassword'>
                    <h3 className='whitespace-nowrap'>Forgot Password?</h3>
                  </Link>
                </div>
              </div>
              <div style={{ marginTop: '15px' }}>
                <Button onClick={handleLogin}>Log In</Button>
              </div>
            </div>

            <div
              className='flex items-center xl:pl-10 lg:pl-10 mt-3 sm:w-96'
              style={{ width: '435px' }}
            >
              <hr className='flex-grow border-t-2 border-gray-300 w-24 sm:w-40 mr-5' />
              <span className='text-black'>OR</span>
              <hr className='flex-grow border-t-2 border-gray-300 w-24 sm:w-40 ml-5' />
            </div>
            <div className='flex items-center ml-10 gap-5 mt-3 '>
              <img
                src='/Assets/googleIcon.png'
                alt='googleIcon'
                style={{ width: '50px', height: '50px' }}
              />
              <img
                src='/Assets/facebookIcon.png'
                alt='facebookIcon'
                style={{ width: '50px', height: '50px' }}
              />
              <img
                src='/Assets/appleIcon.png'
                alt='appleIcon'
                style={{ width: '50px', height: '50px' }}
              />
            </div>

            <h3 className='ml-9 mt-4'>
              Already have account?
              <Link href='/register'>
                <span
                  style={{
                    color: '#F9342E',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                  onClick={() => console.log('signup clicked')}
                  className='pl-4'
                >
                  Register
                </span>
              </Link>
            </h3>
          </>
        )}
      </div>

      <div className='hidden lg:flex p-0 md:w-full lg:w-auto max-w-[600px] xl:max-w-[720px] lg:h-[100vh] '>
        {alignment == 'web' && (
          <img
            src='/Assets/employerLoginimg.png'
            alt='Employer Login Image'
            className='object-cover h-full '
          />
        )}
        {alignment != 'web' && (
          <img
            src='/Assets/consultantimg.png'
            alt='Employer Login Image'
            className='object-cover h-full '
          />
        )}
      </div>
    </div>
  );
};
export default Login;
