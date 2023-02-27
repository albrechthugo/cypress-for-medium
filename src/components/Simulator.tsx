import * as Tabs from '@radix-ui/react-tabs';
import { Properties } from './Properties';
import { Vehicles } from './Vehicles';

type Tab = {
  value: string;
  label: string;
  component: () => JSX.Element;
};

const tabs: Tab[] = [
  {
    value: 'properties',
    label: 'Imóveis',
    component: Properties
  },
  {
    value: 'vehicles',
    label: 'Veículos',
    component: Vehicles
  }
];

export const Simulator = () => {
  return (
    <main className='w-full h-full flex items-center justify-center'>
      <Tabs.Root
        className='w-full max-w-[468px] h-3/5 bg-background rounded flex flex-col'
        defaultValue='vehicles'
      >
        <Tabs.List className='w-full h-16 flex items-center'>
          {tabs.map(({ value, label }) => (
            <Tabs.Trigger
              className='w-full h-full border-b-2 opacity-60 border-slate-400 data-[state=active]:font-bold data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:opacity-100'
              key={value}
              value={value}
            >
              {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {tabs.map(({ value, component }) => {
          const Content = component;

          return (
            <Tabs.Content
              className='w-full h-full px-6 py-10'
              key={value}
              value={value}
            >
              <Content />
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    </main>
  );
};
