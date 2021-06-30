import { Module } from '@nestjs/common';
import { ArticleGroupService } from './article-group.service';
import { ArticleGroupController } from './article-group.controller';

@Module({
  controllers: [ArticleGroupController],
  providers: [ArticleGroupService]
})
export class ArticleGroupModule {}
