import React from "react";
import catdog from "../../assets/catdog.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="contact-container">
        <div className="pet-container">
          <img src={catdog} alt="" />
        </div>

        <form>
          <h1>Contact Us</h1>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="body">Message</label>
            <textarea name="" id="body" cols="30" rows="10"></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
