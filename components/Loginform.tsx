"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
  
} from "@heroicons/react/24/outline";
import { creditcardstyles, colors ,logo } from "../constants/index";
import Cookie from 'js-cookie';
import { loginUser } from '@/services/authentication';


const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter()

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setErrorMessage("");
      try {
        const loggedInUser = await loginUser(data);

        console.log("Logged in user:", loggedInUser)
        
        Cookie.set('accessToken', loggedInUser.data.access_token);
        Cookie.set('refreshToken', loggedInUser.data.refresh_token);

        
        

        setIsLoading(false);
        // console.log("redirect...")
        window.location.href = '/'
        // console.log("Success")
      } catch (error) {
        console.error('Error here:', error);
        setIsLoading(false);
        if (error instanceof Error) {
          setErrorMessage(error.message || "Login failed. Please try again.");
        } else if (typeof error === 'object' && error !== null && 'response' in error) {
          const axiosError = error as any; // Type assertion
          setErrorMessage(axiosError.response?.data?.message || "Login failed. Please try again.");
        } else {
          setErrorMessage("An unexpected error occurred.");
        }

      }
    };

  return (
    <div className="flex items-center justify-center max-h-screen py-4 overflow-hidden">
      <div className="flex-col items-center justify-center w-[50vh]">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 rounded-2xl">
      <div className="flex items-center">
              <Image src='/icons/logo.svg' alt="Logo" width={36} height={36} />
              <div className="text-[#343C6A] dark:text-gray-200 pl-2 md:text-xl md:pl-1 lg:pl-2 lg:text-2xl text-base xl:text-4xl md:text-[21px] font-[800] font-mont">
                BankDash.
              </div>
            </div> 

        <div className="py-4">
        <div>
          <label htmlFor="userName" className="block font-bold mb-2 text-gray-700 dark:text-white">
          UserName
          </label>
          <input
          id="userName"
          type="text"
          placeholder="Username"  
          defaultValue="tester"
          {...register("userName", { required: "Username is required" })}
          className="w-full m-auto border-gray-200  dark:text-dark dark:bg-white border-2 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-10 px-2.5"
          />
          {errors.userName && (
          <div className="flex gap-1">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-red-500">{errors.userName.message as string}</p>
          </div>
          )}
        </div>
        </div>

        <div className="py-4">
        <div>
          <label htmlFor="password" className="block font-bold mb-2 text-gray-700 dark:text-white">
          Password
          </label>
          <input
          id="password"
          type="password"
          placeholder="Password"
          defaultValue={"12345678"}
          {...register("password", { required: "Password is required" })}
          className="w-full m-auto border-gray-200 dark:text-dark dark:bg-white border-2 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-10 px-2.5"
          />
          {errors.password && (
          <div className="flex gap-1">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-red-500">{errors.password.message as string}</p>
          </div>
          )}
        </div>
        </div>

        {errorMessage && (
        <div className="text-red-500 text-center mb-4">
          {errorMessage} Enter valid credentials
        </div>
        )}

        <div className="flex items-center justify-center">
        <button
        type="submit"
        className={` text-white px-4 py-2 mt-4 w-full rounded-3xl text-xl hover:bg-indigo-600 ${isLoading ? 'bg-indigo-500 cursor-not-allowed hover:bg-indigo-500' : 'bg-indigo-700' }`}
        >
        {isLoading ? (

          <div className="flex justify-center items-center ">
            <ArrowPathIcon className="h-5 w-5 animate-spin  text-white  " />
          </div>
        ) : (
          
          "Login"
        )}
        </button>
        
        </div>

        <div className="my-14 flex flex-col items-center text-l ">
        <p className={`${colors.textgray}`}>
          Don&apos;t have an account?{" "}
          <span className={`${colors.textblue} font-medium text-l`}>
          <Link href="./signup" className="dark:text-gray-300" >Sign Up</Link>
          </span>
        </p>
        <span className={`${colors.textblue} dark:text-gray-300 font-medium text-l py-2`}>
          <Link href="/forgotpassword">Forgot password?</Link>
        </span>
        </div>
      </form>
      </div>
    </div>
    );
};

export default LoginForm;
