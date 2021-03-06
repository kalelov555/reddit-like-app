import * as React from "react";
import { Skeleton, Stack } from "@mui/material/";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant='text' />
      <Skeleton variant='circular' width={40} height={40} />
      <Skeleton variant='rectangular' width={210} height={118} />
      <Skeleton />
      <Skeleton animation='wave' />
    </Stack>
  );
}
