const feetToMeters = (value) => (value*0.3048);
const metersToFeet = (value) => (value*3.28084);
const milesToKm = (value) => (value*1.60934);
const kmToMiles = (value) => (value*0.621371)

exports.calculate = function (method, value){
    if (method == 'feetToMeters'){
        return feetToMeters(value)
    }
    if (method == 'metersToFeet'){
        return metersToFeet(value)
    }
    if (method == 'milesToKm'){
        return milesToKm(value)
    }
    if (method == 'kmToMiles'){
        return kmToMiles(value)
    }
};
