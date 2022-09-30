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
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Close, NavigateNext } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const PersonalInfo = ({
  formData,
  nextStep,
  handleChange,
  onChange,
  setStep,
  setOpen,
}) => {
  const { firstName, lastName, gender, maritalStatus, birthdate } = formData;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="xs">
      <Typography variant="h4" component="h2">
        Personal Info
      </Typography>
        <TextField
          label="First Name"
          name="firstName"
          placeholder="Enter first name"
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

        <Stack direction="row" justifyContent="space-between">
          <Button
            startIcon={<NavigateNext />}
            variant="contained"
            color="primary"
            sx={{ marginTop: "1rem", width: "45%" }}
            onClick={() => nextStep(0)}
          >
            Next
          </Button>
          <Button
            startIcon={<Close />}
            variant="contained"
            color="error"
            sx={{ marginTop: "1rem", width: "45%" }}
            onClick={(e) => {setOpen(false); setStep(0)}}
          >
            Close
          </Button>
        </Stack>
      </Container>
    </LocalizationProvider>
  );
};
