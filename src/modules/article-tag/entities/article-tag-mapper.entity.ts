import { Entity, Index, Column, CreateDateColumn } from "typeorm";

@Entity('article_group_mapper')
export class ArticleGroupMapper {

    @Column('article_id')
    @Index('atm_ai_idx')
    articleId: number;

    @Column('article_group_id')
    @Index('atm_ati_idx')
    articleGroupId: string;

    @Column({ type: 'tinyint', default: 0 })
    @Index('atm_deleted_idx')
    deleted: number;

    @CreateDateColumn({ name: `create_time`, nullable: false, default: () => "CURRENT_TIMESTAMP" })
    createTime: Date;

    @CreateDateColumn({ name: `update_time`, nullable: false, default: () => "CURRENT_TIMESTAMP ON UPDATE" })
    updateTime: Date;


}
