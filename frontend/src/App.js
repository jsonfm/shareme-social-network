import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { Login } from "@/pages/Login";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <BrowserRouter>
        <Layout>
            <Routes>
              <Route path="/" element={ <Home/>} />
              <Route path="/profile/:id" element={ <Profile/> } />
              <Route path="/login" element={ <Login/> } />
            </Routes>
        </Layout>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App