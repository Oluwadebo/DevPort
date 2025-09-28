import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* <section className="bg-light text-dark py-5" id="contact">
        <div className="container text-center">
          <h2 className="mb-4 ">Contact Me</h2>
          <p>
            Email:{' '}
            <a href="mailto:ogunweoluwadebo1@gmail.com">
              ogunweoluwadebo1@gmail.com
            </a>
          </p>
          <p>Phone: 08148624416 | 09044796430</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark me-2"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            LinkedIn
          </a>
        </div>
      </section> */}
      <section id="contact" className="py-5 bg-light">
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
                <button
                  type="submit"
                  className="btn btn-primary w-100 w-md-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
