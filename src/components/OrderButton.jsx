"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";

function OrderButton({ className, text, service, icon }) {
  const { setServicePopupDisplay, setCurrentService } = usePopup();

  const servicePopupOpen = () => {
    setCurrentService(service); 
    setServicePopupDisplay(true);
  };

  return (
    <button className={className} onClick={servicePopupOpen}>
      {text}
      {icon}
    </button>
  );
}

export default OrderButton;
