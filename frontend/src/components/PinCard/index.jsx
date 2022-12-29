import { Link } from "react-router-dom";
import React from 'react'


export function PinCard() {
  return (
    <article className="mx-auto my-6">
      <Link
        to="/pindetail/1"
      >
        <img
          src="https://images.unsplash.com/photo-1672108097936-27d9f3bf347c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          className="rounded-lg"
        />
        </Link>
    </article>
  )
}
