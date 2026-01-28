import Image from "next/image";
import SignUpForm from "../components/SignUpForm/SignUPForm";
import LoginImageBase from "../assets/images/loginImage-base.png";
import LoginImageFront from "../assets/images/loginImage-Front.png";
import LoginImageLogo from "../assets/images/loginImage-logo.png";
import { Suspense } from "react";

const SignUp = () => {
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

      <div className="flex justify-center w-full xl:mr-40 mt-8 md:mt-0 p-5">
        <div className="w-100">
          <h1 className="text-3xl md:text-3xl font-semibold mb-2 manrope-font">
            Create Your Account
          </h1>
          <p className="text-[#697586] text-sm md:text-base mb-6">
            Enter your details to start with CORESTOCK.
          </p>
          <Suspense fallback={<div>Loading signup...</div>}>
            <SignUpForm />
          </Suspense>{" "}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
