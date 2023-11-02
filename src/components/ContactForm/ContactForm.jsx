import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormContainer,
  FormLabel,
  FormInput,
  Button,
  ErrorText,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required('please enter a name'),
  number: yup.number().required('please enter a number'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    //тут reset полів
    const { name, number } = values;
    console.log(name, number);
    onSubmit(name, number);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormContainer>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name"
            required
          />
          <ErrorText name="name" component="p" />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Nubmer"
          />
          <ErrorText name="number" component="p" />
        </FormLabel>

        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
};
