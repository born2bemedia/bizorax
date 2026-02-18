"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import ArrowRight from "@/icons/slider/ArrowRight";
import Mark from "@/icons/other/Mark";
import Snipper from "@/icons/loading/Snipper";
import ReCaptcha from "react-google-recaptcha";
import { allowedCountriesOptions, defaultCountries, excludedCountries } from "@/lib/phone";


function ContactForm() {
    const countryCode = useCountryCode();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const onCaptchaVerify = (token) => {
        setIsCaptchaVerified(!!token);
    };

    const validationSchema = Yup.object({
        yourName: Yup.string().required("The field is required."),
        lastName: Yup.string(),
        company: Yup.string(),
        email: Yup.string()
            .email("Please enter a valid email address.")
            .required("The field is required."),
        phone: Yup.string().required("The field is required."),
        budget: Yup.string().required("The field is required."),
        website: Yup.string().required("The field is required."),
        message: Yup.string(),
    });

    const initialValues = {
        yourName: "",
        lastName: "",
        company: "",
        website: "",
        budget: "",
        email: "",
        phone: "",
        message: "",
    };

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            const response = await fetch("/api/emails/request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                setTimeout(() => {
                    setSubmitting(false);
                    resetForm();
                    setStatus({ success: true });
                    setIsSuccess(true);
                }, 400);
            } else {
                setStatus({ success: false });
            }
        } catch (error) {
            console.error(error);
            setStatus({ success: false });
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, errors, touched }) => (
                <div className="contact-form">
                    {!isSuccess && (
                        <Form className="form">

                            <div className="top">
                                <h2 className="title">Send Us a Message</h2>
                                <div className="text">Fill out the form below, and our team will get back to you promptly:</div>
                            </div>

                            <div className="row">
                                <Field name="yourName">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="First Name"
                                            className={
                                                form.touched.yourName && form.errors.yourName
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                    )}
                                </Field>
                            </div>

                            <div className="row">
                                <Field name="company">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Company Name"
                                            className={
                                                form.touched.company && form.errors.company
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                    )}
                                </Field>
                            </div>

                            <div className="row">
                                <Field name="lastName">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Last Name"
                                            className={
                                                form.touched.lastName && form.errors.lastName
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                    )}
                                </Field>
                            </div>

                            <div className="row">
                                <Field name="website">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Company Website"
                                            className={
                                                form.touched.website && form.errors.website
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                    )}
                                </Field>
                            </div>

                            <div className="row">
                                <Field name="email">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="email"
                                            placeholder="Email"
                                            className={
                                                form.touched.email && form.errors.email
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                    )}
                                </Field>
                            </div>

                            <div className="row">
                                <Field name="budget">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Budget"
                                            className={
                                                form.touched.budget && form.errors.budget
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                    )}
                                </Field>
                            </div>

                            <div className="row _phone">
                                <Field name="phone">
                                    {({ field, form }) => (
                                        <PhoneInput
                                            country={excludedCountries.includes(countryCode) ? "gb" : countryCode}
                                            value={field.value}
                                            onChange={(value) => form.setFieldValue("phone", value)}
                                            placeholder="Your phone"
                                            excludeCountries={excludedCountries}
                                            className={
                                                form.touched.phone && form.errors.phone
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                    )}
                                </Field>
                            </div>

                            <div className="row">
                                <Field name="message">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Message"
                                            className={
                                                form.touched.message && form.errors.message
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                    )}
                                </Field>
                            </div>

                            {Object.keys(errors).length > 0 && touched && (
                                <span className="general-error">
                                    <Mark />
                                    This fields is required.
                                </span>
                            )}
                            <ReCaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={onCaptchaVerify} />
                            <button
                                type="submit"
                                className="button"
                                disabled={isSubmitting || !isCaptchaVerified}
                            >
                                Submit Message
                            </button>
                            {isSubmitting && (
                                <div className="loading-icon">
                                    <Snipper />
                                </div>
                            )}
                        </Form>
                    )}
                    {isSuccess && (
                        <div className="success-message">
                            We’ve successfully received your request. Our experts are reviewing your details and will reach out to you soon to explore your business needs and offer tailored strategies to address them.
                            <span>Thank you!</span>
                        </div>
                    )}
                </div>
            )}
        </Formik>
    );
}

export default ContactForm;