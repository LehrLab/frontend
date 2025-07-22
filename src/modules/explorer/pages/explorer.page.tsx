import { FC, useState } from 'react';
import { FolderNode } from '../types/folder-node.type';
import './explorer.page.scss';

import CreateFolderIcon from '../../../shared/assets/svg/explorer-create-folder.svg?react';
import Breadcrumb from '../components/breadcrumb/breadcrumb';
import ButtonGoBack from '../components/button-go-back/button-go-back';
import FileNodeComponent from '../components/file-node/file-node.component';
import { fileSystemMock } from '../file-system-mock';
import { PathStack } from '../path-stack';

function navigateToTheFolder(root: FolderNode, path: string[]): FolderNode {
  let current = root;

  for (const part of path) {
    const found = current.children.find((child): child is FolderNode => child.type === 'folder' && child.name === part);

    if (!found) break;
    current = found;
  }

  return current;
}

export const ExplorerPage: FC = () => {
  const [explorerTree, setExplorerTree] = useState<FolderNode>(fileSystemMock);
  const [openedFolder, setOpenedFolder] = useState<FolderNode>(explorerTree);
  const [pathStack] = useState(() => new PathStack());
  const [selectedNodeName, setSelectedNodeName] = useState<string | null>(null);

  const handleFolderClick = (folderName: string) => {
    pathStack.append(folderName);
    const path = pathStack.getPath();
    const folder = navigateToTheFolder(explorerTree, path);
    setOpenedFolder(folder);
  };

  const handleBack = () => {
    pathStack.pop();
    const path = pathStack.getPath();
    const folder = navigateToTheFolder(explorerTree, path);
    setOpenedFolder(folder);
  };

  const handleCreateFolder = () => {
    const folderName = prompt('Введіть імʼя для папки');
    if (!folderName) return;

    const newTree = structuredClone(explorerTree);
    const path = pathStack.getPath();
    const targetFolder = navigateToTheFolder(newTree, path);

    if (targetFolder.children.some((child) => child.name === folderName)) {
      alert('Папка з таким імʼям вже існує!');
      return;
    }

    targetFolder.children.push({
      name: folderName,
      type: 'folder',
      children: [],
    });

    setExplorerTree(newTree);
    setOpenedFolder(targetFolder);
  };

  const handleDeleteNode = (nodeName: string) => {
    if (!confirm(`Видалити "${nodeName}"?`)) return;

    const newTree = structuredClone(explorerTree);
    const path = pathStack.getPath();
    const targetFolder = navigateToTheFolder(newTree, path);
    const index = targetFolder.children.findIndex((child) => child.name === nodeName);

    if (index === -1) return;

    targetFolder.children.splice(index, 1);

    setExplorerTree(newTree);
    setOpenedFolder(targetFolder);
  };

  return (
    <main className='explorer-page'>
      <header className='explorer-page__header header'>
        <h1>Мої заняття</h1>

        <img
          src='https://freesvg.org/img/abstract-user-flat-3.png'
          width='40px'
        />
      </header>

      <Breadcrumb
        pathStack={pathStack}
        explorerTree={explorerTree}
        setOpenedFolder={setOpenedFolder}
        navigateToTheFolder={navigateToTheFolder}
      />

      <div>
        <button
          onClick={() => {
            if (!selectedNodeName) return;

            handleDeleteNode(selectedNodeName);
            setSelectedNodeName(null);
          }}
          disabled={!selectedNodeName}
        >
          Видалити
        </button>
      </div>

      <div className='explorer'>
        {pathStack.getPath().length > 0 && (
          <ButtonGoBack
            pathStack={pathStack}
            handleBack={handleBack}
          />
        )}

        {openedFolder.children.map((fileNode) => {
          const isSelected = fileNode.name === selectedNodeName;

          return (
            <FileNodeComponent
              fileNode={fileNode}
              isSelected={isSelected}
              setSelectedNodeName={setSelectedNodeName}
              handleFolderClick={handleFolderClick}
            />
          );
        })}

        <button
          className='explorer__create-folder'
          onClick={handleCreateFolder}
        >
          <CreateFolderIcon />
        </button>
      </div>
    </main>
  );
};
export { PathStack };
