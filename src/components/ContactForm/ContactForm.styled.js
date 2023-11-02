import { Form, Field, ErrorMessage } from 'formik';
import { styled } from 'styled-components';

export const FormContainer = styled(Form)`
  margin-top: ${props => props.theme.spacing(3)}; //15px
  margin-bottom: ${props => props.theme.spacing(3)}; //15px
  padding: 0 0 12px 12px;
  border: ${props => props.theme.borders.normal} black;
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const FormLabel = styled.label`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled(Field)`
  width: 200px;
  border: ${props => props.theme.borders.normal} gray;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.middle};
  border: ${props => props.theme.borders.normal} grey;
  cursor: pointer;
  &:hover {
    background-color: navy;
    color: ${props => props.theme.colors.white};
  }
  margin-top: ${props => props.theme.spacing(3)}; //15px
`;

export const ErrorText = styled(ErrorMessage)`
  color: #a302dd;
  font-weight: 500;
`;
