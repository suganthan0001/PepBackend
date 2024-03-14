import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function SuccessMessage() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <React.Fragment>
          <Button onClick={handleClickVariant("success")}>
            Show success snackbar
          </Button>
        </React.Fragment>
      </SnackbarProvider>
    </>
  );
}

export default SuccessMessage;
