import Header from "./Header";
import { useState } from "react";


const Login = () => {
const [isSignIn, setIsSign] = useState(true)

const handleIsSignin = () => setIsSign(!isSignIn)

  return (
    <div>
      <Header />
      <img className="absolute" src="https://mustafaselman.github.io/001-netflix-surveyform/background_image.jpg" alt="logo" />
      < form className="absolute bg-black opacity-90 w-4/12 right-0 left-0 mx-auto my-36">
        <h1 className="text-white font-bold text-4xl mx-10 my-2">
            {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        <br />
        {!isSignIn && <><input type="text" placeholder="Name" className="p-2 mx-10 w-8/12 my-2 bg-gray-500 text-white rounded-lg" /><br /></> }
        <input type="text" placeholder="Email" className="p-2 mx-10 w-8/12 bg-gray-500 text-white rounded-lg" /><br />
        <input type="text" placeholder="password" className="p-2 mx-10 my-2 w-8/12 bg-gray-500 text-white rounded-lg" /><br />
        <button className="mx-10 my-2 p-2 text-white w-8/12 bg-red-600 rounded-lg font-bold">
         {isSignIn ? "Sign In" : "Sign Up"} 
        </button>
        <br/>
        <p className="text-white mx-10 cursor-pointer" onClick={handleIsSignin}>{isSignIn ? "new to netflix? signup now" : "Already User? Sign In"}</p> 
      </form>
    </div>
  );
};

export default Login;
