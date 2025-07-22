export class PathStack {
  stack: string[];

  constructor() {
    this.stack = ['/'];
  }

  append(folderName: string) {
    this.stack.push(folderName);
  }

  pop() {
    if (this.stack.length > 1) {
      this.stack.pop();
    }
  }

  getPath() {
    return this.stack.slice(1);
  }

  reset() {
    this.stack = ['/'];
  }
}
