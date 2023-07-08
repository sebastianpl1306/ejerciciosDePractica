import { CounterAction, CounterState } from '../interfaces';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState =>{
    switch (action.type) {
      case 'previousCounter':
        return{
          changes: state.changes++,
          counter: state.previous,
          previous: state.counter
        }
      case 'increaseBy':
        return {
          changes: state.changes++,
          counter: state.counter + action.payload.value,
          previous: state.counter
        };
      case 'reset':
        return{
          changes:0,
          counter: 0,
          previous: 0
        }
      default:
        return state
    }
}