import React from "react";
import { cn, formatDateTime } from "@/lib/utils";

export const FormattedDateTime = ({
  date,
  className,
}: {
  date: string | Date;
  className?: string;
}) => {
  return (
    <p className={cn("body-1 text-light-200", className)}>
      {formatDateTime(new Date(date).toISOString())}
    </p>
  );
};
export default FormattedDateTime;