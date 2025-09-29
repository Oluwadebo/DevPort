import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const msg = form.message.value.trim();

    if (!name || !email || !msg) {
      setMessage('Please fill in all fields.');
      setMessageType('error');
      return resetMessage();
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return resetMessage();
    }

    setLoading(true);

    try {
      const formData = new FormData(form);
      const response = await fetch('https://formspree.io/f/mwprvgbk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setMessage('Your message has been sent successfully!');
        setMessageType('success');
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
          setMessage(data.errors.map((err) => err.message).join(', '));
        } else {
          setMessage('Failed to send message. Please try again later.');
        }
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.');
      setMessageType('error');
    }

    setLoading(false);
    resetMessage();
  };

  const resetMessage = () => {
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 10000);
  };

  return (
    <section id="contact" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8" data-aos="fade-up">
            {message && (
              <div
                className={`alert ${
                  messageType === 'success' ? 'alert-success' : 'alert-danger'
                } text-center`}
                role="alert"
                aria-live="polite"
              >
                {message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 w-md-auto"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
