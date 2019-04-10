const Validator = require('validator');

module.exports = function validateRegister(data) {
    let errors = {};

      if (!Validator.isLength(data.fristName, { min: 2, max: 30 })) {
        errors.fristName = 'Frist Name must be between 2 and 30 characters';
      }
    
      if (Validator.isEmpty(data.fristName)) {
        errors.fristName = 'Frist Name field is required';
      }

      if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
        errors.lastName = 'Last Name must be between 2 and 30 characters';
      }

      if (Validator.isEmpty(data.lastName)) {
        errors.lastName = 'Last Name field is required';
      }

      if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
      }
    
      if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
      }
    
      if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
      }
    
      if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
      }
    
      if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required';
      }
    
      if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
      }
    
      return {
        errors
      };
}