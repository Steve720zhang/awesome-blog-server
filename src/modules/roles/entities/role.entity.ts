import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn } from "typeorm";

@Entity('role')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ name: 'sub_roles', nullable: true })
    subRoles: string;

    @Column({ type: 'tinyint', default: 0 })
    @Index('role_deleted_idx')
    deleted: number;

    @CreateDateColumn({ name: `create_time` })
    createTime: Date;

    @Column({ type: 'timestamp', name: `update_time`, nullable: false, default: () => 'CURRENT_TIMESTAMP()', onUpdate: 'CURRENT_TIMESTAMP' })
    updateTime: Date;
}

