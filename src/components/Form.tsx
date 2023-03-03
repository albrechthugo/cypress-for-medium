import CurrencyInput from 'react-currency-input-field';
import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';
import { formatCurrency } from '../utils';
import { useFees } from '../hooks';

export enum LoanTypeLabel {
  VEHICLES = 'veículo',
  PROPERTIES = 'imóvel'
}

type FormProps = {
  anualFee: number;
  maxMonths: number;
  minMonths: number;
  type: LoanTypeLabel;
};

export const Form = ({ anualFee, minMonths, maxMonths, type }: FormProps) => {
  const [month, setMonth] = useState(24);
  const [amount, setAmount] = useState(0);
  const loanValue = useFees({ anualFee, months: month, initialValue: amount });

  return (
    <form className='w-full h-full flex flex-col items-start'>
      <span className='text-zinc-200 font-bold mb-2'>Em {month} meses...</span>

      <Slider.Root
        aria-label='month'
        className='relative flex items-center select-none touch-none w-full h-2'
        defaultValue={[24]}
        min={minMonths}
        max={maxMonths}
        step={12}
        onValueChange={([value]: number[]) => {
          setMonth(value);
        }}
      >
        <Slider.Track className='bg-slate-400 relative grow rounded-full h-1'>
          <Slider.Range className='absolute bg-primary rounded-full h-full' />
        </Slider.Track>

        <Slider.Thumb className='cursor-pointer block w-5 h-5 bg-zinc-200 rounded-full' />
      </Slider.Root>

      <fieldset className='flex flex-col mt-8'>
        <label
          htmlFor='amount'
          className='text-zinc-200 font-bold mb-2'
        >
          O valor de:
        </label>

        <CurrencyInput
          defaultValue={amount}
          maxLength={10}
          className='w-60 h-12 rounded px-4 bg-gray-600'
          intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
          allowNegativeValue={false}
          onValueChange={(value: string | undefined) => {
            if (!value) {
              setAmount(0);
            }

            const parsedValue = value?.replace(',', '.');
            setAmount(+parsedValue!);
          }}
        />
      </fieldset>

      <span className='text-zinc-200 font-light  mt-6'>com um juros de {anualFee}% ao ano...</span>

      <span className='text-xl my-5 leading-9'>
        Você pagará em seu <strong className='text-primary'>{type}</strong>:
        <br />
        <span className='text-2xl font-bold w-full md:text-3xl text-green-500'>
          {formatCurrency(loanValue || 0)}
        </span>
      </span>

      <button
        type='button'
        className='bg-primary rounded font-bold w-full h-14 mt-auto md:mt-8 hover:bg-[#2dbfff] duration-500 disabled:bg-gray-500 disabled:cursor-not-allowed'
        disabled={!amount}
      >
        Eu quero
      </button>
    </form>
  );
};
