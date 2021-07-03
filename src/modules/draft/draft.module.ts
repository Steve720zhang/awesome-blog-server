import { Module } from '@nestjs/common';
import { DraftService } from './draft.service';
import { DraftController } from './draft.controller';

@Module({
  controllers: [DraftController],
  providers: [DraftService]
})
export class DraftModule {}
