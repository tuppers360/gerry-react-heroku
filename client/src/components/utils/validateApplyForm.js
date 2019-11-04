export default function validate(values) {
  let errors = {};

  //First Name
  if (!values.firstName) {
    errors.firstName = "Please enter your first name";
  }
  //Last Name
  if (!values.lastName) {
    errors.lastName = "Please enter your last name";
  }
  //Date Of Birth
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Please enter your date of birth format dd/mm/yyyy";
  } else if (
    !/^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/.test(
      values.dateOfBirth
    )
  ) {
    errors.dateOfBirth = "Please enter your date of birth format dd/mm/yyyy";
  }
  //email
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  //Address
  if (!values.address) {
    errors.address = "Please enter your address";
  }
  //First Name
  if (!values.postCode) {
    errors.postCode = "Please enter your post code";
  }
  //message
  if (!values.apply) {
    errors.apply = "Please add your message";
  }

  return errors;
}
