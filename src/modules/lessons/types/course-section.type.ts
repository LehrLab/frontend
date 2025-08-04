import { Course } from './course.type';
import { lessonsType } from './lessons.type';

export type CourseSection = {
  type: lessonsType;
  title: string;
  courses: Course[];
};
