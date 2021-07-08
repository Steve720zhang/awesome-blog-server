import { Module } from '@nestjs/common';
import { ArticleThumbService } from './article-thumb.service';
import { ArticleThumbController } from './article-thumb.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleThumb } from './entities/article-thumb.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleThumb])],
  controllers: [ArticleThumbController],
  providers: [ArticleThumbService]
})
export class ArticleThumbModule {}
