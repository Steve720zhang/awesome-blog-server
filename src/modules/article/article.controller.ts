import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/services/auth/roles/roles.decorator';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Roles as RolesEnum } from '../../services/auth/roles/roles.constant';
import { AuthGuard as myAuthGuard } from '../../services/auth/auth.guard';

@ApiTags('article')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) { }

  @Post()
  @Roles(RolesEnum.Member)
  @UseGuards(myAuthGuard)
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  @Roles(RolesEnum.Visitor)
  @UseGuards(myAuthGuard)
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  @Roles(RolesEnum.Visitor)
  @UseGuards(myAuthGuard)
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  @Roles(RolesEnum.Member)
  @UseGuards(myAuthGuard)
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  @Roles(RolesEnum.Member)
  @UseGuards(myAuthGuard)
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
