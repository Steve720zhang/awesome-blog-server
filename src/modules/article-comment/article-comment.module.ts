import { Module } from '@nestjs/common';
import { ArticleCommentService } from './article-comment.service';
import { ArticleCommentController } from './article-comment.controller';
import { ArticleCommentMapper } from './entities/article-comment-mapper.entity';
import { ArticleComment } from './entities/article-comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleComment, ArticleCommentMapper])],
  controllers: [ArticleCommentController],
  providers: [ArticleCommentService]
})
export class ArticleCommentModule {}
