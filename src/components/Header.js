import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { netflix_logo } from "../utils/constants";
import { handleShowGptSearch } from "../utils/gptSearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const { showGptSearch } = useSelector((state) => state.gptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    dispatch(handleShowGptSearch());
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between items-center w-full">
      <img src={netflix_logo} className="w-44" alt="Netflix Logo" />
      {user && (
        <div className="flex p-2 items-center gap-4">
          {showGptSearch && (
            <select className="p-2 m-2 bg-gray-900 text-white rounded-lg opacity-90 hover:opacity-100 transition-opacity">
              {/* Options could serve language selection later, keeping placeholder for alignment if needed, or remove if unused */}
              <option value="en">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-colors duration-300 font-semibold shadow-md"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            src={user.photoURL}
            alt="user-logo"
            className="w-10 h-10 rounded-md ring-2 ring-gray-700"
          />
          <button
            onClick={handleSignout}
            className="px-2 py-1 text-white hover:text-red-500 font-bold transition-colors duration-200"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
