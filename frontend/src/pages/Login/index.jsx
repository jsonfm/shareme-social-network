import React from 'react'
import ShareVideo from "@/assets/videos/share.mp4";
import LogoWhite from "@/assets/images/logowhite.png";
import { GoogleLogin } from '@react-oauth/google';


export function Login() {
  return (
    <section className="h-screen relative">
        <video
            src={ShareVideo}
            type="video/mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            controls={false}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <img
                    src={LogoWhite}
                    className="w-32 mx-auto mb-4"
                />
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />;
            </div>
        </div>
    </section>
  )
}