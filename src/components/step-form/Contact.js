import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import { Close, NavigateBefore, NavigateNext } from "@mui/icons-material";

export const Contact = ({
  formData,
  prevStep,
  nextStep,
  handleChange,
  handleClose
}) => {
  const { email, phone, password, message } = formData;
  return (
    <Container
      maxWidth="xs"
      sx={{ border: "1px solid #1976d2", marginTop: "20px" }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginTop: "20px", marginBottom: "15px", textAlign: "center" }}
      >
        Contanct
      </Typography>
      <TextField
        label="Email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="Phone Number"
        name="phone"
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        type="password"
        label="Password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="Message"
        placeholder="Type your message here"
        name="message"
        value={message}
        onChange={handleChange}
        multiline
        rows={5}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <Stack direction="row" justifyContent="space-between" marginBottom="30px">
        <Button
          startIcon={<NavigateBefore />}
          variant="contained"
          color="secondary"
          sx={{ marginTop: "1rem", width: "30%" }}
          onClick={prevStep}
        >
          Back
        </Button>
        <Button
          startIcon={<NavigateNext />}
          variant="contained"
          color="primary"
          sx={{ marginTop: "1rem", width: "30%" }}
          onClick={nextStep}
        >
          Next
        </Button>
        <Button
          startIcon={<Close />}
          variant="contained"
          color="error"
          sx={{ marginTop: "1rem", width: "30%" }}
          onClick={handleClose}
        >
          Close
        </Button>
      </Stack>
    </Container>
  );
};
