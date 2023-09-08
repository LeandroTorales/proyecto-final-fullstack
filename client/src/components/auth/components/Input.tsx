import React from "react";
import styled from "styled-components";

interface Props {
  type: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  nameOfLabel: string;
  value: string;
  isError: boolean | string | undefined;
  errorMessage: string | undefined;
  min?: number;
  max?: number;
}

const FormField = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  font-size: 1.3rem;
  input {
    font-size: 1.2rem;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

const Input = ({
  type,
  name,
  onChange,
  onBlur,
  nameOfLabel,
  value,
  isError,
  errorMessage,
  min,
  max,
}: Props) => {
  return (
    <FormField>
      <label htmlFor={name}>{nameOfLabel}</label>
      <input
        type={type}
        name={name}
        placeholder={nameOfLabel}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="true"
        min={min}
        max={max}
      />
      {isError ? <p>{errorMessage}</p> : null}
    </FormField>
  );
};

export default Input;
