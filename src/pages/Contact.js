import { useState } from "react";
import "./Contact.css";
import * as FiIcons from "react-icons/fi";
import { IconContext } from "react-icons";
import { useEffect } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(setSubmitted(true), 500);
  };

  useEffect(() => {
    setForm({ name: "", email: "", message: "" });
  }, [submitted]);

  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/e496dc80-3fc6-11ed-a06d-cdea678ac864";

  return (
    <div className='contact'>
      <h1>contact.</h1>

      <p>Reach out to me, I'm constantly active on social media.</p>
      <form
        action={FORM_ENDPOINT}
        method='POST'
        target='_blank'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='name'
          className='name'
          name='name'
          onChange={handleForm}
          value={form.name}
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='email'
          onChange={handleForm}
          value={form.email}
        />
        <textarea
          name='message'
          id='message'
          placeholder='message'
          onChange={handleForm}
          value={form.message}
        />
        <button>Send Message</button>

        <IconContext.Provider value={{ className: "social-icons" }}>
          <ul className='social'>
            <li>
              <a
                href='https://twitter.com/leoajr'
                target='_blank'
                rel='noreferrer'
              >
                <FiIcons.FiTwitter />
              </a>
            </li>
            <li>
              <a
                href='https://linkedin.com/in/obinna-achazie'
                target='_blank'
                rel='noreferrer'
              >
                <FiIcons.FiLinkedin />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/acha-jr'
                target='_blank'
                rel='noreferrer'
              >
                <FiIcons.FiGithub />
              </a>
            </li>
            <li>
              <a href='mailto:achazieobinna@gmail.com'>
                <FiIcons.FiMail />
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </form>
    </div>
  );
};

export default Contact;
