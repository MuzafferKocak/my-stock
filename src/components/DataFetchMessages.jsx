import Alert from "@mui/material/Alert";

export const ErrorMessage = () => {
  return (
    <Alert sx={{ mt: 2 }} severity="warning">
      kein Daten vorhanden!
    </Alert>
  );
};
