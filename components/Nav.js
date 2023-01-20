import Link from "next/link";
export default function Navigation() {
  return (
    <div>
      <div className="w-full h-[80px] bg-blue-900 flex justify-between items-center p-3">
        <Link href="/">
          <button className="text-white text-lg">Food Order System</button>
        </Link>

        <ul className="flex gap-3 text-white">
          <Link href="/dashboard" className="flex justify-center items-center">
            <svg
              width="46"
              height="46"
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] m-2"
            >
              <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4Zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7Zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path>
            </svg>
            Dashboard
          </Link>
          <Link href="/order" className="flex justify-center items-center">
            <svg
              width="46"
              height="46"
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] m-2"
            >
              <path d="M21 9.004h-1.42l-3.712-6.496-1.736.992 3.145 5.504H6.723L9.869 3.5l-1.737-.992L4.42 9.004H3a1.001 1.001 0 0 0-.965 1.263L4.834 20.53a2.005 2.005 0 0 0 1.93 1.473h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A1 1 0 0 0 21 9.004Zm-3.764 11v1-1H6.764l-2.454-9h15.38l-2.454 9Z"></path>
              <path d="M9 13h2v5H9v-5Zm4 0h2v5h-2v-5Z"></path>
            </svg>
            Order
          </Link>
          <Link href="/admin" className="flex justify-center items-center">
            <svg
              width="46"
              height="46"
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] m-2"
            >
              <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2ZM4 19V5h7v14H4Zm9 0V5h7l.001 14H13Z"></path>
              <path d="M15 7h3v2h-3V7Zm0 4h3v2h-3v-2Z"></path>
            </svg>
            Admin
          </Link>
        </ul>
      </div>
    </div>
  );
}
