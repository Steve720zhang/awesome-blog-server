import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleTagService } from './article-tag.service';
import { CreateArticleTagDto } from './dto/create-article-tag.dto';
import { UpdateArticleTagDto } from './dto/update-article-tag.dto';

@Controller('article-tag')
export class ArticleTagController {
  constructor(private readonly articleTagService: ArticleTagService) {}

  @Post()
  create(@Body() createArticleTagDto: CreateArticleTagDto) {
    return this.articleTagService.create(createArticleTagDto);
  }

  @Get()
  findAll() {
    return this.articleTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleTagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleTagDto: UpdateArticleTagDto) {
    return this.articleTagService.update(+id, updateArticleTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleTagService.remove(+id);
  }
}
