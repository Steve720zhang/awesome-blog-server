import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleTagDto } from './create-article-tag.dto';

export class UpdateArticleTagDto extends PartialType(CreateArticleTagDto) {}
