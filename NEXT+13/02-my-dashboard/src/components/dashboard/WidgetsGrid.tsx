'use client'
import { IoCalculator } from 'react-icons/io5';
import { SimpleWidget } from './SimpleWidget';
import { useAppSelector } from '@/store/hooks';

export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap items-center justify-center p-2">
        <SimpleWidget title={`${count}`} href='/dashboard/counter' icon={<IoCalculator size={40}/>} label='Contador' subTitle='Productos del contador'/>
    </div>
  )
}