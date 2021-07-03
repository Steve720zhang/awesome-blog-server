import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity(`article_tag`)
export class ArticleTag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: `tag_name` })
    tagName: string;

    @Column({ name: `description` })
    description: string;

    @Column({ name: `create_time` })
    createTime: Date;

    @Column({ name: `update_time` })
    updateTime: Date;


}
