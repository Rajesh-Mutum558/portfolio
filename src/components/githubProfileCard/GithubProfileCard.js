import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo, isHireable } from "../../portfolio";
import { Fade } from "react-reveal";

export default function GithubProfileCard({ prof }) {
  if (isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        {/* Contact Me Title */}
        <h1 className="prof-title">Contact Me ☎️</h1>
        
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <p>
                Phone:{" "}
                <a href={`tel:${contactInfo.number}`} className="contact-info-link">
                  {contactInfo.number}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${contactInfo.email_address}`} className="contact-info-link">
                  {contactInfo.email_address}
                </a>
              </p>
            </div>

            {/* Open for Opportunities */}
            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: {prof.hireable}
              </span>
            </div>
            <SocialMedia />
          </div>
          
          {/* Profile Image */}
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
