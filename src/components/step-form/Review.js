import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Close, NavigateBefore, Send } from "@mui/icons-material";
import {
  Typography,
  Stack,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

export const Review = ({ formData, prevStep, setStep, setOpen }) => {
  const {
    firstName,
    lastName,
    gender,
    maritalStatus,
    birthdate,
    addressLine1,
    addressLine2,
    city,
    country,
    postalCode,
    email,
    phone,
    password,
    message,
  } = formData;
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2">
        Review
      </Typography>

      <List>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#eaeaea" }}
        >
          <ListItemText
            primary="First Name"
            sx={{ flex: "1", marginLeft: "5px" }}
          />
          <ListItemText primary={firstName} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#b3b3b3" }}
        >
          <ListItemText
            primary="Last Name"
            sx={{ flex: "1", marginLeft: "5px" }}
          />
          <ListItemText primary={lastName} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#eaeaea" }}
        >
          <ListItemText
            primary="Gender"
            sx={{ flex: "1", marginLeft: "5px" }}
          />
          <ListItemText primary={gender} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#b3b3b3" }}
        >
          <ListItemText
            primary="Marital Status"
            sx={{ flex: "1", marginLeft: "5px" }}
          />
          <ListItemText primary={maritalStatus} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#eaeaea" }}
        >
          <ListItemText
            primary="Birthdate"
            sx={{ flex: "1", marginLeft: "5px" }}
          />
          <ListItemText
            primary={birthdate ? birthdate.toString() : ""}
            sx={{ flex: "1" }}
          />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#b3b3b3" }}
        >
          <ListItemText
            primary="Address Line 1"
            sx={{ flex: "1", marginLeft: "5px" }}
          />
          <ListItemText primary={addressLine1} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#eaeaea" }}
        >
          <ListItemText
            primary="Address Line 2"
            sx={{ flex: "1", marginLeft: "5px" }}
          />
          <ListItemText primary={addressLine2} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#b3b3b3" }}
        >
          <ListItemText primary="City" sx={{ flex: "1", marginLeft: "5px" }} />
          <ListItemText primary={city} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#eaeaea" }}
        >
          <ListItemText
            primary="Country"
            sx={{ flex: "1", marginLeft: "5px" }}
          />
          <ListItemText primary={country} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#b3b3b3" }}
        >
          <ListItemText
            primary="Postal Code"
            sx={{ flex: "1", marginLeft: "5px" }}
          />
          <ListItemText primary={postalCode} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#eaeaea" }}
        >
          <ListItemText primary="Email" sx={{ flex: "1", marginLeft: "5px" }} />
          <ListItemText primary={email} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#b3b3b3" }}
        >
          <ListItemText primary="Phone" sx={{ flex: "1", marginLeft: "5px" }} />
          <ListItemText primary={phone} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#eaeaea" }}
        >
          <ListItemText
            primary="Password"
            sx={{ flex: "1", marginLeft: "5px" }}
          />
          <ListItemText primary={password} sx={{ flex: "1" }} />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", backgroundColor: "#b3b3b3" }}
        >
          <ListItemText
            primary="Message"
            sx={{ flex: "1", marginLeft: "5px" }}
          />
          <ListItemText primary={message} sx={{ flex: "1" }} />
        </ListItem>
      </List>

      <Stack direction="row" justifyContent="space-between">
        <Button
          startIcon={<NavigateBefore />}
          variant="contained"
          color="secondary"
          sx={{ marginTop: "1rem", width: "30%" }}
          onClick={() => prevStep(3)}
        >
          Back
        </Button>
        <Button
          type="submit"
          color="success"
          startIcon={<Send />}
          variant="contained"
          sx={{ marginTop: "1rem", width: "30%" }}
        >
          Submit
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
