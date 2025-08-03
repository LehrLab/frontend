import { Course } from './Course';
import { lessonsType } from './lessonsType';

export interface CourseSection {
  type: lessonsType;
  title: string;
  courses: Course[];
}
