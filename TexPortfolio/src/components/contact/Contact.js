import React, { useState, useRef } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

/*
  EMAIL SETUP INSTRUCTIONS (one-time, free):
  1. Go to https://www.emailjs.com and create a free account
  2. Add an Email Service (Gmail) → copy your SERVICE_ID
  3. Create an Email Template with these variables:
       {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}
     → copy your TEMPLATE_ID
  4. Go to Account → API Keys → copy your PUBLIC_KEY
  5. Replace the three placeholder strings below with your real values
*/
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";    // e.g. "AbCdEfGhIjKlMnOp"

const Contact = () => {
  const formRef = useRef(null);
  const [username, setUsername]       = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail]             = useState("");
  const [subject, setSubject]         = useState("");
  const [message, setMessage]         = useState("");
  const [errMsg, setErrMsg]           = useState("");
  const [successMsg, setSuccessMsg]   = useState("");
  const [sending, setSending]         = useState(false);

  const emailValidation = () =>
    String(email).toLowerCase().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

  const handleSend = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");

    if (!username)          return setErrMsg("Name is required!");
    if (!phoneNumber)       return setErrMsg("Phone number is required!");
    if (!email)             return setErrMsg("Email is required!");
    if (!emailValidation()) return setErrMsg("Invalid email format!");
    if (!subject)           return setErrMsg("Subject is required!");
    if (!message)           return setErrMsg("Message is required!");

    // Check if EmailJS has been configured
    if (
      EMAILJS_SERVICE_ID  === "YOUR_SERVICE_ID"  ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY  === "YOUR_PUBLIC_KEY"
    ) {
      // Fallback: open mail client so messages still get through
      const mailto = `mailto:yytbrayan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `From: ${username}\nPhone: ${phoneNumber}\nEmail: ${email}\n\n${message}`
      )}`;
      window.location.href = mailto;
      setSuccessMsg(`Opening your mail client, ${username}! Replace the EmailJS keys to enable in-page sending.`);
      return;
    }

    setSending(true);
    try {
      // Dynamically import EmailJS so the bundle still works without it installed
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSuccessMsg(`Message sent, ${username}! I'll get back to you soon.`);
      setUsername(""); setPhoneNumber(""); setEmail("");
      setSubject(""); setMessage("");
    } catch (err) {
      setErrMsg("Failed to send. Please email yytbrayan@gmail.com directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full flex flex-col lgl:flex-row justify-between">
        <ContactLeft />
        <div className="w-full lgl:w-[60%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
          <form ref={formRef} onSubmit={handleSend} className="w-full flex flex-col gap-6">

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
                  name="from_name"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className={`contactInput ${errMsg.includes("Name") && "outline-designColor"}`}
                  type="text"
                />
              </div>
              <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                <input
                  name="phone"
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
                name="from_email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`contactInput ${errMsg.includes("email") && "outline-designColor"}`}
                type="email"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
              <input
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={`contactInput ${errMsg.includes("Subject") && "outline-designColor"}`}
                type="text"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
              <textarea
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={`contactTextArea ${errMsg.includes("Message") && "outline-designColor"}`}
                rows="8"
              ></textarea>
            </div>

            <div className="w-full">
              <button
                type="submit"
                disabled={sending}
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
