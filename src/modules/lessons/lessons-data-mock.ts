import { CourseSection } from './types/CourseSection';
export const allCourseSections: CourseSection[] = [
  {
    type: 'Курси',
    title: 'Мої курси',
    courses: [
      { id: '1', grade: '11-А', subject: 'Українська мова', teacher: 'Стефаненко В.О.' },
      { id: '2', grade: '11-Б', subject: 'Українська мова', teacher: 'Стефаненко В.О.' },
      { id: '3', grade: '11-А', subject: 'Українська література', teacher: 'Стефаненко В.О.' },
      { id: '11', grade: '11-А', subject: 'Українська мова', teacher: 'Стефаненко В.О.' },
      { id: '21', grade: '11-Б', subject: 'Українська мова', teacher: 'Стефаненко В.О.' },
      { id: '31', grade: '11-А', subject: 'Українська література', teacher: 'Стефаненко В.О.' },
      { id: '12', grade: '11-А', subject: 'Українська мова', teacher: 'Стефаненко В.О.' },
      { id: '22', grade: '11-Б', subject: 'Українська мова', teacher: 'Стефаненко В.О.' },
      { id: '32', grade: '11-А', subject: 'Українська література', teacher: 'Стефаненко В.О.' },
    ],
  },
  {
    type: 'Курси',
    title: 'Курси мого класу',
    courses: [
      { id: '4', grade: '9-А', subject: 'Алгебра', teacher: 'Іванченко В.С.' },
      { id: '5', grade: '9-А', subject: 'Геометрія', teacher: 'Іванченко В.С.' },
      { id: '6', grade: '9-А', subject: 'Біологія', teacher: 'Симоненко Л.Г.' },
      { id: '4', grade: '9-А', subject: 'Алгебра', teacher: 'Іванченко В.С.' },
      { id: '5', grade: '9-А', subject: 'Геометрія', teacher: 'Іванченко В.С.' },
      { id: '6', grade: '9-А', subject: 'Біологія', teacher: 'Симоненко Л.Г.' },
      { id: '4', grade: '9-А', subject: 'Алгебра', teacher: 'Іванченко В.С.' },
      { id: '5', grade: '9-А', subject: 'Геометрія', teacher: 'Іванченко В.С.' },
      { id: '6', grade: '9-А', subject: 'Біологія', teacher: 'Симоненко Л.Г.' },
    ],
  },
  {
    type: 'Курси',
    title: 'Усі курси закладу',
    courses: [
      { id: '7', grade: '10-Б', subject: 'Українська мова', teacher: 'Стефаненко В.О.' },
      { id: '8', grade: '10-А', subject: 'Українська мова', teacher: 'Стефаненко В.О.' },
    ],
  },
  {
    type: 'Факультативи',
    title: 'Мої факультативи',
    courses: [
      { id: '19', grade: '10-А', subject: 'Фінансова грамотність', teacher: 'Петренко А.О.' },
      { id: '110', grade: '9-Б', subject: 'Культура мовлення', teacher: 'Іващенко І.В.' },
    ],
  },
  {
    type: 'Факультативи',
    title: 'Факультативи школи',
    courses: [
      { id: '9', grade: '10-А', subject: 'Фінансова грамотність', teacher: 'Петренко А.О.' },
      { id: '10', grade: '9-Б', subject: 'Культура мовлення', teacher: 'Іващенко І.В.' },
    ],
  },
  {
    type: 'Гуртки',
    title: 'Мої гуртки',
    courses: [
      { id: '11', grade: '6-Б', subject: 'Театр', teacher: 'Мельник С.М.' },
      { id: '12', grade: '7-А', subject: 'STEM-гурток', teacher: 'Олійник Т.Г.' },
    ],
  },
  {
    type: 'Гуртки',
    title: 'Гуртки за інтересами',
    courses: [
      { id: '11', grade: '6-Б', subject: 'Театр', teacher: 'Мельник С.М.' },
      { id: '12', grade: '7-А', subject: 'STEM-гурток', teacher: 'Олійник Т.Г.' },
    ],
  },
  {
    type: 'ГПД',
    title: 'Мої ГПД',
    courses: [
      { id: '13', grade: '1-А', subject: 'ГПД 1-А', teacher: 'Литвиненко О.П.' },
      { id: '14', grade: '2-Б', subject: 'ГПД 2-Б', teacher: 'Коваль С.В.' },
    ],
  },
  {
    type: 'ГПД',
    title: 'Групи подовженого дня',
    courses: [
      { id: '13', grade: '1-А', subject: 'ГПД 1-А', teacher: 'Литвиненко О.П.' },
      { id: '14', grade: '2-Б', subject: 'ГПД 2-Б', teacher: 'Коваль С.В.' },
    ],
  },
  {
    type: 'Індивідуальні',
    title: 'Мої індивідуальні заняття',
    courses: [
      { id: '15', grade: '8-А', subject: 'Математика (індив.)', teacher: 'Шевченко В.О.' },
      { id: '16', grade: '9-Б', subject: 'Англійська (індив.)', teacher: 'Гриненко Л.М.' },
    ],
  },
  {
    type: 'Індивідуальні',
    title: 'Індивідуальні заняття мого класу',
    courses: [
      { id: '15', grade: '8-А', subject: 'Математика (індив.)', teacher: 'Шевченко В.О.' },
      { id: '16', grade: '9-Б', subject: 'Англійська (індив.)', teacher: 'Гриненко Л.М.' },
    ],
  },
];
