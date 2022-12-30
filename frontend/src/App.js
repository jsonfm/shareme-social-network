import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Components
import { Layout } from "@/components/Layout";

// Pages
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { Login } from "@/pages/Login";
import { PinDetail } from "@/pages/PinDetail";
import { PinCreate } from "@/pages/PinCreate";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    if (!User) navigate('/login');
  }, []);

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_PROJECT_ID}`}>
      <QueryClientProvider client={queryClient}>
          <Layout>
              <Routes>
                <Route path="/" element={ <Home/>} />
                <Route path="/pin/detail/:id" element={<PinDetail/>} />
                <Route path="/pin/create/" element={<PinCreate />} />
                <Route path="/profile/:id" element={ <Profile/> } />
                <Route path="/login" element={ <Login/> } />
              </Routes>
          </Layout>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  )
}

export default App