import fs from 'node:fs';
import path from 'node:path';

export function toLibsqlFileUrl(inputPath: string): { filePath: string; url: string } {
  const filePath = inputPath.startsWith('file:') ? inputPath.replace(/^file:/, '') : inputPath;
  const absolutePath = path.resolve(filePath);

  if (!fs.existsSync(path.dirname(absolutePath))) {
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  }

  return {
    filePath: absolutePath,
    url: `file:${absolutePath}`
  };
}
