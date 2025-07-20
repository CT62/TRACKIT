import { useEffect, useState } from 'react';

export default function Account() {
  const [user, setUser] = useState<any>(null);

  async function fetchUser() {
    const token = localStorage.getItem('access');
    if (!token) {
      console.error("No access token found");
      return;
    }

    try {
      const res = await fetch('http://127.0.0.1:8000/accounts/me/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const userData = await res.json();
      console.log(userData);
      setUser(userData); // Save user data to state
    } catch (err: any) {
      console.error('Failed to fetch user:', err.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-[#e8e8e8] flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Account</h1>
        {user ? (
          <div className="mt-4 text-lg text-black">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>First Name:</strong> {user.first_name}</p>
            <p><strong>Last Name:</strong> {user.last_name}</p>
          </div>
        ) : (
          <p className="mt-4 text-zinc-600">Loading user info...</p>
        )}
      </div>
    </div>
  );
}

