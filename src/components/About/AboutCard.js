import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinay Singh </span>
            from <span className="purple"> Dallas, Texas.</span>
            <br />I am a Machine Learning Engineer at Nordstrom and currently working with theor Recommendation Team.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Squash
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Cooking Indian Food
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Writting Tech Blogs
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Things of beauty is joy Forever"{" "}
          </p>
          <footer className="blockquote-footer">William Wordsworth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
