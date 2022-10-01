import { Alert, Box, Snackbar, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

function App() {
  const [users, setUsers] = useState([]);
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [close, setClose] = useState(true);
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

  //Fetch Users from server
  useEffect(() => {
    const fetchTasks = async () => {
      await fetch("http://localhost:3004/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log(error));
    };
    fetchTasks();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = formData;
    onAddUser(user);
    setOpen(false);
    setOpenSnackbar(true);
    handleClose(e);
  };

  //Add user
  const onAddUser = async (user) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newUser = { id, ...user };
    const response = await fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    setUsers([...users, data]);
  };

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setStep(0);
    setFormData({
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
    setOpen(false);
    setClose(true);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
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
      [name]: value ? value : "",
    });
  };

  const props = {
    step,
    formData,
    open,
    close,
    users,
    onChange,
    handleChange,
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "1350px",
          minHeight: "100vh",
          alignItems: "center",
          margin: "auto",
          padding: "0px",
          backgroundColor: "#f2f9f5",
        }}
      >
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar />
          <Content
            props={props}
            nextStep={nextStep}
            prevStep={prevStep}
            handleOpen={handleOpen}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            onAddUser={onAddUser}
          />
          <Rightbar />
        </Stack>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackBar}
          >
            <Alert
              variant="filled"
              onClose={handleCloseSnackBar}
              severity="success"
              sx={{ width: "100%" }}
            >
              User has been created successfuly!
            </Alert>
          </Snackbar>
        </Stack>
      </Box>
    </>
  );
}

export default App;
