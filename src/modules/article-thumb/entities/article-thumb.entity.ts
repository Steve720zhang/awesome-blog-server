import { Entity, PrimaryColumn, Column, Index, CreateDateColumn } from "typeorm";

@Entity('article_thumb')
export class ArticleThumb {

    @PrimaryColumn({ name: 'article_id' })
    @Index('article_thumb_atid_idx')
    articleId: number;

    @Column({ nullable: true })
    ip: string;

    @Column({ name: 'mac_address', nullable: true })
    macAddress: string;

    @Column({ type: 'tinyint', default: 0 })
    @Index('article_group_deleted_idx')
    deleted: number;

    @CreateDateColumn({ name: `create_time` })
    createTime: Date;
}
