import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleCommentDto } from './dto/create-article-comment.dto';
import { UpdateArticleCommentDto } from './dto/update-article-comment.dto';
import { ArticleComment } from './entities/article-comment.entity';

@Injectable()
export class ArticleCommentService {
  constructor(@InjectRepository(ArticleComment)
  private articleRepository: Repository<ArticleComment>) { }

  create(createArticleCommentDto: CreateArticleCommentDto) {
    return this.articleRepository.create(createArticleCommentDto);
  }

  findAll() {
    return this.articleRepository.findAndCount({ take: 10, skip: 0 });
  }

  findOne(id: number) {
    return this.articleRepository.findOne({ id });
  }

  update(id: number, updateArticleCommentDto: UpdateArticleCommentDto) {
    return this.articleRepository.update(id, updateArticleCommentDto);
  }

  remove(id: number) {
    return this.articleRepository.delete({ id });
  }
}
