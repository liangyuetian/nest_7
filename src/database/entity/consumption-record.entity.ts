import { Column, Entity, Index } from 'typeorm'
import { BaseContentEntity } from './base-content.entity'

// 兑换历史表
@Entity('consumption_history', {})
export class ConsumptionRecordEntity extends BaseContentEntity {
  @Index()
  @Column({
    type: 'bigint',
    comment: '兑换人'
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
    type: 'int',
    default: 0,
    comment: '此次收益金额'
  })
  amount: number

  @Column({
    type: 'varchar',
    length: 255,
    default: 0,
    comment: '兑换了什么'
  })
  amount_desc: number

  @Column({
    type: 'simple-json',
    comment: '兑换的商品的集合 JSON.stringify'
  })
  consumption_main: Record<string, any>
}
