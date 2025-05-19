import { useState } from 'react';
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';

interface Props{
  link: string,
  title: string,
}

export default function Auth({link, title}: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function Authenticate(e) {
  e.preventDefault();

  if (!username || !password) {
    toast.error("Missing credentials.");
    return;
  }

  try {
    const response = await fetch(`http://127.0.0.1:8000/accounts/${link}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      toast.success("Login successful!");
    } else {
      toast.error(data.detail || "Login failed.");
    }
  } catch (err) {
    toast.error(`Login error: ${err.message}`);
  }
}


    return(
	    <form className="p-5 bg-gray-300 flex flex-col items-start justify-center gap-5 rounded border-2 border-gray-800 shadow-[4px_4px_0_0_rgba(50,50,50,1)] w-fit">
      <div className="text-gray-800 font-extrabold text-xl mb-6">
        Welcome,<br />
        <span className="text-gray-500 font-semibold text-lg">
	  {title} to continue</span>
      </div>

      <input
        type="username"
        placeholder="Username"
        name="username"
	onChange={(e) => setUsername(e.target.value)}
        className="w-[250px] h-10 rounded border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_rgba(50,50,50,1)] text-sm font-semibold text-gray-800 px-2.5 outline-none focus:border-blue-500 placeholder:text-gray-500 placeholder:opacity-80"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
	onChange={(e) => setPassword(e.target.value)}
        className="w-[250px] h-10 rounded border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_rgba(50,50,50,1)] text-sm font-semibold text-gray-800 px-2.5 outline-none focus:border-blue-500 placeholder:text-gray-500 placeholder:opacity-80"
      />
      {/*
      <div className="flex gap-5">
        <div className="cursor-pointer w-10 h-10 rounded-full border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_rgba(50,50,50,1)] flex items-center justify-center text-2xl text-gray-800 active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
          <FaApple />
        </div>
        <div className="cursor-pointer w-10 h-10 rounded-full border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_rgba(50,50,50,1)] flex items-center justify-center text-gray-800 active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
          <FaGoogle className="w-6 h-6" />
        </div>
        <div className="cursor-pointer w-10 h-10 rounded-full border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_rgba(50,50,50,1)] flex items-center justify-center text-gray-800 active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
          <FaFacebookF className="w-6 h-6" />
        </div>
      </div>
      */}

      <button
	onClick={Authenticate}
        className="mt-12 mx-auto w-[120px] h-10 rounded border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_rgba(50,50,50,1)] text-base font-semibold text-gray-800 cursor-pointer active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
      >
        Let&apos;s go →
      </button>
    </form>
    )
}
