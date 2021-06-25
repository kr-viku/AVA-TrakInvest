import React from "react";
import emailjs from "emailjs-com";
import Modal from "./Common/modal/index";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        name: "",
        subject: "",
        phone: "",
        email: "",
      },
      show: false,
    };
  }

  handleResetForm = () => {
    // console.log("lolololo");
    this.form.reset(); // resets "username" field to "admin"
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length === 0 ? "Name is not empty" : "";
        break;
      case "subject":
        errors.subject = value.length < 5 ? "Subject must be 5 characters" : "";
        break;
      case "phone":
        errors.phone = value.length < 5 ? "phone is not empty" : "";
        break;
      case "email":
        errors.email = value.length < 5 ? "Subject is not empty" : "";
        let appos = value.indexOf("@");
        let dots = value.lastIndexOf(".");

        if (appos < 1 || dots - appos < 2) {
          errors.email = "please enter valid email";
        }

        break;

      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // if (
    //   this.state.errors.name.length === 0 &&
    //   this.state.errors.subject.length === 0 &&
    //   this.state.errors.phone.length === 0 &&
    //   this.state.errors.email.length === 0
    // ) {
    //   alert("form is valid");
    // } else {
    //   alert("form is invalid");
    // }
    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };
    // console.log(templateParams);
    emailjs
      .send(
        "service_ila7yuo",
        "template_0goxgwa",
        templateParams,
        "user_U8TuceH9iOdavANtmrTIu"
      )
      .then(
        (result) => {
          console.log(result.text);
          this.handleResetForm();
          this.setState({ show: true });
        },
        (error) => {
          console.log(error.text);
          alert("form is invalid");
        }
      );
  };

  showModal = () => {
    this.setState({ show: true });
  };

  // Method to hide modal, activated by handleClose prop on the <Modal>
  hideModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <form
          onSubmit={this.submitHandler.bind(this)}
          className="form_class"
          ref={(form) => (this.form = form)}
        >
          <div className="row">
            <div className="col-lg-6">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Your Name*"
                onChange={this.handleChange}
                required
              />
              <p>{errors.name}</p>
            </div>
            <div className="col-lg-6">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email*"
                onChange={this.handleChange}
                required
              />
              <p>{errors.email}</p>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Subject*"
                onChange={this.handleChange}
                required
              />
              <p>{errors.subject}</p>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone*"
                onChange={this.handleChange}
                required
              />
              <p>{errors.phone}</p>
            </div>
          </div>
          <textarea
            name="message"
            id="message"
            className="form-control"
            rows="6"
            placeholder="Your Message ..."
            onChange={this.handleChange}
            required
          ></textarea>
          <button type="submit" className="btn send_btn theme_btn">
            Send Message
          </button>
        </form>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="modal-body-container">
            <div className="modal-title">Thank you for getting in touch..</div>
            <div className="modal-card-container">
              <p>
                We'd love to support you in finding an ideal assistant for your
                needs. Our team will be in touch with you within 24 hours.
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="send-btn-okay"
                onClick={this.hideModal}
              >
                Ok
              </button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default Form;
