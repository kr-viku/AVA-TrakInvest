import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section
        className="modal-main"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        {/* <button onClick={handleClose}>close</button> */}
      </section>
    </div>
  );
};

export default Modal;
