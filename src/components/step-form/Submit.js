import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Submit = ({ formData, onSubmit }) => {
  return (
    <Container maxWidth="xs">
      <h3>Submit</h3>

      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onSubmit={onSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};
