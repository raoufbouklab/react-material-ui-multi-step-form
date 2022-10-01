import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import { Close, NavigateBefore, NavigateNext } from "@mui/icons-material";

export const Address = ({   
  formData,
  handleChange,
  prevStep,
  nextStep,
  handleClose,
}) => {
  const { addressLine1, addressLine2, city, country, postalCode } = formData;
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
        Address
      </Typography>

      <TextField
        label="Address Line 1"
        name="addressLine1"
        placeholder="Enter address line 1"
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
        placeholder="Enter address line 2"
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
        placeholder="Enter city"
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
        placeholder="Enter country"
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
        placeholder="Enter postal code"
        value={postalCode}
        onChange={handleChange}
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
