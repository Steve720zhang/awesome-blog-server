import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn } from "typeorm";

@Entity('role')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column('sub_roles')
    subRoles: string;

    @Column({ type: 'tinyint', default: 0 })
    @Index('role_deleted_idx')
    deleted: number;

    @CreateDateColumn({ name: `create_time`, nullable: false, default: () => "CURRENT_TIMESTAMP" })
    createTime: Date;

    @CreateDateColumn({ name: `update_time`, nullable: false, default: () => "CURRENT_TIMESTAMP ON UPDATE" })
    updateTime: Date;

}

