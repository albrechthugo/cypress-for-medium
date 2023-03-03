import { useMemo } from 'react';

type UseFeesProps = {
  anualFee: number;
  initialValue: number;
  months: number;
};

export const useFees = ({ anualFee, initialValue, months }: UseFeesProps) => {
  const feesValue = useMemo(() => {
    const years = months / 12;
    return initialValue * (anualFee / 100) * years;
  }, [months, initialValue]);

  return feesValue + initialValue;
};
