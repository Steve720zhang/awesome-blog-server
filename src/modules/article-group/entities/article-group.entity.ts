import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn } from "typeorm";

@Entity('article_group')
export class ArticleGroup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'tinyint', default: 0 })
    @Index('article_group_deleted_idx')
    deleted: number;

    @CreateDateColumn({ name: `create_time`, nullable: false, default: () => "CURRENT_TIMESTAMP" })
    createTime: Date;

    @CreateDateColumn({ name: `update_time`, nullable: false, default: () => "CURRENT_TIMESTAMP ON UPDATE" })
    updateTime: Date;



}
