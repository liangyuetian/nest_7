import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

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

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_time: number;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updated_time: number;

  @VersionColumn()
  version: number;
}
