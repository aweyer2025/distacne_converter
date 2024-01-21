const distanceCal =require('./distanceCal');
console.log('10 feet is equal to',distanceCal.calculate('feetToMeters',10),'Meters');
console.log('10 meters is equal to',distanceCal.calculate('metersToFeet',10),'Feet');
console.log('10 miles is equal to',distanceCal.calculate('milesToKm',10),'Kilometers');
console.log('10 Kilometers is equal to',distanceCal.calculate('kmToMiles',10),'Miles');

