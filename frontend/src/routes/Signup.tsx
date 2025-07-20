import { useState } from 'react';
import Auth from "../components/Auth.tsx"

export default function Signup() {
   return(
   <div className="min-h-screen bg-[#e8e8e8] flex items-center justify-center p-4">
        <Auth title="Sign up" link="signup"/>
    </div>
   )
}
