import { Dispatch, FC, SetStateAction } from 'react';
import { FileSystemNode } from '../../types/file-system-node.type';

import FolderIcon from '../../../../shared/assets/svg/explorer-folder.svg?react';
import FileIcon from '../../../../shared/assets/svg/explorer-file.svg?react';

interface FileNodeComponentProps {
  fileNode: FileSystemNode;
  isSelected: boolean;
  setSelectedNodeName: Dispatch<SetStateAction<string>>;
  handleFolderClick: (folderName: string) => void;
}

const FileNodeComponent: FC<FileNodeComponentProps> = ({
  fileNode,
  isSelected,
  setSelectedNodeName,
  handleFolderClick,
}) => {
  return fileNode.type === 'folder' ? (
    <div
      className={`explorer__file-node file-node file-node${isSelected && '--selected'}`}
      key={fileNode.name}
      onClick={() => setSelectedNodeName(fileNode.name)}
      onDoubleClick={() => handleFolderClick(fileNode.name)}
    >
      <FolderIcon />

      <p>{fileNode.name}</p>
    </div>
  ) : (
    <div
      className={`explorer__file-node file-node file-node${isSelected && '--selected'}`}
      key={fileNode.name}
      onClick={() => setSelectedNodeName(fileNode.name)}
    >
      <FileIcon />

      <p>{fileNode.name}</p>
    </div>
  );
};

export default FileNodeComponent;
