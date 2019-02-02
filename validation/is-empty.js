// function for checking for blank values, empty objects, and empy strings
// if any of these conditions equate to true, isEmpty evalutes to truthy
// use !isEmpty(value) to check if value isn't empty
const isEmpty = value =>
   value === undefined ||
   value === null ||
   (typeof value === 'object' && Object.keys(value).length === 0) ||
   (typeof value === 'string' && value.trim().length === 0);

module.exports = isEmpty;