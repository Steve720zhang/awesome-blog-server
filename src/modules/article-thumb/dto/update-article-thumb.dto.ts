import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleThumbDto } from './create-article-thumb.dto';

export class UpdateArticleThumbDto extends PartialType(CreateArticleThumbDto) {}
