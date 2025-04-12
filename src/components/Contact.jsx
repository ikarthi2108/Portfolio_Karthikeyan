// src/components/Contact.jsx
import { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      "service_pq3nqei",
      "template_ff9aajm",
      form.current,
      "gRA-6d2knpljKso_J"
    )
    .then((result) => {
      toast.success('Message sent successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: darkMode ? "dark" : "light",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      toast.error('Failed to send message. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: darkMode ? "dark" : "light",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: 'Location',
      content: 'India',
    },
    {
      icon: <FaEnvelope size={20} />,
      title: 'Email',
      content: 'Karthikeyanzx21@gmail.com',
    },
    {
      icon: <FaPhone size={20} />,
      title: 'Phone',
      content: '+91 7010602615',
    },
  ];

  return (
    <section
      id="contact"
      className={`section-padding ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-50 text-gray-800'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Get In Touch</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Contact Information */}
          <div className="w-full lg:w-2/5">
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg p-6 h-full`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                Contact Info
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`${
                        darkMode ? 'bg-gray-700' : 'bg-blue-100'
                      } w-10 h-10 rounded-full flex items-center justify-center ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      } flex-shrink-0`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  Social Profiles
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/ikarthi2108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      darkMode
                        ? 'bg-gray-700 text-blue-400 hover:bg-gray-600'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    } p-3 rounded-full transition-colors`}
                    aria-label="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/karthikeyan-r-7baba2219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      darkMode
                        ? 'bg-gray-700 text-blue-400 hover:bg-gray-600'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    } p-3 rounded-full transition-colors`}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="mailto:Karthikeyanzx21@gmail.com"
                    className={`${
                      darkMode
                        ? 'bg-gray-700 text-blue-400 hover:bg-gray-600'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    } p-3 rounded-full transition-colors`}
                    aria-label="Email"
                  >
                    <FaEnvelope size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5">
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg p-6 h-full`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                Send Me a Message
              </h3>

              <form ref={form} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white'
                          : 'bg-white border-gray-300 text-gray-800'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white'
                          : 'bg-white border-gray-300 text-gray-800'
                      }`}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-800'
                    }`}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-800'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : darkMode
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center ">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </section>
  );
};

export default Contact;