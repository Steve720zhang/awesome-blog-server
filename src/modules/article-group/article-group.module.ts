import { Module } from '@nestjs/common';
import { ArticleGroupService } from './article-group.service';
import { ArticleGroupController } from './article-group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleGroup } from './entities/article-group.entity';
import { ArticleGroupMapper } from './entities/article-group-mapper.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleGroup, ArticleGroupMapper])],
  controllers: [ArticleGroupController],
  providers: [ArticleGroupService]
})
export class ArticleGroupModule {}
