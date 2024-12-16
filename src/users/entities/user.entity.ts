import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({length: 50 })
    firstName: string;
  
    @Column({length: 50 })
    lastName: string;
  
    @Column({length: 75})
    email: string;

    @Column({length: 100 })
    address: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    registerDate: Date;
}
