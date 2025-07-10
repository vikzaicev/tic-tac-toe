import {  MOVE_ORDER } from "./constants";

export function getNextMove(currentMove, playerCount) {
  const slisedMoveOrder = MOVE_ORDER.slice(0, playerCount);
  const nextIndex = slisedMoveOrder.indexOf(currentMove) + 1;
  return slisedMoveOrder[nextIndex] ?? slisedMoveOrder[0];
}