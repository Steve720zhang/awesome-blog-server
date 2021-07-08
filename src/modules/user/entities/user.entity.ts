import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index('user_username_idx')
    username: string;

    @Column()
    nickname: string;

    @Column()
    description: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @Column()
    role: number;

    @Column()
    @Index('user_email_idx')
    email: string;

    @Column()
    @Index('user_phone_idx')
    phone: string;

    @Column({ name: 'phone_prefix' })
    phonePrefix: string;

    @Column()
    ip: string;

    @Column({ type: 'tinyint', default: 0 }) // 0 female;2=other
    gender: number;

    @Column({ nullable: false, default: '' })
    settings: string;

    @CreateDateColumn({ name: `create_time`, nullable: false, default: () => "CURRENT_TIMESTAMP" })
    createTime: Date;

    @CreateDateColumn({ name: `update_time`, nullable: false, default: () => "CURRENT_TIMESTAMP ON UPDATE" })
    updateTime: Date;

}
