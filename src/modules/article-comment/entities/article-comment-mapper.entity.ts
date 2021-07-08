import { Entity, Column, Index, CreateDateColumn } from "typeorm";

@Entity('article_comment_mapper')
export class ArticleCommentMapper {

    @Column('article_id')
    @Index('acm_ai_idx')
    articleId: number;

    @Column('article_comment_id')
    @Index('acm_aci_idx')
    articleCommentId: string;

    @Column({ type: 'tinyint', default: 0 })
    @Index('acm_deleted_idx')
    deleted: number;

    @CreateDateColumn({ name: `create_time`, nullable: false, default: () => "CURRENT_TIMESTAMP" })
    createTime: Date;

    @CreateDateColumn({ name: `update_time`, nullable: false, default: () => "CURRENT_TIMESTAMP ON UPDATE" })
    updateTime: Date;


}
