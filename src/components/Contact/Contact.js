import React, { Component } from 'react';
import Particle from "../Particle";
import "../../style.css";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
    return (

      <section className="contact-section my-5">
        {/* Form with header */}
        <div className="card">
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-lg-8">
              <div className="card-body form">
                {/* Header */}
                <h3 className="mt-4"><i className="fas fa-envelope pr-2" />Write to us:</h3>
                {/* Grid row */}
                <div className="row">
                  {/* Grid column */}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="form-contact-name" className="form-control" />
                      <label htmlFor="form-contact-name" className>Your name</label>
                    </div>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="form-contact-email" className="form-control" />
                      <label htmlFor="form-contact-email" className>Your email</label>
                    </div>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row */}
                {/* Grid row */}
                <div className="row">
                  {/* Grid column */}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="form-contact-phone" className="form-control" />
                      <label htmlFor="form-contact-phone" className>Your phone</label>
                    </div>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="form-contact-company" className="form-control" />
                      <label htmlFor="form-contact-company" className>Your company</label>
                    </div>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row */}
                {/* Grid row */}
                <div className="row">
                  {/* Grid column */}
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <textarea id="form-contact-message" className="form-control md-textarea" rows={3} defaultValue={""} />
                      <label htmlFor="form-contact-message">Your message</label>
                      <a className="btn-floating btn-lg blue">
                        <i className="far fa-paper-plane" />
                      </a>
                    </div>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row */}
              </div>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-lg-4">
              <div className="card-body contact text-center h-100 white-text">
                <h3 className="my-4 pb-2">Contact information</h3>
                <ul className="text-lg-left list-unstyled ml-4">
                  <li>
                    <p><i className="fas fa-map-marker-alt pr-2" />New York, 94126, USA</p>
                  </li>
                  <li>
                    <p><i className="fas fa-phone pr-2" />+ 01 234 567 89</p>
                  </li>
                  <li>
                    <p><i className="fas fa-envelope pr-2" />contact@example.com</p>
                  </li>
                </ul>
                <hr className="hr-light my-4" />
                <ul className="list-inline text-center list-unstyled">
                  <li className="list-inline-item">
                    <a className="p-2 fa-lg tw-ic">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="p-2 fa-lg li-ic">
                      <i className="fab fa-linkedin-in"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="p-2 fa-lg ins-ic">
                      <i className="fab fa-instagram"> </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Form with header */}
      </section>
    );
  };


export default Contact;