import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';
import { formatCurrency } from '../utils';

export const Vehicles = () => {
  const [month, setMonth] = useState(24);
  const [amount, setAmount] = useState(0);

  const handleMonth = ([value]: number[]): void => {
    setMonth(value);
  };

  const handleAmount = ({
    target: { value: amount }
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setAmount(+amount);
  };

  return (
    <form className='w-full h-full flex flex-col items-start'>
      <span className='text-zinc-200 font-bold mb-2'>Em {month} meses...</span>

      <Slider.Root
        aria-label='month'
        className='relative flex items-center select-none touch-none w-full h-2'
        defaultValue={[24]}
        onValueChange={handleMonth}
        min={12}
        max={72}
        step={12}
      >
        <Slider.Track className='bg-slate-400 relative grow rounded-full h-1'>
          <Slider.Range className='absolute bg-primary rounded-full h-full' />
        </Slider.Track>

        <Slider.Thumb className='cursor-pointer block w-5 h-5 bg-zinc-200 rounded-full' />
      </Slider.Root>

      <fieldset className='flex flex-col mt-10'>
        <label
          htmlFor='amount'
          className='text-zinc-200 font-bold mb-2'
        >
          O valor de:
        </label>

        <input
          type='number'
          className='w-60 h-12 rounded px-4 bg-gray-600'
          aria-label='amount'
          name='amount'
          style={{ appearance: 'textfield' }}
          onChange={handleAmount}
          placeholder='R$ 23.000,50'
        />
      </fieldset>

      <span className='text-zinc-200 font-light mt-5'>Com um juros de 4,99% ao ano...</span>

      <span className='text-xl font-bold my-5'>Você pagará:</span>

      <h2 className='text-4xl font-bold text-green-500'>{formatCurrency(amount)}</h2>

      <button
        type='button'
        className='bg-primary rounded font-bold w-full h-14 mt-auto hover:bg-[#2dbfff] duration-500 disabled:bg-gray-500 disabled:cursor-not-allowed'
        disabled={!amount}
      >
        Eu quero
      </button>
    </form>
  );
};