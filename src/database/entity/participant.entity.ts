import { Column, Entity } from 'typeorm'
import { BaseContentEntity } from './base-content.entity'

/*
INSERT INTO `participant`(`id`, `customer_id`, `current_amount`, `all_amount`, `created_time`, `updated_time`,
  `version`)
VALUES (DEFAULT, 12, 400, 800, 1611135877, 1611135877, 1);
* */

// 分享者/参与者表
@Entity('participant')
export class ParticipantEntity extends BaseContentEntity {
  @Column({
    type: 'bigint',
    comment: '分享者/参与者'
  })
  customer_id: number

  @Column({
    type: 'int',
    default: 0,
    comment: '当前剩余收益'
  })
  current_amount: number

  @Column({
    type: 'int',
    default: 0,
    comment: '累计收益'
  })
  all_amount: number
}
