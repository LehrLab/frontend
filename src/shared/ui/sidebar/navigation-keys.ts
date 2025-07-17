import SquaresSVG from '../../assets/svg/squares.svg?react';
import QuestionSVG from '../../assets/svg/question.svg?react';
import FolderSVG from '../../assets/svg/folder.svg?react';

type NavigationButton = {
  href: string;
  key: string;
  imageComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  iconType: 'fill' | 'stroke';
};

export const navigationButtons: Array<NavigationButton> = [
  {
    href: 'spaces',
    key: 'SPACES',
    imageComponent: SquaresSVG,
    iconType: 'fill',
  },
  {
    href: 'faq',
    key: 'FAQ',
    imageComponent: QuestionSVG,
    iconType: 'fill',
  },
  {
    href: 'my_lessons',
    key: 'MY_LESSONS',
    imageComponent: FolderSVG,
    iconType: 'stroke',
  },
];
