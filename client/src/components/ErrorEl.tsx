import { PropsWithChildren } from "react";

type ErrorProps = PropsWithChildren & {
  error: unknown;
};
const ErrorEl = ({ error }: ErrorProps) => {
  if (error instanceof Error) return <div>{error.message}</div>;
};

export default ErrorEl;
