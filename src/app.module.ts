import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { ArticleModule } from './article/article.module';
import { ArticleGroupModule } from './article-group/article-group.module';
import { ArticleTagModule } from './article-tag/article-tag.module';
import { ArticleCommentModule } from './article-comment/article-comment.module';
import { ArticleThumbModule } from './article-thumb/article-thumb.module';
import { DraftModule } from './draft/draft.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PWD,
      database: process.env.DB_SCHEMA,
      entities: [],
      synchronize: true,
    }),
    UserModule,
    RolesModule,
    ArticleModule,
    ArticleGroupModule,
    ArticleTagModule,
    ArticleCommentModule,
    ArticleThumbModule,
    DraftModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
