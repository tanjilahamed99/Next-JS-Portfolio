"use client";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-[#55e6a5]/10 to-white flex flex-col items-center justify-center p-6 space-y-12">
      {/* Header Section */}
      <header className="w-full text-center">
        <h1 className="text-5xl font-extrabold text-[#55e6a5] mb-4 animate-pulse">Get in Touch</h1>
        <p className="text-gray-700 text-lg">I'd love to hear from you! Feel free to drop a message.</p>
      </header>

      {/* Contact Information Section */}
      <section className="max-w-4xl w-full bg-white shadow-xl rounded-xl p-8 border-t-4 border-[#55e6a5]">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
        <p className="text-gray-600 mb-6 text-lg">
          You can reach me through the following methods:
        </p>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center">
            <span className="text-[#55e6a5] font-bold">Email:</span>
            <span className="ml-3 text-gray-800">tanjl.ahamed@example.com</span>
          </li>
          <li className="flex items-center">
            <span className="text-[#55e6a5] font-bold">Phone:</span>
            <span className="ml-3 text-gray-800">+123 456 7890</span>
          </li>
          <li className="flex items-center">
            <span className="text-[#55e6a5] font-bold">Address:</span>
            <span className="ml-3 text-gray-800">123 Street, City, Country</span>
          </li>
        </ul>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl w-full bg-white shadow-xl rounded-xl p-8 border-t-4 border-[#55e6a5]">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Me a Message</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 mb-2 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#55e6a5] shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#55e6a5] shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#55e6a5] shadow-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#55e6a5] to-[#3cbf88] text-white font-bold py-3 px-6 rounded-lg hover:from-[#3cbf88] hover:to-[#55e6a5] transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-600 mt-12">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tanjl Ahamed. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;