import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity(`article_tag_rec`)
export class ArticleTagRec {

    @PrimaryColumn({ name: `article_tag_id` })
    articleTagId: number;

    @Column({ name: `article_id` })
    articleId: number;

    @Column({ name: `create_time` })
    createTime: Date;
}
