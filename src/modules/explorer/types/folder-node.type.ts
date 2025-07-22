import { FileSystemNode } from './file-system-node.type';

export type FolderNode = {
  name: string;
  type: 'folder';
  children: FileSystemNode[];
};
