import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { Close, NavigateNext } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const PersonalInfo = ({
  formData,
  onChange,
  handleChange,
  nextStep,
  handleClose,
}) => {
  const { firstName, lastName, gender, maritalStatus, birthdate } = formData;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container
        maxWidth="xs"
        sx={{
          border: "1px solid #1976d2",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ marginTop: "20px", marginBottom: "15px", textAlign: "center" }}
        >
          Personal Info
        </Typography>
        <TextField
          label="First Name"
          name="firstName"
          placeholder="Enter first name"
          required
          value={firstName}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Last Name"
          name="lastName"
          placeholder="Enter last name"
          required
          value={lastName}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={gender}
            onChange={(e) => onChange("gender", e.target.value)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

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
          <DatePicker
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

        <Stack
          direction="row"
          justifyContent="space-between"
          marginBottom="30px"
        >
          <Button
            startIcon={<NavigateNext />}
            variant="contained"
            color="primary"
            sx={{ marginTop: "1rem", width: "45%" }}
            onClick={nextStep}
          >
            Next
          </Button>
          <Button
            startIcon={<Close />}
            variant="contained"
            color="error"
            sx={{ marginTop: "1rem", width: "45%" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Stack>
      </Container>
    </LocalizationProvider>
  );
};
