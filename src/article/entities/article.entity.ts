import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('article')
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    tag_ids: string;

    @Column()
    group_ids: string;

    @Column()
    author: number;

    @Column({ name: `create_time` })
    createTime: Date;

    @Column({ name: `update_time` })
    updateTime: Date;


}
