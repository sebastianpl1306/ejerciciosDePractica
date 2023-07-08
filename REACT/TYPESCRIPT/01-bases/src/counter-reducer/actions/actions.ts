import { CounterAction, CounterActionType } from '../interfaces';

export const doReset = (): CounterAction =>({
    type: CounterActionType.RESET
});

export const doIncreaseBy = (value: number): CounterAction =>({
    type: CounterActionType.INCREASE_BY,
    payload:{
        value
    }
});

export const doPreviousCounter = (): CounterAction =>({
    type: CounterActionType.PREVIOUS_COUNTER
});