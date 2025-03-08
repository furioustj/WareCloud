import React from "react";
import { cn, formatDateTime } from "@/lib/utils";

export const FormattedDateTime = ({
  date,
  className,
}: {
  date: Date | string;
  className?: string;
}) => {
  return (
    <p className={cn("body-1 text-light-200", className)}>
      {formatDateTime(new Date(date).toISOString())}
    </p>
  );
};
export default FormattedDateTime;