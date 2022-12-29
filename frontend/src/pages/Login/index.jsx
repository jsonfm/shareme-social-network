import { Link } from "react-router-dom";
import React from 'react';
import ShareVideo from "@/assets/videos/share.mp4";
import LogoWhite from "@/assets/images/logowhite.png";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { getUserFromResponse } from "@/utils/auth";
import { client } from "@/api/client";


export function Login() {
    const navigate = useNavigate();

    const loginSuccess = (response) => {
        const user = getUserFromResponse(response);
        localStorage.setItem('user', JSON.stringify(user));
        client.createIfNotExists(user).then(() => {
            navigate("/", { replace: true});
        })
    }

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
                    <Link to="/" className="">
                        <img
                            src={LogoWhite}
                            className="w-32 mx-auto mb-6"
                        />
                    </Link>
                    <GoogleLogin
                        onSuccess={loginSuccess}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
                </div>
            </div>
        </section>
    )
}