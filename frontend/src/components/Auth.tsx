import { useState } from 'react';
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';

interface Props {
  link: string;
  title: string;
}

export default function Auth({ link, title }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');


  async function Authenticate(e: React.FormEvent) {
    e.preventDefault();
    if (!username || !password) {
      toast.error('Missing credentials.');
      return;
    }
try {
 const isLogin = link ==="token";
 const body = isLogin 
   ? { username, password }
   : { username, password, first_name:firstName, last_name:lastName };
   
 console.log(body)
 const response = await fetch(`http://127.0.0.1:8000/accounts/${link}/`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(body),
 });
 const data = await response.json();
 if (response.ok) {
   localStorage.setItem('access', data.access);
   localStorage.setItem('refresh', data.refresh);
   if (isLogin) {
     toast.success('Login successful!');
   } else {
     toast.success('Signup successful!');
   }
 } else {
   if (isLogin) {
     toast.error(data.detail || 'Login failed.');
   } else {
     toast.error(data.detail || 'Signup failed.');
   }
 }
} catch (err: any) {
 if (isLogin) {
   toast.error(`Login error: ${err.message}`);
 } else {
   toast.error(`Signup error: ${err.message}`);
 }
}
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100 fixed inset-0 shadow-md">
      <form
        onSubmit={Authenticate}
        className="p-8 bg-white rounded-2xl border border-zinc-700 shadow-xl flex flex-col gap-5 w-full max-w-md"
      >
        <div className="text-black font-extrabold text-2xl mb-4 leading-tight">
          Welcome,
          <br />
          <span className="text-zinc-400 font-medium text-base">
            {title} to continue
          </span>
        </div>
	
        {link === "signup" && (
	<div className="flex gap-3">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full h-11 rounded-md border border-zinc-700 bg-gray-100 text-sm text-black px-3 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white transition"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full h-11 rounded-md border border-zinc-700 bg-gray-100 text-sm text-black px-3 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white transition"
        />


	</div>)
        }
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full h-11 rounded-md border border-zinc-700 bg-gray-100 text-sm text-black px-3 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-11 rounded-md border border-zinc-700 bg-gray-100 text-sm text-black px-3 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white transition"
        />
        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-md bg-gray-300 text-black font-semibold hover:shadow-[0_0_10px_2px_white] hover:-translate-y-1 transition-all"
        >
          Let&apos;s go →
        </button>
      </form>
    </div>
  );
}
