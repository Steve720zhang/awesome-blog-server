import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity(`article_tag_tec`)
export class ArticleTagRec {
    @Column({ name: `article_id` })
    articleId: number;

    @PrimaryColumn({ name: `article_tag_id` })
    articleTagId: number;

    @Column({ name: `create_time` })
    createTime: Date;
}
