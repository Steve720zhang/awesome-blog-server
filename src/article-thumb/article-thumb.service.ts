import { Injectable } from '@nestjs/common';
import { CreateArticleThumbDto } from './dto/create-article-thumb.dto';
import { UpdateArticleThumbDto } from './dto/update-article-thumb.dto';

@Injectable()
export class ArticleThumbService {
  create(createArticleThumbDto: CreateArticleThumbDto) {
    return 'This action adds a new articleThumb';
  }

  findAll() {
    return `This action returns all articleThumb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articleThumb`;
  }

  update(id: number, updateArticleThumbDto: UpdateArticleThumbDto) {
    return `This action updates a #${id} articleThumb`;
  }

  remove(id: number) {
    return `This action removes a #${id} articleThumb`;
  }
}
