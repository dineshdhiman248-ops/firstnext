"use client";

import Link from "next/link";
 
function Footer() {
   
    return (
       
         <footer className="bg-black text-white text-center py-4 mt-10">
       <p className="text-sm">
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved. Dinesh kumar
      </p>
     </footer>
    );

}

export default Footer;


