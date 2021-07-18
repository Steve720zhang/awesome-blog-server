import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArticleThumbService } from './article-thumb.service';
import { CreateArticleThumbDto } from './dto/create-article-thumb.dto';
import { UpdateArticleThumbDto } from './dto/update-article-thumb.dto';

@ApiTags('article-thumb')
@Controller('article-thumb')
export class ArticleThumbController {
  constructor(private readonly articleThumbService: ArticleThumbService) {}

  @Post()
  create(@Body() createArticleThumbDto: CreateArticleThumbDto) {
    return this.articleThumbService.create(createArticleThumbDto);
  }

  @Get()
  findAll() {
    return this.articleThumbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleThumbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleThumbDto: UpdateArticleThumbDto) {
    return this.articleThumbService.update(+id, updateArticleThumbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleThumbService.remove(+id);
  }
}
