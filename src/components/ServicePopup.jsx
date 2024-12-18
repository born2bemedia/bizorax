"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import CloseIcon from "@/icons/other/CloseIcon";
import Snipper from "@/icons/loading/Snipper";

const ServicePopup = () => {
  const { servicePopupDisplay, setServicePopupDisplay, currentService } = usePopup();
  const countryCode = useCountryCode();
  const [isSuccess, setIsSuccess] = useState(false);

  if (!servicePopupDisplay) return null;

  const validationSchema = Yup.object({
    firstName: Yup.string().required("The field is required."),
    lastName: Yup.string(),
    company: Yup.string().required("The field is required."),
    website: Yup.string().required("The field is required."),
    budget: Yup.string().required("The field is required."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("The field is required."),
    phone: Yup.string().required("The field is required."),
    message: Yup.string()
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    company: "",
    website: "",
    budget: "",
    email: "",
    phone: "",
    message: "",
    service: `${currentService}`,
  };

  const closePopup = (resetForm) => {
    setServicePopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
    setIsSuccess(false);
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    const valuesWithService = {
      ...values,
      service: `${currentService} Request`,
    };

    console.log("Form values being submitted: ", valuesWithService);

    try {
      const response = await fetch("/api/emails/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valuesWithService),
      });

      if (response.ok) {
        setSubmitting(false);
        setIsSuccess(true);
        resetForm();
      } else {
        setStatus({ success: false });
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
      setIsSuccess(false);
    }
  };

  return (
    <div className={`request-popup-wrap ${servicePopupDisplay ? "opened" : ""}`}>
      <div className="overlay" onClick={() => closePopup(null)}></div>
      <div className="popup-inner">
        <div className="order-popup">
          <div className="order-popup__content">
            <div className="order-popup__col-01">
              <img src="/images/capabilites/img-02.jpg" alt="image" />
            </div>
            <div className={`order-popup__col-02 ${isSuccess ? "hidden" : ""}`}>
              <h2 className="order-popup__title">{currentService}</h2>
              <button
                className="order-popup__close"
                onClick={() => closePopup(null)}
                aria-label="Close popup"
              >
                <CloseIcon />
              </button>
              <div className="request-form">
                <div className="wrapper">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                  >
                    {({
                      isSubmitting,
                      status,
                      touched,
                      errors,
                      resetForm,
                      setFieldValue,
                      values,
                    }) => (
                      <Form className="form">
                        <Field
                          type="hidden"
                          name="service"
                          value={`${currentService}`}
                        />
                        <div className="row">
                          <Field
                            name="firstName"
                            type="text"
                            placeholder="First name"
                            className={touched.firstName && errors.firstName ? "invalid" : ""}
                          />
                        </div>

                        <div className="row">
                          <Field
                            name="company"
                            type="text"
                            placeholder="Company Name"
                            className={touched.company && errors.company ? "invalid" : ""}
                          />
                        </div>

                        <div className="row">
                          <Field
                            name="lastName"
                            type="text"
                            placeholder="Last name"
                            className={touched.lastName && errors.lastName ? "invalid" : ""}
                          />
                        </div>

                        <div className="row">
                          <Field
                            name="website"
                            type="text"
                            placeholder="Company Website"
                            className={touched.website && errors.website ? "invalid" : ""}
                          />
                        </div>

                        <div className="row">
                          <Field
                            name="email"
                            type="email"
                            placeholder="Email"
                            className={touched.email && errors.email ? "invalid" : ""}
                          />
                        </div>

                        <div className="row">
                          <Field
                            name="budget"
                            type="text"
                            placeholder="Budget"
                            className={touched.budget && errors.budget ? "invalid" : ""}
                          />
                        </div>

                        <div className="row _phone">
                          <PhoneInput
                            country={countryCode}
                            value={values.phone}
                            onChange={(value) => setFieldValue("phone", value)}
                            placeholder="Phone"
                            className={touched.phone && errors.phone ? "invalid" : ""}
                          />
                        </div>

                        <div className="row">
                          <Field
                            name="message"
                            type="text"
                            placeholder="Message"
                            className={touched.message && errors.message ? "invalid" : ""}
                          />
                        </div>

                        {Object.keys(errors).length > 0 && touched && (
                          <span className="general-error">
                            This field is required.
                          </span>
                        )}

                        <button
                          type="submit"
                          className="button"
                          disabled={isSubmitting}
                        >
                          Submit
                        </button>
                        {isSubmitting && (
                          <div className="loading-icon">
                            <Snipper />
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                  {isSuccess && (
                    <div className="success-message">
                      Your request has been successfully received. Our team will review your information and contact you shortly to discuss your marketing challenges and the solutions we can provide.
                      <span>Thank you!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;