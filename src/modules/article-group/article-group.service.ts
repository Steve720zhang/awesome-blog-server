import { Injectable } from '@nestjs/common';
import { CreateArticleGroupDto } from './dto/create-article-group.dto';
import { UpdateArticleGroupDto } from './dto/update-article-group.dto';

@Injectable()
export class ArticleGroupService {
  create(createArticleGroupDto: CreateArticleGroupDto) {
    return 'This action adds a new articleGroup';
  }

  findAll() {
    return `This action returns all articleGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articleGroup`;
  }

  update(id: number, updateArticleGroupDto: UpdateArticleGroupDto) {
    return `This action updates a #${id} articleGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} articleGroup`;
  }
}
