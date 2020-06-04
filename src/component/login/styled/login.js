import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 0px;
  margin: 0px;
  background-color: ${({ theme }) => {
    return theme.background;
  }};
`;

const LoginForm = styled.div`
  background-color: rgba(250, 250, 250, 0.05);
  width: 500px;
  height: 400px;
  display: inline-block;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
`;

const FormContainer = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const FormHeader = styled.div`
  padding: 10px;
  font-size: 2em;
  color: #fff;
`;

const FormContent = styled.div`
  display: flex;
  flex-flow: column;
`;

const FormItemContainer = styled.div`
  padding: 10px 10px 0px 10px;
`;

const Input = styled.input`
  border: none;
  padding: 0.5em;
  border-radius: 0.2em;
  outline: none;
  line-height: 0.5em;
  font-size: 1em;
  width: 20em;
`;

const ErrorContainer = styled.div`
  color: ${({ theme }) => theme.error};
  font-weight: bold;
`;

export {
  LoginContainer,
  LoginForm,
  FormContainer,
  FormHeader,
  FormContent,
  FormItemContainer,
  Input,
  ErrorContainer
};
