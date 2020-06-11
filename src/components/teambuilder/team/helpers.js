export const modeData = (playersData, mode) => {
  return playersData.map((player) => {
    return player[0][mode];
  });
};

export const testData = (player, mode, id, leagueLeaders) => {
  return Object.keys(mode).map((mode_) => {
    if (player[1].id === id) {
      const data = player[0][mode_];
      return { mode_, data };
    }
  });
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

export const createNormalData = (mode, players, league, id) => {
  return Object.keys(mode).map((mode_) => {
    let data = modeData(players, mode_, id);
    data = data[0];
    const normalData = (data - 0) / (league[mode_] - 0);

    return { mode_, normalData };
  });
};
