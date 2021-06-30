import { Module } from '@nestjs/common';
import { ArticleThumbService } from './article-thumb.service';
import { ArticleThumbController } from './article-thumb.controller';

@Module({
  controllers: [ArticleThumbController],
  providers: [ArticleThumbService]
})
export class ArticleThumbModule {}
