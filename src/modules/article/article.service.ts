import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>
  ) {

  }

  create(createArticleDto: CreateArticleDto) {
    return this.articleRepository.create(createArticleDto)
  }

  findAll() {
    return this.articleRepository.findAndCount({ take: 10, skip: 0 })
  }

  findOne(id: number) {
    return this.articleRepository.findOne(id)
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articleRepository.update(id, updateArticleDto);
  }

  remove(id: number) {
    return this.articleRepository.delete(id)
  }
}
