import { Test, TestingModule } from '@nestjs/testing';
import { ArticleThumbController } from './article-thumb.controller';
import { ArticleThumbService } from './article-thumb.service';

describe('ArticleThumbController', () => {
  let controller: ArticleThumbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleThumbController],
      providers: [ArticleThumbService],
    }).compile();

    controller = module.get<ArticleThumbController>(ArticleThumbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
