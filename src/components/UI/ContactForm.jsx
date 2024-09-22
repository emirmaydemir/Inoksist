import { Form, FormGroup, Input } from "reactstrap";
import Spinner from "react-bootstrap/Spinner"; // Yüklenme efekti için

const ContactForm = ({
  formData,
  handleChange,
  sendEmail,
  contactContent,
  loading,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <h6 className="fw-bold mb-4 contact-form-title">
        {contactContent.formTitle}
      </h6>
      <Form
        className="d-flex flex-column justify-content-between"
        style={{ height: "100%" }}
        onSubmit={sendEmail}
      >
        <FormGroup className="contact__form">
          <Input
            placeholder={contactContent.formFields.name}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input
            placeholder={contactContent.formFields.email}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input
            placeholder={contactContent.formFields.company}
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input
            placeholder={contactContent.formFields.phone}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input
            placeholder={contactContent.formFields.subject}
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="contact__form">
          <textarea
            rows="5"
            placeholder={contactContent.formFields.message}
            style={{
              width: "100%",
              minHeight: "150px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              resize: "vertical",
            }}
            className="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </FormGroup>
        <button className="contact__btn" type="submit" disabled={loading}>
          {loading ? (
            <Spinner animation="border" size="sm" />
          ) : (
            contactContent.submitButtonText
          )}
        </button>
      </Form>
    </div>
  );
};
export default ContactForm;
