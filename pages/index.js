import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Login from 'Components/Login/Login';
import Signup from 'Components/Signup/Signup';

export default function Home() {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
}
