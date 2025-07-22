import { FC } from 'react';
import FolderGoBackSVG from '../../../../shared/assets/svg/folder-go-back.svg?react';
import { PathStack } from '../../pages/explorer.page';

interface ButtonGoBackProps {
  pathStack: PathStack;
  handleBack: () => void;
}

const ButtonGoBack: FC<ButtonGoBackProps> = ({ pathStack, handleBack }) => {
  return (
    <button
      className='explorer__go-back'
      onClick={handleBack}
      disabled={pathStack.getPath().length === 0}
    >
      <FolderGoBackSVG />
      Назад
    </button>
  );
};

export default ButtonGoBack;
