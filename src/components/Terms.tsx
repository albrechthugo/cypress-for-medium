export const Terms = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <h1 className='text-2xl font-bold'>
        Para começar, aqui vão algumas informações{' '}
        <strong className='text-primary'>importantes:</strong>
      </h1>

      <p className='mt-6 text-sm'>
        Todos os valores simulados por essa aplicação podem sofrer variações ao longo do tempo, e
        também estão sujeitos a mudanças após análise de crédito dos usuários.
        <strong className='text-primary'>
          {' '}
          Essa aplicação é apenas um experimento e não reflete a realidade.{' '}
        </strong>
      </p>

      {children}
    </>
  );
};
