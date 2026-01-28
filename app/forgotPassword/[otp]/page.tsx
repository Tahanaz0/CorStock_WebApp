// Note: This is Reset Password Screen...!

import React from "react";
import Image from "next/image";
import PasswordReset from "../../components/reset-forget-Password/passwordReset";
import LoginImageBase from "../../assets/images/loginImage-base.png";
import LoginImageFront from "../../assets/images/loginImage-Front.png";
import LoginImageLogo from "../../assets/images/loginImage-logo.png";

interface PageProps {
  params: {
    otp: string;
  };
}

const ResetPassword = async ({ params }: PageProps) => {
  const { otp } = await params;
  return (
    <section className="grid items-center justify-center min-h-screen satoshi-font md:grid-cols-2 lg:grid-cols-2">
      {/* Image Container - visible on md screens and up */}
      <div className="items-center justify-left w-full relative login-image-hide hidden md:flex lg:flex">
        {/* Logo at top-left */}
        <div className="absolute top-8 left-7 z-1">
          <Image src={LoginImageLogo} alt="Logo" className="w-30 res-logo" />
        </div>

        {/* Base image (background card) */}
        <div className="relative p-2 ">
          <Image
            src={LoginImageBase}
            alt="Login Illustration Base"
            className="w-72 md:w-80 lg:w-125 h-[97vh] res-width reset-img-res"
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
      <div className="flex justify-center w-full xl:mr-40 md:mt-0 p-5 ">
        <div className="res-forgot-input w-100">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2 manrope-font">
            Password Reset
          </h1>
          <p className="text-[#697586] text-base mb-8">
            Enter your new password.
          </p>
          {/* Login form */}
          <PasswordReset otp={otp} />
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
