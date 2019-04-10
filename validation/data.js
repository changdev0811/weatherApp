const Validator = require('validator');

module.exports = function validateData(data) {
    let errors = {};
    
      if (Validator.isEmpty(data.windBearing)) {
        errors.windBearing = 'Wind Bearing field is required';
      }
    
      if (Validator.isEmpty(data.dewPoint)) {
        errors.dewPoint = 'Dew point field is required';
      }

      if (Validator.isEmpty(data.windSpeed)) {
        errors.windSpeed = 'Wind Speed field is required';
      }

      if (Validator.isEmpty(data.cloudCover)) {
        errors.cloudCover = 'Cloud Cover field is required';
      }

      if (Validator.isEmpty(data.pressure)) {
        errors.pressure = 'Pressure field is required';
      }

      if (Validator.isEmpty(data.visibility)) {
        errors.visibility = 'Visibility field is required';
      }

      if (Validator.isEmpty(data.humidity)) {
        errors.humidity= 'Humidity field is required';
      }

      if (Validator.isEmpty(data.uvIndex)) {
        errors.uvIndex = 'UV Index field is required';
      }

      return {
          errors
      }    
}