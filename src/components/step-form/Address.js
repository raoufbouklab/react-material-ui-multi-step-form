import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import { Close, NavigateBefore, NavigateNext } from "@mui/icons-material";

export const Address = ({
  formData,
  prevStep,
  nextStep,
  handleChange,
  setStep,
  setOpen,
}) => {
  const { addressLine1, addressLine2, city, country, postalCode } = formData;
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h2">
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

      <Stack direction="row" justifyContent="space-between">
        <Button
          startIcon={<NavigateBefore />}
          variant="contained"
          color="secondary"
          sx={{ marginTop: "1rem", width: "30%" }}
          onClick={() => prevStep(1)}
        >
          Back
        </Button>
        <Button
          startIcon={<NavigateNext />}
          variant="contained"
          color="primary"
          sx={{ marginTop: "1rem", width: "30%" }}
          onClick={() => nextStep(1)}
        >
          Next
        </Button>
        <Button
          startIcon={<Close />}
          variant="contained"
          color="error"
          sx={{ marginTop: "1rem", width: "30%" }}
          onClick={(e) => {
            setOpen(false);
            setStep(0);
          }}
        >
          Close
        </Button>
      </Stack>
    </Container>
  );
};
