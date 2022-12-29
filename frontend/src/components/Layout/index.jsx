import React from 'react'
import { Header } from "@/components/Header";


export function Layout({ children }) {
  return (
    <>
        <Header/>
        <main>
        {children}
        </main>
    </>
  )
}