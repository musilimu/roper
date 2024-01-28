import { Callout } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

type ErrorProps = PropsWithChildren & {
  error: unknown;
};
const ErrorEl = ({ error }: ErrorProps) => {
  if (error instanceof Error)
    return <Callout.Text>{error.message}</Callout.Text>;
};

export default ErrorEl;
