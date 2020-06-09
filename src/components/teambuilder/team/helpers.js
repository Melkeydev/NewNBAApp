export const modeData = (playersData, mode) => {
  return playersData
    .map((player) => player[0][mode])
    .filter((value) => typeof value !== "undefined");
};

function getSum(values) {
  return values.reduce((acc, sum) => acc + sum, 0);
}

function getAverage(values) {
  return getSum(values) / values.length;
}

function getHighest(values) {
  return values.reduce((acc, value) => Math.max(acc, value), 0);
}

function getLowest(values) {
  return Math.min(...values);
}

export const all = (players, modes, sumModes) =>
  Object.keys(modes).map((mode) => {
    var data = modeData(players, mode);
    if (mode in sumModes) {
      var sum = getSum(data).toFixed(2);
    }
    var avg = getAverage(data).toFixed(2);

    return { mode, avg, sum };
  });

export const normalStats = (players, modes) => {
  const highestStatList = [];
  Object.keys(modes).map((mode) => {
    var data = modeData(players, mode);
    var highestValues = getHighest(data);
    var lowestValues = getLowest(data);
    highestStatList.push({ [mode]: { highestValues, lowestValues } });
  });
  return highestStatList;
};
