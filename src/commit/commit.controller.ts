import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommitPayload, CommitResponse } from './dto/commit.dto';
import { CommitService } from './commit.service';

@ApiTags('commit')
@Controller('commit')
export class CommitController {
  constructor(private readonly commit: CommitService) { }

  @Post('/commit')
  @ApiOperation({ description: '인증을 진행합니다.' })
  async createCommit(@Body() commitPayload: CommitPayload): Promise<CommitResponse> {
    const commit = await this.commit.createCommit(commitPayload);

    return commit;
  }

  // @TODO AuthGaurd
  @Get('/commit/:commitNo')
  @ApiOperation({ description: '인증 정보를 조회합니다.' })
  async getCommit(
    @Req() req: any,
    @Param('commitNo') commitNo: string
  ): Promise<CommitResponse> {
    const commit = await this.commit.getCommit(parseInt(commitNo));

    return commit;
  }

  @Post('/commit/:commitNo/comment')
  @ApiOperation({ description: '파트너의 인증에 칭찬 댓글을 추가합니다.' })
  async createComment(@Body() commitPayload: CommitPayload): Promise<CommitResponse> {
    const commit = await this.commit.createCommit(commitPayload);

    return commit;
  }
}
