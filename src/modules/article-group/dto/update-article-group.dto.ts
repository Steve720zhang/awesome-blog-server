import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleGroupDto } from './create-article-group.dto';

export class UpdateArticleGroupDto extends PartialType(CreateArticleGroupDto) {}
