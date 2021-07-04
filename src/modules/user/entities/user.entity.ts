import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    nickname: string;

    @Column()
    password: string;

    @Column()
    role: number;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column({ name: 'phone_prefix' })
    phonePrefix: string;

    @Column()
    ip: string;

    @Column()
    gender: number;

    @Column()
    description: string;

    @Column()
    avatar: string;

    @Column()
    settings: string;

    @Column({ name: 'create_time' })
    createTime: Date;

    @Column({ name: 'update_time' })
    updateTime: Date;
}
