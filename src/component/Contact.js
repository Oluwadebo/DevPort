import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8" data-aos="fade-up">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 w-md-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
