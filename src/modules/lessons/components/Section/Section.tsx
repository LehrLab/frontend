import './Section.scss';
import { CourseSection } from '../../types/CourseSection';
import * as React from 'react';
import { CourseItem } from '../CourseItem/CourseItem';
import { useRef } from 'react';
import { useState, useEffect } from 'react';

type SectionProps = {
  sectionData: CourseSection;
};

export const Section: React.FC<SectionProps> = ({ sectionData }) => {
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScrollLeft = () => {
    if (itemsContainerRef.current) {
      const firstItem = itemsContainerRef.current.querySelector('.course');
      if (firstItem) {
        const itemWidth = firstItem.getBoundingClientRect().width;
        itemsContainerRef.current.scrollBy({ left: -(itemWidth + 24), behavior: 'smooth' });
      }
    }
  };

  const handleScrollRight = () => {
    if (itemsContainerRef.current) {
      const firstItem = itemsContainerRef.current.querySelector('.course');
      if (firstItem) {
        const itemWidth = firstItem.getBoundingClientRect().width;
        itemsContainerRef.current.scrollBy({ left: itemWidth + 24, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (itemsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = itemsContainerRef.current;
      const tolerance = 1;

      setShowLeftArrow(scrollLeft > tolerance);

      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - tolerance);
    }
  };

  useEffect(() => {
    const container = itemsContainerRef.current;
    if (container) {
      handleScroll();
      container.addEventListener('scroll', handleScroll);

      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [sectionData]);

  return (
    <div className='section'>
      <div className='section__top'>
        <div className='section__heading'>{sectionData.title}</div>
        <button className='section__button--more'>Переглянути всі</button>
      </div>
      <div className='section__container'>
        <div className='section__scroll-buttons'>
          {showLeftArrow && (
            <button
              className='section__scroll-button section__scroll-button--left'
              onClick={handleScrollLeft}
            ></button>
          )}
          {showRightArrow && (
            <button
              className='section__scroll-button section__scroll-button--right'
              onClick={handleScrollRight}
            ></button>
          )}
        </div>
        <div
          className='section__items'
          ref={itemsContainerRef}
        >
          {sectionData.courses.map((course) => (
            <CourseItem
              courseInfo={course}
              key={course.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
