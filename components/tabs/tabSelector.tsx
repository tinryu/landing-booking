import * as React from "react";

export const TabSelector = ({
  isActive,
  children,
  className,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  className: string;
  onClick: () => void;
}) => (
  <div
    className={`item ${className} ${
      isActive
        ? "active"
        : ""
    }`}
    onClick={onClick}
  >
    {children}
  </div>
);