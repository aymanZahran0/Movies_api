import React from 'react'



export default function Contacts() {

  return (
    <div className="contact-container container my-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <h2 className=" text-center mb-4">Contact Us</h2>
          <p className="text-center mb-4">
            Have questions, suggestions, or feedback about MovieHub?  
            We'd love to hear from you! 🎬
          </p>

          <form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-warning w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

