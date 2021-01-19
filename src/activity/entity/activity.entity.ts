import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  Generated,
} from 'typeorm';

@Entity({ name: 'activity' })
export class ActivityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'uuid',
  })
  @Generated('uuid')
  activity_id: string;

  @Column('text')
  activity_name: string;
  @Column({
    type: 'json',
  })
  activity_main: object;

  @Column({
    type: 'timestamp',
  })
  start_time: string;

  @Column({
    type: 'timestamp',
  })
  end_time: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_time: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updated_time: string;

  @VersionColumn()
  version: number;
}
