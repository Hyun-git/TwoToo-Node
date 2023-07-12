import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  validateFile(file: Express.MulterS3.File) {
    if (!file) {
      throw new BadRequestException('파일이 존재하지 않습니다.');
    }

    return { filePath: file.location };
  }
}
