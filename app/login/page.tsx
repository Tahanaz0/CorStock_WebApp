// Note: This is Login Screen...!

import React from "react";
import Image from "next/image";
import LoginForm from "../components/loginForm/loginForm";
import LoginImageBase from "../assets/images/loginImage-base.png";
import LoginImageFront from "../assets/images/loginImage-Front.png";
import LoginImageLogo from "../assets/images/loginImage-logo.png";

const LoginPage = () => {
  return (
    <section className="flex items-center max-w-480 satoshi-font">
      <div className="hidden md:flex items-center justify-left w-full  relative login-image-hide">
        {/* Logo at top-left */}
        <div className="absolute top-8 left-7 z-1">
          <Image src={LoginImageLogo} alt="Logo" className="w-30 res-logo" />
        </div>

        {/* Base image (background card) */}
        <div className="relative p-2 ">
          <Image
            src={LoginImageBase}
            alt="Login Illustration Base"
            className="w-72 md:w-80 lg:w-125 h-[97vh] res-width"
          />

          {/* Front overlay image */}
          <div className="absolute md:bottom-4 md:left-6 lg:bottom-4 lg:left-15 w-full flex justify-center items-center res-front-left">
            <Image
              src={LoginImageFront}
              alt="Login Illustration Front"
              className="w-68 lg:w-95 h-108 relative res-front-width"
            />
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="flex justify-center w-full xl:mr-40 mt-25 md:mt-0 p-5">
        <div className="w-120">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2 manrope-font">
            Welcome Back!
          </h1>
          <p className="text-[#697586] text-base mb-8">
            Enter your details to start with CORESTOCK.
          </p>
          {/* Login form */}
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
