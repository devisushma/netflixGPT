import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
  return (
    <div className="absolute z-20 flex justify-between w-full">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className="w-15 h-12 m-10"
      />
      {user && (
        <>
        <div>
          <img
            src={user.photoURL}
            alt="user-logo"
            className="w-10 h-10 rounded-full absolute top-8 right-8"
          />
          <br />    
          <p>{user.displayName}</p>
          </div>
          <button
            className="text-white bg-red-600 rounded-md px-4 py-2 absolute top-10 right-24"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
