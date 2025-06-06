import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () =>
    String(email).toLowerCase().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

  const handleSend = (e) => {
    e.preventDefault();

    if (!username) return setErrMsg("Username is required!");
    if (!phoneNumber) return setErrMsg("Phone number is required!");
    if (!email) return setErrMsg("Email is required!");
    if (!emailValidation()) return setErrMsg("Invalid email format!");
    if (!subject) return setErrMsg("Subject is required!");
    if (!message) return setErrMsg("Message is required!");

    setSuccessMsg(`Thank you ${username}, your message has been sent!`);
    setErrMsg("");

    setUsername("");
    setPhoneNumber("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full flex flex-col lgl:flex-row justify-between">
        <ContactLeft />
        <div className="w-full lgl:w-[60%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
          <form onSubmit={handleSend} className="w-full flex flex-col gap-6">
            {errMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-center text-orange-500 animate-bounce">
                {errMsg}
              </p>
            )}
            {successMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-center text-green-500 animate-bounce">
                {successMsg}
              </p>
            )}

            <div className="w-full flex flex-col lgl:flex-row gap-10">
              <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className={`contactInput ${errMsg.includes("Username") && "outline-designColor"}`}
                  type="text"
                />
              </div>
              <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className={`contactInput ${errMsg.includes("Phone") && "outline-designColor"}`}
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`contactInput ${errMsg.includes("email") && "outline-designColor"}`}
                type="email"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={`contactInput ${errMsg.includes("Subject") && "outline-designColor"}`}
                type="text"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={`contactTextArea ${errMsg.includes("Message") && "outline-designColor"}`}
                rows="8"
              ></textarea>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
