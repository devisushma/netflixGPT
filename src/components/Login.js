import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { profile_logo } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSign] = useState(true);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    const nameVal = name.current ? name.current.value : "";

    setErrorMessage(
      checkValidate(nameVal, email.current.value, password.current.value)
    );
    if (errorMessage) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: profile_logo
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const handleIsSignin = () => setIsSign(!isSignIn);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src="https://mustafaselman.github.io/001-netflix-surveyform/background_image.jpg"
          alt="logo"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black bg-opacity-70 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg backdrop-blur-sm shadow-2xl"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[#333] rounded-sm bg-opacity-50 border border-transparent focus:border-white focus:outline-none transition-all duration-300"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-4 w-full bg-[#333] rounded-sm bg-opacity-50 border border-transparent focus:border-white focus:outline-none transition-all duration-300"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-4 my-4 w-full bg-[#333] rounded-sm bg-opacity-50 border border-transparent focus:border-white focus:outline-none transition-all duration-300"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-sm font-bold hover:bg-red-800 transition-colors duration-300"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer text-gray-400 hover:text-white transition-colors duration-200" onClick={handleIsSignin}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
