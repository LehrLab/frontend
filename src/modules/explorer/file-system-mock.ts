import { FolderNode } from './types/folder-node.type';

export const fileSystemMock: FolderNode = {
  name: 'Drive',
  type: 'folder',
  children: [
    {
      name: 'projects',
      type: 'folder',
      children: [
        {
          name: 'noodi',
          type: 'folder',
          children: [
            {
              name: 'frontend',
              type: 'folder',
              children: [
                {
                  name: 'main.ts',
                  type: 'file',
                },
              ],
            },
            {
              name: 'backend',
              type: 'folder',
              children: [
                {
                  name: 'main.py',
                  type: 'file',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'folder 2',
      type: 'folder',
      children: [],
    },
    {
      name: 'folder 3',
      type: 'folder',
      children: [],
    },
    {
      name: 'presentation.pdf',
      type: 'file',
    },
  ],
};
