import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleTagService } from './article-tag.service';
import { ArticleTagController } from './article-tag.controller';
import { ArticleTag } from './entities/article-tag.entity';
import { ArticleTagMapper } from './entities/article-tag-mapper.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleTag, ArticleTagMapper])],
  exports: [TypeOrmModule],
  controllers: [ArticleTagController],
  providers: [ArticleTagService]
})
export class ArticleTagModule {}
