import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Components
import { Layout } from "@/components/Layout";

// Pages
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { Login } from "@/pages/Login";
import { PinDetail } from "@/pages/PinDetail";



function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <BrowserRouter>
        <Layout>
            <Routes>
              <Route path="/" element={ <Home/>} />
              <Route path="/pindetail/:id" element={<PinDetail/>} />
              <Route path="/profile/:id" element={ <Profile/> } />
              <Route path="/login" element={ <Login/> } />
            </Routes>
        </Layout>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App