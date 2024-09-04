import { Field, Formik } from "formik";
import { useId } from "react";
import *as Yup from 'yup'

const contactSchema = Yup.object({
    name: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Неправильний формат номера телефону."
    )
    .min(9, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
})
const initialValues = {
    name: "",
    number: "",
}



export default function ContactForm({onAdd}) { 
    const userContacId=useId();
    const userContactNumberId = useId();


    const handleSubmit = (values, actions) => {
    
    onAdd(values);
    actions.resetForm();
    }
    
    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={contactSchema}
        >
            <form >
                <div>
                    <label htmlFor="name">name</label>
                    <Field type="text" name="contactName"/>
                </div>
                <div>
                     <label htmlFor="userContacId">namber phone</label>
                    <Field type="number" name='userContactNumberId'/>
               </div>
               
            </form>
        </Formik>
    )
}