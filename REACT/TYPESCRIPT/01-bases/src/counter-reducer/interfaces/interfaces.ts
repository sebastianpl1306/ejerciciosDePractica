export interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

export type CounterAction = 
 | { type: CounterActionType.INCREASE_BY, payload: { value: number} }
 | { type: CounterActionType.RESET}
 | { type: CounterActionType.PREVIOUS_COUNTER}

export enum CounterActionType {
    RESET = 'reset',
    INCREASE_BY = 'increaseBy',
    PREVIOUS_COUNTER = 'previousCounter'
}