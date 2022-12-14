// Code your solution in this file!
// const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(i) {
  return function (fare) {
    return fare * i;
  };
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(drivers, callback) {
  return callback(drivers);
}
