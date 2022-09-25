import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Review = ({ formData, prevStep, nextStep, handleChange }) => {
  return (
    <Container maxWidth="xs">
      <h3>Review</h3>

      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => prevStep(4)}
        >
          Back
        </Button>
        <Button color="primary" variant="contained" onClick={() => nextStep(4)}>
          Next
        </Button>
      </div>
    </Container>
  );
};
