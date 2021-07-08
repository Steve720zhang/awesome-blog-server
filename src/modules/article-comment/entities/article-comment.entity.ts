import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn } from "typeorm";

@Entity('article_comment')
export class ArticleComment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, default: '' })
    content: string;

    @Column({ nullable: true })
    author: string;

    @Column({ nullable: true })
    author_ip: string;

    @Column({ type: 'tinyint', default: 0 })
    @Index('article_comment_deleted_idx')
    deleted: number;

    @CreateDateColumn({ name: `create_time` })
    createTime: Date;

    @Column({ type: 'timestamp', name: `update_time`, nullable: false, default: () => 'CURRENT_TIMESTAMP()', onUpdate: 'CURRENT_TIMESTAMP' })
    updateTime: Date;
}
