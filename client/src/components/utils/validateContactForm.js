export default function validate(values) {
  let errors = {};

  //email
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  //email
  // if (!values.password) {
  //   errors.password = "Password is required";
  // } else if (values.password.length < 10) {
  //   errors.password = "Password needs to be 10 or more characters";
  // }
  //name
  if (!values.name) {
    errors.name = "Please enter your name";
  }
  //message
  if (!values.message) {
    errors.message = "Please add your message";
  }
  return errors;
}
