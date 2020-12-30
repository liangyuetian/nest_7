import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'T1' })
export class T {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({
    length: 100,
  })
  k: string;

  @Column('text')
  s: string;
}
