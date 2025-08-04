import React from 'react';
import Blog from './Blog';
const blogs = [
  {
    title: "Sigma Web Development Course",
    excerpt: "Learn how to build modern web devlopment, Perfect for beginners",
    date: "Last Updated on 9 Nov 2024",
    author: "Harry(@CodeWithHarry)",
    url: "https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=loPtPIRlqcmvSaRM"
  },
  {
    title: "Fundamentals of C Language",
    excerpt: "Learn concepts of C language along with different problems, Perfect for beginners in programming",
    date: "Last Updated 3 years Ago",
    author: "Jenny Ma'am(@Jenny's Lectures CS IT)",
    url: "https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&si=XiwNQ7vxwaXKpgdz"
  },
    {
    title: "OOP IN JAVA",
    excerpt: "Learn concepts of Object Oriented Paradigm in java, Perfect for beginners in OOP",
    date: "Last Updated 3 years Ago",
    author: "Kunal Kushwaha",
    url: "https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&si=w78v4hgv1hLy-VB9"
  },
  {
    title: "Python",
    excerpt: "Learn concepts of python and it's versatile use in computer industry, Perfect for beginners",
    date: "Last Updated on July 2025",
    author: "Angela Yu(@Udemy)",
    url: "https://www.udemy.com/share/103IHM3@AX8TJVwMGpiBTSuNnaQEJ4dTjrE7flamysDz7FPTv6px89xx1UAHUejgKVILmWon9A==/"
  }

];

const BlogSection = () => {
  return (
    <section className="bg-blue-200 py-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-10">Latest Blogs</h2>      
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Blog blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
