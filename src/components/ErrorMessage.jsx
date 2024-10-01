const ErrorMessage = ({ errors, fieldName }) => {
  if (!errors[fieldName]) return null;

  let message = '';
  switch (errors[fieldName].type) {
    case 'required':
      message = errors[fieldName].message || 'This field is required';
      break;
    case 'pattern':
      message = errors[fieldName].message || 'Please enter a valid email adress';
      break;
    default:
      message = 'An error occurred';
  }

  if (fieldName == 'consent') message = 'To submit this form, please consent to being contacted';

  return <span role="alert">{message}</span>;
};

export default ErrorMessage;
