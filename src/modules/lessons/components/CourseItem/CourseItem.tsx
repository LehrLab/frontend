import * as React from 'react';
import { Course } from '../../types/Course';
import './CourseItem.scss';

type CourseProps = {
  courseInfo: Course;
};

export const CourseItem: React.FC<CourseProps> = ({ courseInfo }) => {
  return (
    <div className='course'>
      <img
        src={courseInfo.imageUrl ? courseInfo.imageUrl : './../../public/courseItem_background.png'}
        alt={courseInfo.subject}
        className='course__img'
      />
      <div className='course__grade'>{courseInfo.grade}</div>
      <div className='course__info'>
        <div className='course__subject'>{courseInfo.subject}</div>
        <div className='course__teacher'>{courseInfo.teacher}</div>
      </div>
    </div>
  );
};
