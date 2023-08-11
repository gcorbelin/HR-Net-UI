import React, { useEffect, useState, useRef } from "react";
import "./modal.css";
import { ModalProps } from "./Modal.types";

export default function Modal({ open, onClose, children }: ModalProps) {
  const [modalClassName, setModalClassName] = useState("modal");
  const handleClose = () => {
    onClose();
  };

  const modalRef = useRef(null);

  useEffect(() => {
    setModalClassName(open ? "modal show" : "modal");
    document
      .getElementsByTagName("body")[0]
      .setAttribute("style", `overflow: ${open ? "hidden" : "auto"}`);
  }, [open]);

  // Handle 'Escape' key pressed
  const handleEscape = function (event: KeyboardEvent) {
    var key = event.code || event.which || event.keyCode;

    if ((key === "Escape" || key === 27) && open) {
      handleClose();
      event.stopPropagation();
    }
  };
  // Listen to keyup event
  document.addEventListener("keyup", (event) => handleEscape(event));

  return (
    <div className={modalClassName} ref={modalRef}>
      <div className="modal-content" role="dialog" aria-modal="true">
        {onClose && (
          <button className="modal-close" onClick={handleClose}>
            <span className="sr-only">Close</span>
          </button>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
