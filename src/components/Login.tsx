'use client'

import { signIn as nextAuthSignIn } from "next-auth/react";
import Image from "next/image"
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

function Login() {


  async function handleSignIn() {
    try {
      const response = await nextAuthSignIn("google", { redirect: false });

      if (response?.ok) {
        logEvent(analytics, "sign_in_success");
        console.log("login success")
        window.location.href = "/";
      } else {
        throw new Error("Sign in failed.");
      }
    } catch (error) {
      console.error("Sign in failed:", error as Error);
      logEvent(analytics, "sign_in_failure", {
        error_message: (error as Error).message,
      });
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-center">
      <Image
        src="/assets/Logo/SommerLogo.png"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        className="mt-10 flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={handleSignIn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M19.25 10c0-.68-.06-1.34-.16-2h-9.09v3.64h5.03c-.22 1.18-.87 2.17-1.81 2.83v2.34h2.93c1.71-1.57 2.7-3.88 2.7-6.81z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M9.99 18.04c2.44 0 4.51-.81 6.01-2.2l-2.93-2.34c-.8.52-1.82.83-3.08.83-2.36 0-4.35-1.58-5.07-3.72H2.5v2.34c1.49 2.94 4.51 4.98 7.49 4.98z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M4.92 11.32c-.13-.39-.21-.81-.21-1.32s.08-.93.21-1.32V6.64H2.5a9.29 9.29 0 000 6.72l2.42-1.04z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M9.99 3.96c1.26 0 2.4.43 3.29 1.26l2.46-2.4C14.49 1.56 12.42.5 9.99.5 6.01.5 2.99 2.54 1.5 5.48L4.43 7.9c.72-2.14 2.71-3.72 5.56-3.94z"
            clipRule="evenodd"
          />
        </svg>
        Sign in with Google
      </button>
    </div>
  )
}

export default Login
