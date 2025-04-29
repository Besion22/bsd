import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/styles/contactForm.less";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };

    if (Object.values(newErrors).some((v) => v)) {
      setErrors(newErrors);
      Object.entries(newErrors).forEach(([field, isError]) => {
        if (isError)
          toast.error(
            `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
          );
      });
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_gbx1dsc",
        "template_q7ngeow",
        templateParams,
        "p2SvrFqBej6EjSCIV"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message.");
      });
  };

  return (
    <div className="contactFormContainer">
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
      <h1 className="contactFormTitle">SAY HELLO!</h1>
      <form
        className="contactForm"
        onSubmit={handleSubmit}
      >
        <div className="contactFormLine">
          <label className="contactFormLabel">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`contactFormInput ${errors.name ? "inputError" : ""}`}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="contactFormLine">
          <label className="contactFormLabel">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`contactFormInput ${errors.email ? "inputError" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="contactFormLine">
          <label className="contactFormLabel">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            className={`contactFormInput ${errors.message ? "inputError" : ""}`}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="contactFormButton"
        >
          Get In Touch
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
