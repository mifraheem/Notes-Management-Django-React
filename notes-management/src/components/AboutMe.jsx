import React from "react";
import myPic from "../../public/ifraheem.png";

export default function AboutMe() {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              <img src={myPic} width="100" className="rounded-circle" />
            </div>

            <div className="text-center mt-3">
              <span className="bg-secondary p-1 px-4 rounded text-white">
                Pro
              </span>
              <h5 className="mt-2 mb-0">M Ifraheem</h5>
              <span>Web Designer & Developer</span>

              <div className="px-4 mt-1">
                <p className="fonts">
                  Hi, I am Ifraheem, a motivated and detail-oriented individual
                  seeking new opportunities. possess strong problem-solving and
                  teamwork skills and am committed to delivering highquality
                  work. I am open to gaining experience and contributing to
                  various projects
                </p>
              </div>

              <ul className="social-list">
                <li>
                  <i className="fa fa-facebook"></i>
                </li>
                <li>
                  <i className="fa fa-dribbble"></i>
                </li>
                <li>
                  <i className="fa fa-instagram"></i>
                </li>
                <li>
                  <i className="fa fa-linkedin"></i>
                </li>
                <li>
                  <i className="fa fa-google"></i>
                </li>
              </ul>

              <div className="buttons">
                <button className="btn btn-outline-primary px-4">
                  <a
                    href="https://wa.link/y2dkf1"
                    className="text-reset text-decoration-none"
                  >
                    Message
                  </a>
                </button>
                <button className="btn btn-primary px-4 ms-3">
                  <a
                    href="https://mifraheem.github.io/"
                    className="text-white text-decoration-none"
                  >
                    Portfolio
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
