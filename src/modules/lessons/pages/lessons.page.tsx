import { FC, useState } from 'react';

type LessonsPageProps = null;

type lessonsType = 'Курси' | 'Факультативи' | 'Гуртки' | 'ГПД' | 'Індивідуальні';

export const LessonsPage: FC<LessonsPageProps> = () => {
  const [lessonsFilter, setLessonsFilter] = useState<lessonsType>('Курси');

  const filterTypes: lessonsType[] = ['Курси', 'Факультативи', 'Гуртки', 'ГПД', 'Індивідуальні'];

  return (
    <main className='lessons-page'>
      <h1>Lessons Page</h1>
      <div className='filter-panel'>
        {filterTypes.map((type) => (
          <button
            key={type}
            className={lessonsFilter === type ? 'active' : ''}
            onClick={() => setLessonsFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </main>
  );
};
