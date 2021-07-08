import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn } from "typeorm";

@Entity('article')
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    author: number;

    @Column({ type: 'tinyint', default: 0 }) // 0: draft;1: normal_article;2:deleted
    @Index('article_status_idx')
    status: number;

    @CreateDateColumn({ name: `create_time`, nullable: false, default: () => "CURRENT_TIMESTAMP" })
    createTime: Date;

    @CreateDateColumn({ name: `update_time`, nullable: false, default: () => "CURRENT_TIMESTAMP ON UPDATE" })
    updateTime: Date;


}
