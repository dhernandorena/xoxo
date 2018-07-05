import {Map} from 'immutable'
import {createStore} from "redux"

const empty = Map()

const defaultState = {
  turn: "O",
  board: empty,
  plays: 0
}

//Action types
const MOVE = "MOVE"

//Action creators
export const move = (turn, coord) => ({type: MOVE, turn, coord})


//Reducer
export default function reducer(state = defaultState, action) {
  // TODO
  switch(action.type){
    case MOVE:
      const newBoard = state.board.setIn(action.coord, state.turn)
      return ({turn: state.turn === "O" ? "X": "O", board: newBoard, plays: plays + 1})
    default:
      return state
  }
}

function streak (board, c1, c2, c3) {
  if (board.c1 === 'O' && board.c2 === 'O' && board.c3 === 'O') {
    return 'O'
  } else if (board.c1 === 'X' && board.c2 === 'X' && board.c3 === 'X') {
    return 'X'
  } else {
    return undefined
  }
}

function winner() {
  if (this.state.plays === 9) {
    return 'draw'
  }
  for (let i = 0; i <= 2; i++) {
    let row = streak(this.state.board, [i,0], [i,1], [i,2])
    if (row === 'O') {
      return 'O'
    } else if (row === 'X') {
      return 'X'
    }
    let col = streak(this.state.board, [0,i], [1,i], [2,i])
    if (col === 'O') {
      return 'O'
    } else if (col === 'X') {
      return 'X'
    }
  }
  let diag1 = streak(this.state.table, [0,0], [1,1] [2,2])
  if (diag1 === 'O') {
    return 'O'
  } else if (diag1 === 'X') {
    return 'X'
  }
  let diag2 = streak(this.state.table, [0,2], [1,1] [2,0])
  if (diag2 === 'O') {
    return 'O'
  } else if (diag2 === 'X') {
    return 'X'
  }
  return null
}
    
// store
// this is coded on the separate index.js page in root directory
