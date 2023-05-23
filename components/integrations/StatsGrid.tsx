'use client';
import { formatNumber } from '@/utils/format';

import {
  useIntegrationsContext,
  Integration,
} from '@/context/integrationsContext';

const StatsGrid: React.FC = () => {
  const { newIntegration } = useIntegrationsContext();
  const data = newIntegration as Integration;

  const stats = Object.keys(data).filter(
    (field, index) =>
      !['username', 'bio', 'location', 'profile_pic', 'name', 'type'].includes(
        field
      ) && index > 4
  );

  return (
    <div className="grid grid-cols-2 grid-rows-2 col-span-2">
      {stats.map((stat, index) => {
        const style = `
            ${index === 1 || index === 3 ? 'border-l' : ''} 
            ${index === 2 || index === 3 ? 'border-t' : ''}
            ${stats.length === 3 && index === 2 ? 'col-span-2' : ''}
            ${stats.length === 2 ? 'row-span-2' : ''}`;

        const value = (data as any)[stat];
        const isNumber = !isNaN(value);
        return (
          <div
            key={stat}
            className={`flex flex-col items-center justify-center p-4 ${style}`}
          >
            <span className="text-sm uppercase text-gray-500 mb-1">
              {stat.replaceAll('_', ' ')}
            </span>
            {isNumber && (
              <span className="text-xl text-center">{formatNumber(value)}</span>
            )}
            {!isNumber && (
              <p className="text-sm text-center w-full line-clamp-3">
                {Array.isArray(value) ? value.join(', ') : `"${value}"`}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
