import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    action.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Username
            <Field className={css.field} type="text" name="name" />
          </label>
          <label className={css.label}>
            Email
            <Field className={css.field} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.field} type="password" name="password" />
          </label>
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
