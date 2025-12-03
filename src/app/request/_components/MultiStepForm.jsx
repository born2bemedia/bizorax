"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import "@/styles/request.scss";
import ArrowBtn from "@/icons/other/ArrowBtn";
import RequestMessage from "./RequestMessage";
import { excludedCountries } from "@/lib/phone";

const StepOne = ({ next, setFieldValue, values }) => {
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const updatedChallenges = values.challenges.includes(value)
      ? values.challenges.filter((item) => item !== value)
      : [...values.challenges, value];
    setFieldValue("challenges", updatedChallenges);
  };

  return (
    <>
      <div className="request-form__top">
        <h4 className="title">Help Us Understand Your Business Needs</h4>
        <p className="text">
          Select the challenges your business currently faces so we can create the perfect plan for you.
        </p>
        <h5 className="step">
          <span className="current">01</span>
          <span className="next">/03</span>
        </h5>
      </div>
      <div className="request-form__step">
        {[
          "Struggling with market entry or expansion.",
          "Limited scalability and growth.",
          "High operational costs.",
          "Inefficient workflows and processes.",
          "Low customer retention rates.",
          "Navigating digital transformation challenges.",
          "Lack of actionable analytics or insights.",
          "Adapting to industry or market changes.",
          "Difficulty attracting and retaining top talent.",
          "Poor alignment between teams and departments.",
          "Ineffective leadership or decision-making frameworks.",
          "Other: (Provide details)",
        ].map((challenge, index) => (
          <div key={index} className="request-form__row">
            <label
              className={values.challenges.includes(challenge) ? "_active" : ""}
            >
              <input
                type="checkbox"
                value={challenge}
                onChange={handleCheckboxChange}
                checked={values.challenges.includes(challenge)}
              />
              {challenge}
            </label>
          </div>
        ))}
        <button className="request-form__button" type="button" onClick={next}>
          Next
          <ArrowBtn />
        </button>
      </div>
    </>
  );
};

const StepTwo = ({ next, prev, setFieldValue, values }) => {
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const updatedGoals = values.goals.includes(value)
      ? values.goals.filter((item) => item !== value)
      : [...values.goals, value];
    setFieldValue("goals", updatedGoals);
  };

  return (
    <>
      <div className="request-form__top">
        <h4 className="title">Tell Us What You Aim to Achieve</h4>
        <p className="text">Select your business objectives to help us align the strategy to your vision.</p>
        <h5 className="step">
          <span className="current">02</span>
          <span className="next">/03</span>
        </h5>
      </div>
      <div className="request-form__step">
        {[
          "Increase market presence.",
          "Drive revenue growth.",
          "Enhance customer retention.",
          "Improve operational efficiency.",
          "Strengthen brand awareness.",
          "Scale digital transformation efforts.",
          "Generate actionable insights with analytics.",
          "Reduce costs while maintaining quality.",
          "Build competitive advantages in the market.",
          "Boost team performance and collaboration.",
          "Improve customer experience through personalization.",
          "Other: (Provide details)",
        ].map((goal, index) => (
          <div key={index} className="request-form__row">
            <label
              className={values.goals.includes(goal) ? "_active" : ""}
            >
              <input
                type="checkbox"
                value={goal}
                onChange={handleCheckboxChange}
                checked={values.goals.includes(goal)}
              />
              {goal}
            </label>
          </div>
        ))}
        <div className="request-form__buttons">
          <button className="request-form__button" type="button" onClick={prev}>
            <ArrowBtn />
            Previous
          </button>
          <button className="request-form__button" type="button" onClick={next}>
            Next
            <ArrowBtn />
          </button>
        </div>
      </div>
    </>
  );
};

