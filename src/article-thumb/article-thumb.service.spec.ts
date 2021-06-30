import { Test, TestingModule } from '@nestjs/testing';
import { ArticleThumbService } from './article-thumb.service';

describe('ArticleThumbService', () => {
  let service: ArticleThumbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleThumbService],
    }).compile();

    service = module.get<ArticleThumbService>(ArticleThumbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
