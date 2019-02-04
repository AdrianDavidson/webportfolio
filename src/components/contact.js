import React, { Component } from 'react';
import { Form } from 'reactstrap';

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Send me an e-mail!</h1>
                <div className="contact-grid">
                    <div className="form-box">
                        <Form action="https://formspree.io/adrian.davidson60@gmail.com" method="POST" class="cf">
                            <div class="half left cf">
                                <input type="text" id="input-name" placeholder="Enter your name"></input>
                                <input type="email" id="input-email" placeholder="Please enter your email address"></input>
                                <input type="text" id="input-subject" placeholder="Subject"></input>
                            </div>
                            <div class="half right cf">
                                <textarea name="message" type="text" id="input-message" placeholder="Send me a message."></textarea>
                            </div>
                            <div id="subBut">
                                <input type="submit" value="Submit" id="input-submit"></input>
                            </div>
                        </Form>
                    </div>
                </div>

            </div>
        )

    }
}
export default Contact;