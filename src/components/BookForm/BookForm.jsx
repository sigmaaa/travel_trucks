import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./BookForm.module.css";

const BookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  date: Yup.date().required("Required"),
  comment: Yup.string().max(300, "Too long"),
});

const BookForm = () => {
  const nameId = useId();
  const emailId = useId();
  const dateId = useId();
  const commentId = useId();

  const initialValues = {
    name: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    console.log("Booking:", values);
    toast.success("Booking sent!");
    actions.resetForm();
  };

  return (
    <section className={css.container}>
      <div className={css.header}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.desc}>Stay connected! We are always ready to help you.</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={BookSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameId}>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameId}
              placeholder="Name*"
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>

          <label className={css.label} htmlFor={emailId}>
            <Field
              className={css.input}
              type="email"
              name="email"
              id={emailId}
              placeholder="Email*"
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </label>

          <label className={css.label} htmlFor={dateId}>
            <Field
              className={css.input}
              type="date"
              name="bookingDate"
              id={dateId}
            />
            <ErrorMessage name="bookingDate" component="span" className={css.error} />
          </label>

          <label className={css.label} htmlFor={commentId}>
            <Field
              className={`${css.input} ${css.textarea}`}
              as="textarea"
              name="comment"
              id={commentId}
              placeholder="Comment"
              rows="4"
            />
            <ErrorMessage name="comment" component="span" className={css.error} />
          </label>

          <button className={css.sendBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>

      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
};

export default BookForm;
