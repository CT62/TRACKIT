import { UseState } from "react";
import Auth from "../components/Auth.tsx"

export default function Login(){
  return(
    <>
    <div className="min-h-screen bg-[#e8e8e8] flex items-center justify-center p-4">
        <Auth title="Login" link="token"/>
    </div>
    </>
  )
}
