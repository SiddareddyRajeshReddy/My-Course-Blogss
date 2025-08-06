import React from "react";

const Home = () => {
    return (
        <div className="bg-[url(/background.png)] bg-blue-200 py-[100px] min-h-screen py-12 px-4 bg-center bg-cover">
            
            <div className="sm:px-6 lg:px-8 cursor-pointer">
               <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h1>
                <div className="flex justify-center mb-10">
                    <div className="relative group">
                        <img
                            src="/profile.jpg"
                            alt="Siddareddy Rajesh Reddy"
                            className="w-56 h-56 rounded-full object-cover border-4 border-white shadow-xl transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 rounded-full bg-gray-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 hover:underline">Siddareddy Rajesh Reddy</h2>
                    <p className="text-xl text-blue-600 font-medium mb-6">Pre-Final Year Student</p>

                    <div className="space-y-4 text-gray-800 font-semibold text-lg mb-8">
                        <p>
                            <span className="font-bold">Education:</span> Computer Science and Engineering (2023-2027)
                        </p>
                        <p>National Institute of Technology, Sikkim</p>
                        <p>
                            <span className="font-bold">Involvements:</span> DevCans, Web Development Cell
                        </p>
                    </div>
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">About this page</h1>
                    <div className="max-w-2xl mx-auto text-center mb-12 font-semibold">
                        <p className="text-lg text-gray-950">
                            This page showcases my academic journey, technical involvements, and ongoing learning path
                            as a Computer Science student at NIT Sikkim. Below you'll find my educational background,
                            organizational affiliations, and the resources that fuel my passion for technology and
                            web development.
                        </p>
                    </div>

                    <div className="flex justify-center gap-4 mt-8 flex-wrap">
                        <a
                            href="https://www.linkedin.com/in/s-rajesh-reddy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-400 text-white px-5 py-3 rounded-lg hover:bg-blue-500 transition-all duration-200 shadow hover:shadow-md"
                        >
                            <img
                                src="/LinkedInIcon.svg"
                                alt="LinkedIn"
                                className="w-5 h-5"
                            />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/SiddareddyRajeshReddy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-900 transition-all duration-200 shadow hover:shadow-md"
                        >
                            <img
                                src="/GitHubIcon.svg"
                                alt="GitHub"
                                className="w-5 h-5 invert-[1]"
                            />
                            GitHub
                        </a>
                        <a
                            href="https://vercel.com/siddareddyrajeshreddys-projects"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 shadow hover:shadow-md"
                        >
                            <img
                                src="/VercelIcon.svg"
                                alt="Vercel"
                                className="w-5 h-5 invert-[1]"
                            />
                            Vercel
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-950 mb-4">Contact Me</h3>
                    <div className="flex flex-col justify-center items-center space-y-2 text-gray-800 font-semibold">
                        <a
                            href="mailto:b230065@nitsikkim.ac.in"
                            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                        > <img
                                src="/EmailIcon.svg"
                                alt="Email"
                                className="w-5 h-5 opacity-[60%] hover:opacity-[100%]"
                            />
                            b230065@nitsikkim.ac.in
                        </a>
                        <a
                            href="tel:+918522840158"
                            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                        >
                            <img
                                src="/PhnIcon.svg"
                                alt="Email"
                                className="w-5 h-5 opacity-[60%] hover:opacity-[100%]"
                            />
                            +91 8522840158
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
