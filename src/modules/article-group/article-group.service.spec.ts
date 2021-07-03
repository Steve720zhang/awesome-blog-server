import { Test, TestingModule } from '@nestjs/testing';
import { ArticleGroupService } from './article-group.service';

describe('ArticleGroupService', () => {
  let service: ArticleGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleGroupService],
    }).compile();

    service = module.get<ArticleGroupService>(ArticleGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
