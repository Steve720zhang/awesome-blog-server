import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { RolesModule } from './modules/roles/roles.module';
import { ArticleModule } from './modules/article/article.module';
import { ArticleGroupModule } from './modules/article-group/article-group.module';
import { ArticleTagModule } from './modules/article-tag/article-tag.module';
import { ArticleCommentModule } from './modules/article-comment/article-comment.module';
import { ArticleThumbModule } from './modules/article-thumb/article-thumb.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AuthModule } from './services/auth/auth.module';

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
      autoLoadEntities: true,
    }),
    UserModule,
    RolesModule,
    ArticleModule,
    ArticleGroupModule,
    ArticleTagModule,
    ArticleCommentModule,
    ArticleThumbModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(
    private connection: Connection
  ) { }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      LoggerMiddleware
    ).forRoutes({ path: '/', method: RequestMethod.ALL })
  }
}
