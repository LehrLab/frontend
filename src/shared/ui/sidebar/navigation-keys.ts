import SquaresSVG from '../../assets/svg/squares.svg?react';
import QuestionSVG from '../../assets/svg/question.svg?react';
import FolderSVG from '../../assets/svg/folder.svg?react';

import { LessonsPage } from '../../../modules/lessons/pages/lessons.page';
import { FAQPage } from '../../../modules/faq/pages/faq.page';
import { ExplorerPage } from '../../../modules/explorer/pages/explorer.page';

export type NavigationButton = {
  href: string;
  key: string;
  page: React.FC;
  imageComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  iconType: 'fill' | 'stroke';
};

export const navigationButtons: Array<NavigationButton> = [
  {
    href: '/spaces',
    key: 'SPACES',
    page: LessonsPage,
    imageComponent: SquaresSVG,
    iconType: 'fill',
  },
  {
    href: '/faq',
    key: 'FAQ',
    page: FAQPage,
    imageComponent: QuestionSVG,
    iconType: 'fill',
  },
  {
    href: '/my_lessons',
    key: 'MY_LESSONS',
    page: ExplorerPage,
    imageComponent: FolderSVG,
    iconType: 'stroke',
  },
];
