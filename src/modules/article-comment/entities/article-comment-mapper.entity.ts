import { PrimaryColumn, Entity, Column, Index, CreateDateColumn } from "typeorm";

@Entity('article_comment_mapper')
export class ArticleCommentMapper {

    @PrimaryColumn({ name: 'article_id' })
    @Index('acm_ai_idx')
    articleId: number;

    @Column({ name: 'article_comment_id' })
    @Index('acm_aci_idx')
    articleCommentId: string;

    @Column({ type: 'tinyint', default: 0 })
    @Index('acm_deleted_idx')
    deleted: number;

    @CreateDateColumn({ name: `create_time` })
    createTime: Date;

    @Column({ type: 'timestamp', name: `update_time`, nullable: false, default: () => 'CURRENT_TIMESTAMP()', onUpdate: 'CURRENT_TIMESTAMP' })
    updateTime: Date;
}
