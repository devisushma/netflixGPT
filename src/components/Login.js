import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSign] = useState(true);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

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
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocJzKRz8NnNISZpWowIbPaDODDnl7yNI9RnvEclEh85veafQ4d80LA=s96-c",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log(user,"user")
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
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
          navigate("/browse");
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
      <img
        className="absolute"
        src="https://mustafaselman.github.io/001-netflix-surveyform/background_image.jpg"
        alt="logo"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black opacity-90 w-4/12 right-0 left-0 mx-auto my-36"
      >
        <h1 className="text-white font-bold text-4xl mx-10 my-2">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        <br />
        {!isSignIn && (
          <>
            <input
              type="text"
              ref={name}
              placeholder="Name"
              className="p-2 mx-10 w-8/12 my-2 bg-gray-500 text-white rounded-lg"
            />
            <br />
          </>
        )}
        <input
          type="text"
          placeholder="Email"
          ref={email}
          className="p-2 mx-10 w-8/12 bg-gray-500 text-white rounded-lg"
        />
        <br />
        <input
          type="password"
          placeholder="password"
          ref={password}
          className="p-2 mx-10 my-2 w-8/12 bg-gray-500 text-white rounded-lg"
        />
        <br />
        <p className="text-red-900 font-bold mx-10">{errorMessage}</p>
        <button
          className="mx-10 my-2 p-2 text-white w-8/12 bg-red-600 rounded-lg font-bold"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <br />
        <p
          className="text-white mx-10 cursor-pointer my-2"
          onClick={handleIsSignin}
        >
          {isSignIn ? "new to netflix? signup now" : "Already User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
