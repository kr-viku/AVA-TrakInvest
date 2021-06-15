import React from "react";
import Modal from "../common/modal/index";

class DashboardModal extends React.Component {
  // State to store the status of showing the modal. Defaults to false.
  state = { show: true };

  // Method to show modal, activated when you clicky the OPEN button
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
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="close-btn-container" onClick={this.hideModal}>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              class=""
              data-icon="close"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
          </div>
          <div className="modal-body-container">
            <div className="modal-title">Let us give you the best advice.</div>
            <div className="modal-card-container">
              <div className="card-left-container">
                <div className="card-captions">Are you a worker?</div>
                <div className="card-logo-image">
                  <img
                    loading="lazy"
                    src="https://images.prismic.io/helpster/82bbc984-4b7e-4f2f-8200-d7557442c38e_Worker-130x130.webp?auto=compress,format"
                    alt="workerlogo"
                  />
                </div>
                <div className="card-btn-container">
                  <button className="card-btn-wrapper">I want to work</button>
                </div>
              </div>
              <div className="card-right-container">
                <div className="card-captions">
                  Are you a business?
                </div>
                <div className="card-logo-image">
                <img
                    loading="lazy"
                    src="https://images.prismic.io/helpster/1f58f508-5163-4072-8a48-392cfded89fd_business-130x130.webp?auto=compress,format"
                    alt="workerlogo"
                  />
                </div>
                <div className="card-btn-container">
                  <button className="card-btn-wrapper">I want to manage my workforce</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default DashboardModal;
