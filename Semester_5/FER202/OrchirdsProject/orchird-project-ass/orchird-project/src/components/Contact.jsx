import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

function Contact({ isDarkMode }) {
  const { user } = useAuth();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  // console.log(user);
  const initialValues = {
    name: user ? user.displayName || "" : "",
    email: user ? user.email || "" : "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    toast.success("Thank you for your message! We will get back to you soon.");
    resetForm();
  };

  return (
    <div
      className={`py-10 mt-10 min-h-screen ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-xs italic mt-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs italic mt-2"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      rows="4"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-xs italic mt-2"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`${
                        isDarkMode ? "bg-gray-700" : "bg-blue-500"
                      } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
