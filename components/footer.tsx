"use client";

import Link from "next/link";
 
function Footer() {
   
    return (
       
         <footer className="bg-black text-white text-center py-4 mt-10">
       <p className="text-sm">
        &copy; {new Date().getFullYear()} MyFirst . All rights reserved.   CCreated by Dinesh
      </p>
     </footer>
    );

}

export default Footer;


