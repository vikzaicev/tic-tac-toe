import {  MOVE_ORDER } from "./constants";

export function getNextMove(currentMove, playerCount, playersIsTimeOver) {
  const slisedMoveOrder = MOVE_ORDER.slice(0, playerCount).filter(simbol => !playersIsTimeOver.includes(simbol) );
  const nextIndex = slisedMoveOrder.indexOf(currentMove) + 1;
  return slisedMoveOrder[nextIndex] ?? slisedMoveOrder[0];
}

export function computeWinner(cells, secvinceSize = 5, fieldSize = 10) {
  const gap = Math.floor(secvinceSize / 2);
  function compareElements(indexes) {
    let resalt = true;
    for (let i = 1; i < indexes.length; i++) {
      resalt &&= !!cells[indexes[i]];
      resalt &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }
    return resalt;
  }
  function getSecvvinceIndexes(i) {
    const res = [
      [], // -
      [], // \
      [], // /
      [], // |
    ];
    for (let j = 0; j < secvinceSize; j++) {
      res[0].push(i - gap + j);
      res[1].push(fieldSize * (j - gap) + (j - gap) + i);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + i);
      res[3].push(fieldSize * (j - gap) + i);
    }
    const x = i % fieldSize
    if(x < gap || x >= fieldSize - gap) {
      res.shift()
      res.shift()
      res.shift()
    }
    return res;
  }
  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSecvvinceIndexes(i);
      const winnerIndexes = indexRows.find((row) => compareElements(row));
      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }
  return undefined;
}