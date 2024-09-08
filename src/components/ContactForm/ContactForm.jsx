import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import css from './ContactForm.module.css'

const contactSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Неправильний формат номера телефону.")
    .min(9, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
});
const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd(values);
    actions.resetForm();
  };

  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
      
    >
      <Form className={css.labelText}>
        <label htmlFor="name" >name</label>
        <Field type="text" name="name" className={css.contactItem}/>

        <label htmlFor="userContacId">namber phone</label>
        <Field type="text" name="number" className={css.contactItem}/>

        <button type="submit"> add contact</button>
      </Form>
      
    </Formik>
  );
}