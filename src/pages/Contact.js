import { useForm, ValidationError } from '@formspree/react';

import classes from '../components/Next.module.css';
import './Page.css';
import { Link } from 'react-scroll';

import Back from '../components/Back.js';

function ContactForm() {
  const [state, handleSubmit] = useForm("xzbyjybk");
  if (state.succeeded) {
      return (
        <div className="contact" id="contact">
        <div className="text">
                <h2>CONTACT US</h2>
                <p>We'll get back to you shortly!</p>
                <Back></Back>
        </div>
        <div className="form">
        <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="E-Mail ID"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="send" type="submit" disabled={state.submitting}>
        Sent!
      </button>
      </form>
      </div>
      </div>
      )
  }
  return (
      <div className="contact" id="contact">
        <div className="text">
                <h2>CONTACT US</h2>
                <p>Slide into our DMs for anything you wanna know</p>
                <Link
                    activeClass="active"
                    to="features"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                      <Back />
                  </Link>
            </div>
            <div className="form">
            <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="E-Mail ID"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="send" type="submit" disabled={state.submitting}>
        Send
      </button>
      </form>
      </div>
      </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}
export default App;