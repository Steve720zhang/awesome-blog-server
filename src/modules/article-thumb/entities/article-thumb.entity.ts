import { Entity, PrimaryColumn, Column, Index, CreateDateColumn } from "typeorm";

@Entity('article_thumb')
export class ArticleThumb {
    @Column({ name: 'article_id' })
    @Index('article_thumb_atid_idx')
    articleId: number;

    @Column()
    ip: string;

    @Column('mac_address')
    macAddress: string;

    @Column({ type: 'tinyint', default: 0 })
    @Index('article_group_deleted_idx')
    deleted: number;

    @CreateDateColumn({ name: `create_time`, nullable: false, default: () => "CURRENT_TIMESTAMP" })
    createTime: Date;
}
