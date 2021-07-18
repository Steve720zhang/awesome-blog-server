import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArticleGroupService } from './article-group.service';
import { CreateArticleGroupDto } from './dto/create-article-group.dto';
import { UpdateArticleGroupDto } from './dto/update-article-group.dto';


@ApiTags('article-group')
@Controller('article-group')
export class ArticleGroupController {
  constructor(private readonly articleGroupService: ArticleGroupService) {}

  @Post()
  create(@Body() createArticleGroupDto: CreateArticleGroupDto) {
    return this.articleGroupService.create(createArticleGroupDto);
  }

  @Get()
  findAll() {
    return this.articleGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleGroupDto: UpdateArticleGroupDto) {
    return this.articleGroupService.update(+id, updateArticleGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleGroupService.remove(+id);
  }
}
