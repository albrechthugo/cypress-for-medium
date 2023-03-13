import * as Checkbox from '@radix-ui/react-checkbox';
import { ArrowRightIcon, CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terms } from '../components';

export const HomePage = () => {
  const [isCheckboxAccepted, setIsCheckboxAccepted] = useState(false);
  const navigate = useNavigate();

  return (
    <main className='w-full h-full py-6 px-4 relative'>
      <Terms>
        <form className='w-full flex gap-2 mt-6'>
          <Checkbox.Root
            id='terms-checkbox'
            data-cy='terms__checkbox'
            className='bg-slate-300 w-6 h-6 data-[state=checked]:bg-primary rounded flex items-center justify-center'
            onCheckedChange={(isChecked) => {
              setIsCheckboxAccepted(isChecked.valueOf() as boolean);
            }}
          >
            <Checkbox.Indicator className='text-primary font-bold'>
              <CheckIcon color='#fff' />
            </Checkbox.Indicator>
          </Checkbox.Root>

          <label htmlFor='terms-checkbox'>Estou ciente das informações</label>
        </form>
      </Terms>

      <button
        data-cy='go-to-app__button'
        className='w-28 h-9 absolute bottom-6 gap-1 right-4 flex rounded items-center justify-center bg-primary font-bold disabled:bg-gray-500 duration-500 disabled:cursor-not-allowed'
        disabled={!isCheckboxAccepted}
        onClick={() => navigate('simulador', { state: { navigationFromHome: true } })}
      >
        Vamos lá
        <ArrowRightIcon />
      </button>
    </main>
  );
};
