import React from 'react'





function About() {
  return (
    <div className="about-container container my-5">
      <div className="card about-card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <h2 className="card-title text-center mb-4">About Movie4U</h2>
          <p className="card-text">
            Welcome to <strong>Movie4U</strong>, your go-to destination for
            exploring the world of cinema. 🎬  
            We provide detailed information about the latest blockbusters,
            timeless classics, reviews, trailers, and upcoming releases.
          </p>
          <p className="card-text">
            Our mission is to connect movie lovers with the stories they cherish
            and help them discover new favorites. Whether you're into action,
            drama, comedy, or indie films, MovieHub has something for everyone.
          </p>
          <p className="card-text">
            Built with ❤️ using React and Bootstrap, our platform is designed to
            be fast, simple, and fun to use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
