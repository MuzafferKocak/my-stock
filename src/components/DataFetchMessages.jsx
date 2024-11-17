import Alert from "@mui/material/Alert";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const ErrorMessage = () => {
  return (
    <Alert sx={{ mt: 2 }} severity="warning">
      kein Daten vorhanden!
    </Alert>
  );
};

export const CardSkeleton = ({ children }) => {
  return (
    <Stack spacing={1} sx={{ mt: 3 }} alignItems={"center"}>
      <Skeleton variant="rectangular">{children}</Skeleton>
    </Stack>
  );
};

export const TableSkeleton = () => {
  return (
    <Stack spacing={1} sx={{ mt: 3 }}>
      <Skeleton variant="rectangular" width="100%" height={90} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={30} />
    </Stack>
  );
};
