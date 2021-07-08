import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    @Index('user_username_idx')
    username: string;

    @Column({ nullable: false })
    nickname: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: true })
    avatar: string;

    @Column({ nullable: false })
    role: number;

    @Column({ nullable: true })
    @Index('user_email_idx')
    email: string;

    @Column({ nullable: true })
    @Index('user_phone_idx')
    phone: string;

    @Column({ name: 'phone_prefix', nullable: true })
    phonePrefix: string;

    @Column({ nullable: true })
    ip: string;

    @Column({ type: 'tinyint', default: 0 }) // 0 female;2=other
    gender: number;

    @Column({ nullable: false, default: '' })
    settings: string;

    @CreateDateColumn({ name: `create_time` })
    createTime: Date;

    @Column({ type: 'timestamp', name: `update_time`, nullable: false, default: () => 'CURRENT_TIMESTAMP()', onUpdate: 'CURRENT_TIMESTAMP' })
    updateTime: Date;

    @Column({ default: '' })
    context: string;
}
