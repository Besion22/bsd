import "../../assets/styles/contactForm.less";

const ContactForm = () => {
  return (
    <div className="contactFormContainer">
      <h1 className="contactFormTitle">SAY HELLO!</h1>
      <div className="contactForm">
        <div className="contactFormLine">
          <label className="contactFormLabel">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="contactFormInput"
          ></input>
        </div>

        <div className="contactFormLine">
          <label className="contactFormLabel">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="contactFormInput"
          ></input>
        </div>

        <div className="contactFormLine">
          <label className="contactFormLabel">Message</label>
          <textarea
            placeholder="Message"
            className="contactFormInput"
          ></textarea>
        </div>

        <button className="contactFormButton">Get In Touch</button>
      </div>
    </div>
  );
};

export default ContactForm;
