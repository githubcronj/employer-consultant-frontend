import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Login from '../Components/Login/login';
import Signup from '../Components/Signup/signup';

export default function Home() {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
}
