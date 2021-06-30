import { Module } from '@nestjs/common';
import { ArticleTagService } from './article-tag.service';
import { ArticleTagController } from './article-tag.controller';

@Module({
  controllers: [ArticleTagController],
  providers: [ArticleTagService]
})
export class ArticleTagModule {}
