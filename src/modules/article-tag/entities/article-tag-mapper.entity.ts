import { PrimaryColumn, Entity, Index, Column, CreateDateColumn } from "typeorm";

@Entity('article_tag_mapper')
export class ArticleTagMapper {

    @PrimaryColumn({ name: 'article_id' })
    @Index('atm_ai_idx')
    articleId: number;

    @Column({ name: 'article_tag_id' })
    @Index('atm_ati_idx')
    articleTagId: string;

    @Column({ type: 'tinyint', default: 0 })
    @Index('atm_deleted_idx')
    deleted: number;

    @CreateDateColumn({ name: `create_time` })
    createTime: Date;

    @Column({ type: 'timestamp', name: `update_time`, nullable: false, default: () => 'CURRENT_TIMESTAMP()', onUpdate: 'CURRENT_TIMESTAMP' })
    updateTime: Date;
}
