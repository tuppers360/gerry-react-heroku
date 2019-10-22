import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("Submitted Successfully", values, errors);
        setIsSubmitting(false);
      } else {
        console.log("NOT Submitted Successfully", values, errors);
        setIsSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values]);

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors
  };
};

export default useForm;