const StepThree = ({ prev, country, touched, errors, setFieldValue }) => {
  return (
    <>
      <div className="request-form__top">
        <h4 className="title">Help Us Craft Your Customised Business Plan</h4>
        <p className="text">Provide a few details to ensure our recommendations are tailored specifically to your business.</p>
        <h5 className="step">
          <span className="current">03</span>
          <span className="next">/03</span>
        </h5>
      </div>
      <div className="request-form__form">
        <div className="request-form">
          <div className="row">
            <Field
              name="firstName"
              type="text"
              placeholder="First Name"
              className={touched.firstName && errors.firstName ? "invalid" : ""}
            />
            <ErrorMessage className="error" name="firstName" component="div" />
          </div>

          <div className="row">
            <Field
              name="lastName"
              type="text"
              placeholder="Last Name"
              className={touched.lastName && errors.lastName ? "invalid" : ""}
            />
            <ErrorMessage className="error" name="lastName" component="div" />
          </div>

          <div className="row">
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={touched.email && errors.email ? "invalid" : ""}
            />
            <ErrorMessage className="error" name="email" component="div" />
          </div>

          <div className="row _phone">
            <PhoneInput
              country={excludedCountries.includes(country) ? "gb" : country}
              value=""
              excludeCountries={excludedCountries}
              onChange={(value) => setFieldValue("phone", value)}
              placeholder="Phone Number"
              className={touched.phone && errors.phone ? "invalid" : ""}
            />
            <ErrorMessage className="error" name="phone" component="span" />
          </div>

          <div className="row">
            <Field
              name="company"
              type="text"
              placeholder="Company Name"
              className={touched.company && errors.company ? "invalid" : ""}
            />
            <ErrorMessage className="error" name="company" component="div" />
          </div>

          <div className="row">
            <Field
              name="message"
              type="text"
              placeholder="Message"
              className={touched.message && errors.message ? "invalid" : ""}
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

          <div className="row">
            <Field
              name="website"
              type="text"
              placeholder="Company Website"
              className={touched.website && errors.website ? "invalid" : ""}
            />
            <ErrorMessage className="error" name="website" component="div" />
          </div>

          <div className="buttons">
            <button className="button" type="button" onClick={prev}>
              <ArrowBtn />
              Previous
            </button>
            <button className="button" type="submit">
              Submit
              <ArrowBtn />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const countryCode = useCountryCode();

  const initialValues = {
    challenges: [],
    goals: [],
    firstName: "",
    lastName: "",
    budget: "",
    email: "",
    phone: "",
    website: "",
    company: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    challenges: Yup.array().min(1, "Please select at least one challenge."),
    goals: Yup.array().min(1, "Please select at least one goal."),
    firstName: Yup.string().required("First Name is required."),
    lastName: Yup.string().required("Last Name is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    phone: Yup.string().required("Phone number is required."),
    website: Yup.string()
      .url("Invalid website URL.")
      .required("Website is required."),
    company: Yup.string().required("Company name is required."),
    message: Yup.string(),
    budget: Yup.string(),
  });

  const handleNext = async (values) => {
    try {
      await validationSchema.validateAt(
        step === 1 ? "challenges" : "goals",
        values
      );
      setStep(step + 1);
    } catch (error) {
      // Handle validation error
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      const response = await fetch("/api/emails/proposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setSubmitting(false);
        resetForm();
        setStatus({ success: true });
        setStep(4);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <section className="request-form">
      <div className="request-form__container _container">
        <div className="request-form__body">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, setFieldValue }) => (
              <Form className="request-form__form">
                {step === 1 && (
                  <StepOne
                    next={() => handleNext(values)}
                    setFieldValue={setFieldValue}
                    values={values}
                  />
                )}
                {step === 2 && (
                  <StepTwo
                    next={() => handleNext(values)}
                    prev={handlePrev}
                    setFieldValue={setFieldValue}
                    values={values}
                  />
                )}
                {step === 3 && (
                  <StepThree
                    prev={handlePrev}
                    country={countryCode}
                    touched={touched}
                    errors={errors}
                    setFieldValue={setFieldValue}
                  />
                )}
                {step === 4 && (
                  <RequestMessage />
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default MultiStepForm;