import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export const PersonalInfo = ({
  formData,
  nextStep,
  handleChange,
  onChange,
}) => {
  const { firstName, lastName, gender, maritalStatus, birthdate, occupation } =
    formData;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="xs">
        <h3>Personal Info</h3>
        <TextField
          label="First Name"
          name="firstName"
          value={firstName}
          required
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={lastName}
          required
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          select
          label="Gender"
          name="gender"
          value={gender}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        >
          <MenuItem key="1" value={"M"}>
            Male
          </MenuItem>
          <MenuItem key="2" value={"F"}>
            Female
          </MenuItem>
        </TextField>

        <TextField
          select
          label="Marital Status"
          name="maritalStatus"
          value={maritalStatus}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        >
          <MenuItem key="1" value={"S"}>
            Single
          </MenuItem>
          <MenuItem key="2" value={"M"}>
            Married
          </MenuItem>
          <MenuItem key="3" value={"D"}>
            Divorced
          </MenuItem>
          <MenuItem key="4" value={"W"}>
            Widow
          </MenuItem>
        </TextField>

        <Stack spacing={4}>
          <DesktopDatePicker
            label="Birthday"
            value={birthdate}
            onChange={(date) => onChange("birthdate", date)}
            renderInput={(params) => (
              <TextField
                margin="normal"
                variant="outlined"
                autoComplete="off"
                fullWidth
                {...params}
              />
            )}
            showDaysOutsideCurrentMonth
          />
        </Stack>

        <TextField
          label="Occupation"
          name="occupation"
          value={occupation}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />

        <Button
          variant="contained"
          fullWidth
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={() => nextStep(0)}
        >
          Next
        </Button>
      </Container>
    </LocalizationProvider>
  );
};
