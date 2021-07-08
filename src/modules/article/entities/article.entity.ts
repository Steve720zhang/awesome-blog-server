import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn } from "typeorm";

@Entity('article')
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, default: '' })
    title: string;

    @Column({ nullable: false, default: '' })
    content: string;

    @Column({ nullable: false })
    author: number;

    @Column({ type: 'tinyint', default: 0 }) // 0: draft;1: normal_article;2:deleted
    @Index('article_status_idx')
    status: number;

    @CreateDateColumn({ name: `create_time` })
    createTime: Date;

    @Column({ type: 'timestamp', name: `update_time`, nullable: false, default: () => 'CURRENT_TIMESTAMP()', onUpdate: 'CURRENT_TIMESTAMP' })
    updateTime: Date;

}
