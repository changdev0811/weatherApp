const validInputData = (data) => {
    let errors = {};

    if(isNaN(data.humidity)) {
        errors.humidity = 'Humidity must be a number';
    }

    if(data.humidity.length === 0) {
        errors.humidity = 'Humidity is required';
    }

    if(data.humidity > 100 || data.humidity < 0) {
        errors.humidity = 'Humidity must be in range 0 to 100';
    }

    if(isNaN(data.cloudCover)) {
        errors.cloudCover = 'Cloud cover must be a number';
    }

    if(data.cloudCover.length === 0) {
        errors.cloudCover = 'Cloud Cover is required';
    }

    if(data.cloudCover > 100 || data.cloudCover < 0) {
        errors.cloudCover = 'Cloud Cover must be in range 0 to 100';
    }

    if(isNaN(data.dewPoint)) {
        errors.dewPoint = 'Dew Point Temp. must be a number';
    }

    if(data.dewPoint.length === 0) {
        errors.dewPoint = 'Dew Point Temp. is required';
    }

    if(data.dewPoint > 100 || data.dewPoint < 0) {
        errors.dewPoint = 'Dew Point Temp. must be in range 0 to 100';
    }

    if(isNaN(data.pressure)) {
        errors.pressure = 'Pressure must be a number';
    }

    if(data.pressure.length === 0) {
        errors.pressure = 'Pressure is required';
    }

    if(data.pressure > 1070 || data.pressure < 920) {
        errors.pressure = 'Pressure must be in range 920 to 1070';
    }

    if(isNaN(data.uvIndex)) {
        errors.uvIndex = 'UV Index must be a number';
    }

    if(data.uvIndex.length === 0) {
        errors.uvIndex = 'UV Index is required';
    }

    if(data.uvIndex > 11 || data.uvIndex < 0) {
        errors.uvIndex = 'UV Index must be in range 0 to 11';
    }

    if(isNaN(data.visibility)) {
        errors.visibility = 'Visibility must be a number';
    }

    if(data.visibility.length === 0) {
        errors.visibility = 'Visibility is required';
    }

    if(data.visibility < 0) {
        errors.visibility = 'Visibility must be 0 or greater';
    }

    if(isNaN(data.windBearing)) {
        errors.windBearing = 'Wind Direction must be a number';
    }

    if(data.windBearing.length === 0) {
        errors.windBearing = 'Wind Direction is required';
    }

    if(data.windBearing > 360 || data.windBearing < 0) {
        errors.windBearing = 'Wind Direction must be in range 0 to 360';
    }

    if(isNaN(data.windSpeed)) {
        errors.windSpeed = 'Wind Speed must be a number';
    }

    if(data.windSpeed.length === 0) {
        errors.windSpeed = 'Wind Speed is required';
    }

    if(data.windSpeed < 0) {
        errors.windSpeed = 'Wind Speed must be 0 or greater';
    }

    return {
        errors
    }   
}

export default validInputData;