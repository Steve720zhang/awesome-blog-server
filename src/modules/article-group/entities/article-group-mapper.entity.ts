import { Entity, Column, Index, CreateDateColumn } from "typeorm";

@Entity('article_group_mapper')
export class ArticleGroupMapper {

    @Column('article_id')
    @Index('agm_ai_idx')
    articleId: number;

    @Column('article_group_id')
    @Index('agm_agi_idx')
    articleGroupId: string;

    @Column({ type: 'tinyint', default: 0 })
    @Index('agm_deleted_idx')
    deleted: number;

    @CreateDateColumn({ name: `create_time`, nullable: false, default: () => "CURRENT_TIMESTAMP" })
    createTime: Date;

    @CreateDateColumn({ name: `update_time`, nullable: false, default: () => "CURRENT_TIMESTAMP ON UPDATE" })
    updateTime: Date;


}
