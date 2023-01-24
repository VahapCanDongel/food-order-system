import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export default function Navigation() {
  const [user, loading] = useAuthState(auth);
  const signOutUser = () => signOut(auth);

  return (
    <div>
      <div className="w-full h-[80px] shadow-lg flex justify-between items-center p-3 bg-sky-900">
        <Link href="/" className="flex justify-center items-center gap-8">
          <button className="text-white text-3xl">Food Order System</button>
          {user && (
            <div className="flex text-white">
              <div>Welcome {user.displayName}</div>
            </div>
          )}
        </Link>

        <ul className="flex gap-4 text-white">
          {user ? (
            <div className="flex gap-4">
              <Link
                href="/dashboard"
                className="flex justify-center items-center"
              >
                Dashboard
              </Link>
              <Link href="/order" className="flex justify-center items-center">
                Order
              </Link>
              <Link href="/admin" className="flex justify-center items-center">
                Admin
              </Link>
              <Link
                href="/"
                className="w-[100px] bg-red-400 p-2 rounded-md text-center"
                onClick={signOutUser}
              >
                Sign out
              </Link>
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="w-[100px] bg-blue-300 p-2 rounded-md text-center text-white"
            >
              Sign In
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
