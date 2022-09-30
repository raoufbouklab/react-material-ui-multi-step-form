import "./style.css";
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    maritalStatus: "",
    birthdate: null,
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    postalCode: "",
    phone: "",
    email: "",
    password: "",
    message: "",
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
    console.log(formData);
  };

  const onChange = (name, value) => {
    console.log(name);
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData));
  };

  const props = {
    formData,
    nextStep,
    prevStep,
    handleChange,
    onChange,
    onSubmit,
    step,
  };

  return (
    <>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Content props={props} setStep={setStep}/>
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
}

export default App;
