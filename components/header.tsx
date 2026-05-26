"use client";

import Link from "next/link";
import { useState } from "react";


function Header() {
   
    const[mopen, setmopen] = useState(false);

    return (
       
        <header className="bg-black text-white sticky top-0 z-50 text-white shadow-md">
         <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">MyBlog</h2>
        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </nav>
        <button className="md:hidden text-2xl"  onClick={() => setmopen(!mopen)}>☰ </button>
      </div>
      {mopen && ( <div className="md:hidden flex flex-col gap-4 px-5 pb-5">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </div>
      )}

    </header>
    );

}

export default Header;


