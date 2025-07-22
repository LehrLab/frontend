import { Dispatch, FC, SetStateAction } from 'react';
import { PathStack } from '../../pages/explorer.page';
import { FolderNode } from '../../types/folder-node.type';

interface BreadcrumbProps {
  pathStack: PathStack;
  setOpenedFolder: Dispatch<SetStateAction<FolderNode>>;
  explorerTree: FolderNode;
  navigateToTheFolder: (root: FolderNode, path: string[]) => FolderNode;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ pathStack, setOpenedFolder, explorerTree, navigateToTheFolder }) => {
  return (
    <div className='breadcrumb'>
      <span>Шлях: </span>

      <span
        onClick={() => {
          pathStack.reset();
          setOpenedFolder(explorerTree);
        }}
        style={{ cursor: 'pointer', color: 'blue' }}
      >
        Мій диск
      </span>
      {pathStack.getPath().map((folder, index) => (
        <span key={index}>
          {' > '}
          <span
            onClick={() => {
              const newPath = pathStack.getPath().slice(0, index + 1);
              pathStack.stack = ['/', ...newPath];
              const folderNode = navigateToTheFolder(explorerTree, newPath);

              setOpenedFolder(folderNode);
            }}
            style={{ cursor: 'pointer', color: 'blue' }}
          >
            {folder}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
