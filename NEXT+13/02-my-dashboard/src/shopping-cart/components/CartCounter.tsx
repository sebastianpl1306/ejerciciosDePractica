'use client'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addOne, initCounterState, subtractOne } from '@/store/counter/counterSlice';

interface CartCounterProps {
  initialValue?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async(): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then((res) => res.json());

  return data;
}

export const  CartCounter = ({ initialValue = 0 }: CartCounterProps) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter()
      .then( data => dispatch( initCounterState(data.count) ) );
  }, [dispatch])

  // useEffect(() => {
  //   dispatch( initCounterState(initialValue) );
  // }, [dispatch, initialValue])

  return (
    <>
        <span className="text-9xl">{ count }</span>

        <div className="flex">
        <button
            onClick={() => dispatch( addOne() )}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            +1
        </button>
        <button
            onClick={() => dispatch( subtractOne() )}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            -1
        </button>
        </div>
    </>
  )
}