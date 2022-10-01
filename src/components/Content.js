import { Add } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { MultiStepForm } from "./MultiStepForm";
import Users from "./Users";

const Content = ({
  props,
  nextStep,
  prevStep,
  handleClose,
  handleOpen,
  handleSubmit,
}) => {
  return (
    <Box flex={5} p={2}>
      {props.open ? (
        <form onSubmit={handleSubmit}>
          <MultiStepForm
            props={props}
            nextStep={nextStep}
            prevStep={prevStep}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
        </form>
      ) : (
        <Box>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            marginBottom="30px"
          >
            <Typography variant="h4">Users</Typography>
            <Button variant="outlined" startIcon={<Add />} onClick={handleOpen}>
              Add New
            </Button>
          </Stack>
          <Stack>
            <Users users={props.users} />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Content;
