import { Add } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { MultiStepForm } from "./MultiStepForm";
import Users from "./Users";

const Content = ({ setStep, props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box flex={5} p={2}>
      {open ? (
        <form>
          <MultiStepForm props={props} setStep={setStep} setOpen={setOpen} />
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
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={(e) => setOpen(true)}
            >
              Add New
            </Button>
          </Stack>
          <Stack>
            <Users />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Content;
