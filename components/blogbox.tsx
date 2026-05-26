"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  content: string;
  featured_image: string;
}

export default function BlogBox() {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [visible, setVisible] = useState<number>(9);

  // Fetch Blogs
  useEffect(() => {

    async function fetchBlogs() {

      try {

        const res = await fetch("https://jsonfakery.com/blogs");

        const data = await res.json();

        setBlogs(data);

      } catch (error) {

        console.log(error);

      }

    }

    fetchBlogs();

  }, []);

  return (

    <section className="py-20">

      <div className="container mx-auto px-5">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.slice(0, visible).map((blog) => (

            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >

              {/* Image */}
              <img
                src={blog.featured_image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-5">

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {blog.summary}
                </p>

                {/* Read More */}
                <Link
                  href={`/blog/${blog.id}`}
                  className="bg-black text-white  text-sm px-4 py-2 rounded-full inline-block"
                >
                  Read More
                </Link>

              </div>

            </div>

          ))}

        </div>

        {/* Load More Button */}
        {visible < blogs.length && (

          <div className="text-center mt-12">

            <button
              onClick={() => setVisible(visible + 9)}
              className="bg-black text-white px-6 py-3 rounded-full"
            >
              Load More
            </button>

          </div>

        )}

      </div>

    </section>

  );

}