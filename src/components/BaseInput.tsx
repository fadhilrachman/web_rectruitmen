import React, { ChangeEvent } from "react";

interface Props {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  type?: string;
  isInvalid?: boolean;
  value?: string | number | Date;
  errMessage?: string;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
const BaseInput = ({
  className,
  onChange,
  placeholder,
  type,
  errMessage,
  value,
  isInvalid,
  name,
  onBlur,
}: Props) => {
  const formattedValue = value instanceof Date ? value.toISOString() : value;
  return (
    <>
      <input
        className={`${className} ${
          isInvalid ? "border-red-500" : ""
        } shadow   border rounded  py-2 px-3 text-gray-700 bg-white focus:outline-none focus:shadow-outline`}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        value={formattedValue}
        onBlur={onBlur}
      />
      {isInvalid && <small className="text-red-500">{errMessage}</small>}
    </>
  );
};

export default BaseInput;
