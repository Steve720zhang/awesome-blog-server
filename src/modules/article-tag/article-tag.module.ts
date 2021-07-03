import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleTagService } from './article-tag.service';
import { ArticleTagController } from './article-tag.controller';
import { ArticleTag } from './entities/article-tag.entity';
import { ArticleTagRec } from './entities/article-tag-rec.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleTag, ArticleTagRec])],
  exports: [TypeOrmModule],
  controllers: [ArticleTagController],
  providers: [ArticleTagService]
})
export class ArticleTagModule {}
