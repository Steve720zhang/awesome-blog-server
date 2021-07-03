import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleTagDto } from './dto/create-article-tag.dto';
import { UpdateArticleTagDto } from './dto/update-article-tag.dto';
import { ArticleTagRec } from './entities/article-tag-rec.entity';
import { ArticleTag } from './entities/article-tag.entity';

@Injectable()
export class ArticleTagService {
  constructor(
    @InjectRepository(ArticleTag)
    private articleTagRepository: Repository<ArticleTag>,

    @InjectRepository(ArticleTagRec)
    private articleTagRecRepository: Repository<ArticleTagRec>
  ) {

  }

  create(createArticleTagDto: CreateArticleTagDto) {
    return 'This action adds a new articleTag';
  }

  findAll() {
    return `This action returns all articleTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articleTag`;
  }

  update(id: number, updateArticleTagDto: UpdateArticleTagDto) {
    return `This action updates a #${id} articleTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} articleTag`;
  }
}
