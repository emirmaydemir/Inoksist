import React from "react";
import "../../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "+905050604533"; // WhatsApp numaranı burada gir

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <i className="ri-whatsapp-line"></i> {/* WhatsApp simgesi */}
    </a>
  );
};

export default WhatsAppButton;