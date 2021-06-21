import { Column, Entity, Index } from 'typeorm';

/*
INSERT INTO `activity`(`id`, `activity_id`, `activity_name`, `activity_main`, `start_time`, `end_time`, `created_time`,
  `updated_time`, `version`)
VALUES (DEFAULT, "1", "分享拉新活动", "{\"name\":\"分享拉新\",\"desc\":\"拯救世界\"}", 1611135877, 1611135877, 1611135877, 1611135877,
  1);
* */

// 活动表
@Entity('activity')
export class ActivityEntity {
  @Index({ unique: true })
  @Column({
    type: 'varchar',
    length: 50,
    default: '',
    comment: '活动id',
  })
  activity_id: string;

  @Column({
    type: 'varchar',
    length: 100,
    default: '',
    comment: '活动名称',
  })
  activity_name: string;

  @Column({
    type: 'simple-json',
    comment: '活动说明 JSON.stringify',
  })
  activity_main: Record<string, any>;

  @Column({
    type: 'int',
    default: 0,
    comment: '活动开始时间',
  })
  start_time: number;

  @Column({
    type: 'int',
    default: 0,
    comment: '活动结束时间',
  })
  end_time: number;
}
