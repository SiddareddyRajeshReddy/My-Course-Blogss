import React from 'react';
const Blog =({blog, index}) => {
    return(
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
             <h3 className="text-xl font-semibold text-blue-600 mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">By {blog.author} | {blog.date}</p>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              <a target='_BLANK' href={blog.url}className="text-blue-600 font-medium hover:underline">Read more →</a>
            </div>
    )
};
export default Blog