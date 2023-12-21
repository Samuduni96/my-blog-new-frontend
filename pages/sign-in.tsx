import Router from "next/router";
import { useState } from "react";
import Image from "next/image";
import googleIcon from "../public/assets/google_icon.png"
import facebookIcon from "../public/assets/fb_icon.png"
import Link from "next/link";
import Button from "../components/Button";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        console.error("Failed to sign up:", response.status);
        return;
      }

      Router.push("/home");
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  return (
    <>
      <div className="absolute top-0 right-0 z-10 p-4 md:p-6">
        <button
          onClick={() => {
            Router.push("/");
          }}
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-darker"
        >
          <svg
            className="w-4 h-4 text-white md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <p className="text-xs text-center text-primary-darker hidden md:block">
          Close
        </p>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-1/3 p-6 bg-white shadow-lg rounded-md">
          <h2 className=" font-semibold font-roboto text-center text-primary-darker text-2xl md:text-3xl mb-6">
            Sign In with
          </h2>
          <div className="flex justify-center space-x-4 mb-6">
            <button
              type="button"
              //   onClick={() => {
              //     googleSignIn();
              //   }}
              className="flex justify-center space-x-2 items-center border rounded-none p-2 w-full"
            >
              <Image
                src={googleIcon}
                alt="Google logo"
                width={20}
                height={20}
                objectFit="cover"
              />
              <span className="font-Inter text-primary-darkgray font-bold space-x-2 sm:block hidden">
                Google
              </span>
            </button>

            <button
              type="button"
              //   onClick={() => {
              //     facebookLogIn();
              //   }}
              className="flex justify-center items-center space-x-1 border rounded-none p-2 w-full"
            >
              <Image
                src={facebookIcon}
                alt="Google logo"
                width={20}
                height={20}
                objectFit="cover"
              />

              <span className="font-Inter text-primary-darkgray font-bold sm:block hidden">
                Facebook
              </span>
            </button>
          </div>

          <div className="relative mb-4">
            <hr />
            <span className="text-black absolute right-1/2 -top-3 translate-x-1/2 bg-white px-2 text-center text-grey-base font-bold">
              or
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-right mb-4">
              <a href="#" className="hover:underline text-blue py-2">
                Forgot Password?
              </a>
            </div>
            <div className="flex flex-col justify-end  flex-grow space-y-2">
              <Button fullWidth type="submit">
                Sign In
              </Button>
              <div className="text-black flex space-x-2 justify-center">
                <p>Don&lsquo;t have an account?</p>
                <Link
                  href="/"
                  className="font-semibold text-primary-darkblue hover:text-primary-dark transition ease-in"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
