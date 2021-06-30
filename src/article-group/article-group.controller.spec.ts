import { Test, TestingModule } from '@nestjs/testing';
import { ArticleGroupController } from './article-group.controller';
import { ArticleGroupService } from './article-group.service';

describe('ArticleGroupController', () => {
  let controller: ArticleGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleGroupController],
      providers: [ArticleGroupService],
    }).compile();

    controller = module.get<ArticleGroupController>(ArticleGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
