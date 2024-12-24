import { BACKGROUND_IMG_URL } from "../utils/constant";
import Header from "./Header";
import { ValidateData } from "../utils/validate";
import { useRef, useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form
    const msg = ValidateData(email.current.value, password.current.value);
    setErrorMessage(msg.message);
    if (msg.isValid === false) {
      return;
    }
    // if the form is valid, sign in or sign up the user
    if (!isSignInForm) {
      // sign up the user
    } else {
      // sign in the user
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG_URL} alt="background-img" />
      </div>
      {/* form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 w-3/12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70 "
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="FullName"
            className="my-4 p-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="my-4 p-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-700 rounded-lg"
        />
        <button
          className="my-6 p-4 bg-red-700 font-bold w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "SIGN IN" : "SIGN UP"}
        </button>
        <p className="text-red-400 font-medium text-xl">{errorMessage}</p>
        <p className="text-gray-400">
          {isSignInForm ? "New to Netflix? " : "Already a User? "}
          <span
            onClick={toggleSignInForm}
            className="text-white cursor-pointer"
          >
            {isSignInForm ? "Sign up now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
