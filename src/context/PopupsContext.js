"use client";
import React, { useState, createContext, useContext } from "react";

const PopupsContext = createContext();

export const PopupsProvider = ({ children }) => {
  const [requestPopupDisplay, setRequestPopupDisplay] = useState(false);
  const [orderPopupDisplay, setOrderPopupDisplay] = useState(false);
  const [thanksPopupDisplay, setThanksPopupDisplay] = useState(false);
  const [servicePopupDisplay, setServicePopupDisplay] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  return (
    <PopupsContext.Provider
      value={{
        requestPopupDisplay,
        setRequestPopupDisplay,
        orderPopupDisplay,
        setOrderPopupDisplay,
        thanksPopupDisplay,
        setThanksPopupDisplay,
        servicePopupDisplay,
        setServicePopupDisplay,
        currentService,
        setCurrentService,
      }}
    >
      {children}
    </PopupsContext.Provider>
  );
};

export const usePopup = () => useContext(PopupsContext);