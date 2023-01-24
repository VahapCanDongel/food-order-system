import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import LoginImage from "../asset/login_image.svg";
export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) return;
    if (user) {
      route.push("/");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div className="w-full h-screen flex justify-center items-center gap-20">
      <Image src={LoginImage} width="350px" height="300px" />

      <div className="w-[700px] h-[700px] p-4 flex flex-col justify-center items-center gap-20">
        <div className="text-[50px]">
          Manage Your Takeaway Orders On The Web, Anywhere!
        </div>
        <div className="text-3xl mr-auto">Join Today!</div>
        <div className="text-2xl">Sign in with one of the providers</div>
        <button
          onClick={GoogleLogin}
          className="bg-black text-white p-3 rounded-md flex gap-3 w-[340px] justify-center items-center"
        >
          <FcGoogle className="text-2xl" />
          Google
        </button>
      </div>
    </div>
  );
}
