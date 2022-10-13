import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  topic: string;

  @Column('json', { nullable: true })
  type: string[];
}
