
export const validateCoachLogin = {};

validateCoachLogin.validateId = (value) => {
  return value === "" ? "Id Field is Required" : "";
}

validateCoachLogin.validatePassword = (value) => {
  return value.length < 5 || value.length > 10 ? "Password should have 5 to 10 characters" : "";
}