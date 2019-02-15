import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>CONTACT</h2>
        <h3>Aenean commodo ligula eget dolor aenean massa</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
        <form action="#" method="post">
          <fieldset>
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your full name" />
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
            <label for="message">Message:</label>
            <textarea id="message" placeholder="What's on your mind?" />
            <input type="submit" value="Send message" />
          </fieldset>
        </form>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetuer.</li>
          <li>Aenean commodo ligula eget dolor.</li>
          <li>Aenean massa cum sociis natoque penatibus.</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
