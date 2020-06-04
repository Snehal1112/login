import React, { useContext } from "react";
import {
  LoginContainer,
  LoginForm,
  FormContainer,
  FormHeader,
  FormContent,
  FormItemContainer,
  Input,
  ErrorContainer
} from "../styled/login";
import { ThemeContext } from "styled-components";

const login = () => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  return (
    <LoginContainer theme={themeContext}>
      <LoginForm>
        <FormContainer>
          <FormHeader> Loign </FormHeader>
          <FormContent className="formContains">
            <FormItemContainer>
              <Input placeholder="Username" type="text" />
              <ErrorContainer>
                <span>Error message</span>
              </ErrorContainer>
            </FormItemContainer>
            <FormItemContainer>
              <Input placeholder="Password" type="password" />
              <ErrorContainer>
                <span>Error message</span>
              </ErrorContainer>
            </FormItemContainer>
          </FormContent>
          <div className="formFooter">
            <button
              style={{
                outline: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5em",
                borderRadius: "2px",
                backgroundColor: themeContext.secondary
              }}
            >
              Next
            </button>
          </div>
          <ErrorContainer>
            <span>Error message</span>
          </ErrorContainer>
        </FormContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default login;
