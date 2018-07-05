import {Map} from 'immutable'
import {createStore} from "redux"

const empty = Map()

const defaultState = {
  turn: "O",
  board: empty
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
      return ({turn: state.turn === "O" ? "X": "O", board: newBoard})
    default:
      return state
  }
}

//Store
// const store = createStore(reducer)