const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};
  // assign to empty string if value is empty, otherwise, set to data.[value]
  // point of turning to empty string is so these values can be ran through Validator.isEmpty()
  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (!Validator.isEmpty(data.title)) {
    errors.title = 'Job title field is required';
  }

  if (!Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
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