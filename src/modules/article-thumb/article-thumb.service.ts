import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleThumbDto } from './dto/create-article-thumb.dto';
import { UpdateArticleThumbDto } from './dto/update-article-thumb.dto';
import { ArticleThumb } from './entities/article-thumb.entity';

@Injectable()
export class ArticleThumbService {
  constructor(@InjectRepository(ArticleThumb)
  private articleRepository: Repository<ArticleThumb>) { }


  create(createArticleThumbDto: CreateArticleThumbDto) {
    return this.articleRepository.create(createArticleThumbDto);
  }

  findAll() {
    return this.articleRepository.findAndCount({ take: 10, skip: 0 });
  }

  findOne(id: number) {
    return this.articleRepository.findOne({ articleId: id });
  }

  update(id: number, updateArticleThumbDto: UpdateArticleThumbDto) {
    return this.articleRepository.update({ articleId: id }, updateArticleThumbDto);
  }

  remove(id: number) {
    return this.articleRepository.delete({ articleId: id });
  }
}
