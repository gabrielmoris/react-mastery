/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import Button from "../button/button.component";
import { FormEvent, ReactNode } from "react";

interface FormIconContainerProps {
  children?: ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form<FormIconContainerProps>`
  height: 100px;
  min-width: 500px;
`;

export const PaymentButton = styled<any>(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
