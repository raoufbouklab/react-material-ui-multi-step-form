import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Contact = ({ formData, prevStep, nextStep, handleChange }) => {
  const { email, phone } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Contact</h3>
      <TextField
        label="Email"
        name="email"
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
        value={phone}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => prevStep(2)}
        >
          Back
        </Button>
        <Button color="primary" variant="contained" onClick={() => nextStep(2)}>
          Next
        </Button>
      </div>
    </Container>
  );
};
