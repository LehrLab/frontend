import { FC, useState } from 'react';
import './lessons.page.scss';
import { Button } from '../components/Button';
import classNames from 'classnames';
import { lessonsType } from '../types/lessons.type';
import { allCourseSections } from '../lessons-data-mock';
import { Section } from '../components/Section';

type LessonsPageProps = null;

export const LessonsPage: FC<LessonsPageProps> = () => {
  const [lessonsFilter, setLessonsFilter] = useState<lessonsType>('Курси');

  const filterTypes: lessonsType[] = ['Курси', 'Факультативи', 'Гуртки', 'ГПД', 'Індивідуальні'];

  const filteredSections = allCourseSections.filter((course) => course.type === lessonsFilter);

  return (
    <main className='lessons-page'>
      <div className='lessons-page__top-bar'>
        <h1 className='lessons-page__heading'>Простори</h1>
        <Button buttonText='Додати власний курс' />
      </div>
      <div className='lessons-page__filter-panel'>
        {filterTypes.map((type) => (
          <button
            key={type}
            className={classNames('lessons-page__filter-button', {
              'lessons-page__filter-button--active': lessonsFilter === type,
            })}
            onClick={() => setLessonsFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className='lessons-page__content'>
        {filteredSections.map((section) => (
          <Section sectionData={section} />
        ))}
      </div>
    </main>
  );
};
