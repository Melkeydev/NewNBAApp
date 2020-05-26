function modeData(playersData, mode) {
  return playersData
    .map((player) => player[0][mode])
    .filter((value) => typeof value !== "undefined");
}

function getSum(values) {
  return values.reduce((acc, sum) => acc + sum, 0);
}

function getAverage(values) {
  return getSum(values) / values.length;
}

export const all = (players, modes) =>
  Object.keys(modes).map((mode) => {
    var data = modeData(players, mode);
    var avg = getAverage(data);

    return { mode, avg };
  });
