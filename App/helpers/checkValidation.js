export const checkEmail = email => {
  let isValid = false;
  const VALID_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if (email.match(VALID_EMAIL_REGEX)) {
    isValid = true;
  }

  return isValid;
}