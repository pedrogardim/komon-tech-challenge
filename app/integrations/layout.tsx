'use client';

interface IntegrationsLayoutProps {
  children: React.ReactNode;
}

const IntegrationsLayout: React.FC<IntegrationsLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col w-full flex-1">
      <h1 className="text-4xl uppercase font-bold">Integrations</h1>
      <div className="relative flex flex-col flex-1 items-center w-full my-1 py-2">
        {children}
      </div>
    </div>
  );
};

export default IntegrationsLayout;
