import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Experience = ({ formData, prevStep, nextStep, handleChange }) => {
  const { about } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Experience</h3>
      <TextField
        label="About"
        name="about"
        value={about}
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
          onClick={() => prevStep(3)}
        >
          Back
        </Button>
        <Button color="primary" variant="contained" onClick={() => nextStep(3)}>
          Next
        </Button>
      </div>
    </Container>
  );
};
