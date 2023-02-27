export const formatCurrency = (value: number): string =>
  Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(value);
