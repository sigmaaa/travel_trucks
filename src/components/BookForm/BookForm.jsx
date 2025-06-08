import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={BookSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor={emailId}>Email</label>
            <Field type="email" name="email" id={emailId} />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor={dateId}>Booking Date</label>
            <Field type="date" name="date" id={dateId} />
            <ErrorMessage name="date" component="div" />
          </div>

          <div>
            <label htmlFor={commentId}>Comment</label>
            <Field as="textarea" name="comment" id={commentId} rows="4" />
            <ErrorMessage name="comment" component="div" />
          </div>

          <button type="submit">Send</button>
        </Form>
      </Formik>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default BookForm;
