import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleGroupDto } from './dto/create-article-group.dto';
import { UpdateArticleGroupDto } from './dto/update-article-group.dto';
import { ArticleGroup } from './entities/article-group.entity';

@Injectable()
export class ArticleGroupService {
  constructor(@InjectRepository(ArticleGroup)
  private articleRepository: Repository<ArticleGroup>) { }

  create(createArticleGroupDto: CreateArticleGroupDto) {
    return this.articleRepository.create(createArticleGroupDto);
  }

  findAll() {
    return this.articleRepository.findAndCount({ take: 10, skip: 0 });
  }

  findOne(id: number) {
    return this.articleRepository.findOne({ id });
  }

  update(id: number, updateArticleGroupDto: UpdateArticleGroupDto) {
    return this.articleRepository.update({ id }, updateArticleGroupDto);
  }

  remove(id: number) {
    return this.articleRepository.delete({ id });
  }
}
