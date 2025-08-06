import React from "react";
import { useForm } from "react-hook-form";
const Contact = () => {
   const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()
  // function delay(d)
  // {
  //   return new Promise((resolve, reject)=>{
  //     setTimeout(()=>{
  //       resolve()
  //     }, d*1000);
  //   })
  // }
  async function onSubmit(data)
  {
    let r = await fetch("http://localhost:3000/", {method: "POST", headers: {
      'Content-Type': 'application/json'  
    }, body: JSON.stringify(data)} )
    let res = await r.text()
    console.log(res)
    reset()
  }
  return (
  <section className="bg-blue-200 py-12 md:py-20 lg:py-24 py-[100px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Contact Us
          </h2>
          <p className="font-bold text-gray-600 max-w-md mx-auto text-lg">
            Have questions? We're here to help!
          </p>
        </div>
        <div className="bg-blue-50 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-lg">
                  Name
                </label>
                <input
                  {...register("name", {required: true})}
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-lg">
                  Email
                </label>
                <input
                  {...register("email", {required: true})}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-lg">
                Service Needed
              </label>
              <textarea
                {...register("service", {required: true, minLength: 15})}
                placeholder="Describe the service you need"
                rows="5"
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition min-h-[150px]"
              ></textarea>
            </div>
            {
              (errors.name || errors.email || errors.service?.type === 'required')&&<div className="text-red-400">Fill All Required fields</div>
            }
            {
              (errors.service?.type === 'minLength')&&<div className="text-red-400">Enter valid Length</div>
            }
            <div className="pt-2">
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;