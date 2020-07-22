export const modeData = (playersData, mode) => {
  return playersData[0].map((player) => {
    return player.stats[0][mode];
  });
};

export const testData = (player, mode, id) => {
  return Object.keys(mode).map((mode_) => {
    if (player.id === id) {
      const data = player.stats[0][mode_];
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
  Object.keys(modes).forEach((mode) => {
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

export const calculatePER = (players, weights) => {};

export const createMissStats = (players, weights) => {
  return players.map((player) => {
    const FG_Miss = (player[0].fga - player[0].fgm).toFixed(2);
    const FT_Miss = player[0].fta - player[0].ftm;
    weights["FG_Miss"] = Number(FG_Miss);
    weights["FT_Miss"] = FT_Miss;
    Object.keys(weights).forEach((key) => {
      const value = weights[key];
      Object.assign(weights, { [key]: value });
    });
    return weights;
  });
};
