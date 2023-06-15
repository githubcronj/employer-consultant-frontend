"use client";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { put } from "redux-saga/effects";
import {
  googleLogin,
  googleLoginRedirectAction,
} from "../store/action/loginaction";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import withAuthRedirect from "Components/ProtectedRoute/WithAuthRedirect";

const GoogleAuth = () => {
  const router = useRouter();

  const { data: session } = useSession();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);

  useEffect(() => {
    const role = localStorage.getItem("role");
    console.log(role);
    if (isLoggedIn) {
      if (role === "employer") {
        router.push("/");
      } else if (role === "consultant") {
        router.push("/search_job");
      }
    }
  }, [isLoggedIn, router]);

  const setUserData = async () => {
    if (!session) {
      // Session data is not available yet, handle it accordingly
      return;
    }
    try {
      const nameParts = session.user.name.split(" ");
      const payload = {
        role: localStorage.getItem("role"),
        email: session?.user?.email,
        firstName: nameParts[0],
        lastName: nameParts[1],
      };

      dispatch(googleLogin(payload));
      // router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUserData();
  }, [session]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2">Google Auth Checking....</Typography>
    </div>
  );
};

export default withAuthRedirect(GoogleAuth);
