import React, { useState } from "react";
import { PersonalInfo } from "./step-form/PersonalInfo";
import { Experience } from "./step-form/Experience";
import { Address } from "./step-form/Address";
import { Contact } from "./step-form/Contact";
import { Review } from "./step-form/Review";
import { Submit } from "./step-form/Submit";

export const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    maritalStatus: "",
    birthdate: null,
    occupation: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    postalCode: "",
    phone: "",
    email: "",
    about: "",
    password: "",
    confirmPassword: "",
  });

  const [step, setStep] = useState(0);

  const nextStep = (step) => {
    setStep(step + 1);
  };

  const prevStep = (step) => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    console.log(formData);
    alert(formData);
  };

  const props = {
    formData,
    nextStep,
    prevStep,
    handleChange,
    onChange,
    onSubmit,
  };

  switch (step) {
    case 0:
      return <PersonalInfo {...props} />;
    case 1:
      return <Address {...props} />;
    case 2:
      return <Contact {...props} />;
    case 3:
      return <Experience {...props} />;
    case 4:
      return <Review {...props} />;
    case 5:
      return <Submit {...props} />;
  }
};
