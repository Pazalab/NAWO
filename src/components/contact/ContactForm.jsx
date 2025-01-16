
const ContactForm = () => {
  return (
    <div className="contact-form">
                <h3>Drop us a Message</h3>
                <p>We’d love to hear from you! Share your thoughts, questions, or feedback with us, and we’ll get back to you as soon as we can.</p>

                <form>
                          <div className="form-row">
                                     <input type="text" className="form-control" placeholder="Your name*" />
                          </div>
                          <div className="form-row">
                                  <input type="email" className="form-control" placeholder="Your email*" />
                          </div>
                          <div className="form-row">
                                     <input type="text" className="form-control" placeholder="Subject" />
                          </div>
                          <div className="form-row">
                                    <textarea placeholder="Your Message*"></textarea>
                          </div>

                          <button type="submit" className="form-btn">Send Message</button>
                </form>
    </div>
  )
}

export default ContactForm