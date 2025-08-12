import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="h-screen ">
      <Header />

      <div className="absolute">
        <img
          className="w-full h-full object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
          alt="logo"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-[855px] bg-black opacity-55 z-0"></div>

      <form onSubmit={(e)=> e.preventDefault()} className="rounded absolute w-3/12 p-12 bg-black mt-[165px] mx-auto left-0 right-0 text-white bg-opacity-70">
        <h1 className="text-3xl my-2 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Your Full Name"
            className="p-2 my-3 w-full bg-transparent border border-white rounded"
          />
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full bg-transparent border border-white rounded"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-transparent border border-white rounded"
        />
        <p className="text-red-700 font-bold pb-1">{errorMessage}</p>
        <button
          className="py-2 px-3 my-5 w-full rounded bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Here."}
        </p>
      </form>
    </div>
  );
};

export default Login;
