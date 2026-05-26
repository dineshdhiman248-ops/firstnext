import Link from "next/link";

// Blog Type
interface Blog {
  id: number;
  title: string;
  content: string;
  featured_image: string;
}

// Fetch Single Blog
async function getBlog(id: string): Promise<Blog | undefined> {

  const res = await fetch("https://jsonfakery.com/blogs", {
    cache: "no-store",
  });

  const blogs: Blog[] = await res.json();

  return blogs.find(
    (blog) => blog.id.toString() === id
  );

}

// Page
export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const blog = await getBlog(slug);

  // Blog Not Found
  if (!blog) {

    return (

      <div className="h-screen flex items-center justify-center">

        <h2 className="text-4xl font-bold">
          Blog Not Found
        </h2>

      </div>

    );

  }

  return (

    
<section className="py-20">
  <div className="container  mx-auto
   px-5">

    <Link
      href="/"
      className="inline-block mb-8 text-black font-medium hover:underline"
    >
      ← Back To Blogs
    </Link>

    <img
      src={blog.featured_image}
      alt={blog.title}
      className="w-full h-[400px] object-cover rounded-3xl"
    />

    <h1 className="text-5xl font-bold text-black main-heading">
      {blog.title}
    </h1>

    <p className="text-lg  text-black com-pad">
      {blog.subtitle}
    </p>

    <p className="text-lg text-black pt-6">
      {blog.summary}
    </p>

    <p className="text-lg leading-9 text-black pt-8">
  {blog.main_content
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()}
</p>

  </div>
</section>

  );

}