import { Column, Entity, Index } from 'typeorm'
import { BaseContentEntity } from './base-content.entity'

// 收益记录表
@Entity('profit_record')
export class ProfitRecordEntity extends BaseContentEntity {
  @Index()
  @Column({
    type: 'bigint',
    comment: '分享者'
  })
  customer_id: number

  @Column({
    type: 'varchar',
    length: 20,
    default: '',
    comment: '活动id'
  })
  activity_id: string

  @Column({
    type: 'varchar',
    length: 255,
    default: 0,
    comment: '收益原因'
  })
  desc: number

  @Column({
    type: 'bigint',
    comment: '创建收益的人'
  })
  invitees_cid: string

  @Column({
    type: 'varchar',
    length: 30,
    default: 0,
    comment: '创建收益的人'
  })
  invitees_cid_name: string

  @Column({
    type: 'int',
    default: 0,
    comment: '此次收益金额'
  })
  amount: number
}
