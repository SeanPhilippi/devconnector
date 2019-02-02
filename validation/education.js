const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};
  // assign to empty string if value is empty, otherwise, set to data.[value]
  // point of turning to empty string is so these values can be ran through Validator.isEmpty()
  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (!Validator.isEmpty(data.school)) {
    errors.school = 'School field is required';
  }

  if (!Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }

  if (!Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Field of study field is required';
  }

  if (!Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  return {
    // equivalent of putting errors: errors
    errors,
    isValid: isEmpty(errors)
  }
} 