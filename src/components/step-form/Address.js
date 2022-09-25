import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Address = ({ formData, prevStep, nextStep, handleChange }) => {
  const { addressLine1, addressLine2, city, country, postalCode } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Address</h3>

      <TextField
        label="Address Line 1"
        name="addressLine1"
        value={addressLine1}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Address Line 2"
        name="addressLine2"
        value={addressLine2}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Country"
        name="country"
        value={country}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Postal Code"
        name="postalCode"
        value={postalCode}
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
          onClick={() => prevStep(1)}
        >
          Back
        </Button>
        <Button color="primary" variant="contained" onClick={() => nextStep(1)}>
          Next
        </Button>
      </div>
    </Container>
  );
};
