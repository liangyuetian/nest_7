import {
  BeforeInsert,
  BeforeRemove,
  BeforeUpdate,
  Column,
  PrimaryGeneratedColumn,
  VersionColumn
} from 'typeorm'
import { format } from 'date-fns'

export abstract class BaseContentEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    unsigned: true
  })
  id: number

  @Column({
    type: 'int',
    default: 1,
    comment: 'status=0表示逻辑删除'
  })
  status: number

  @Column({
    type: 'int',
    default: 0,
    comment: '创建时间'
  })
  created_time: number

  @Column({
    type: 'int',
    default: 0,
    comment: '更新时间'
  })
  updated_time: number

  @VersionColumn()
  @Column({
    type: 'int',
    default: 0,
    comment: '当前条数据被更新过多少次版本'
  })
  version: number

  @BeforeInsert()
  beforeInsert() {
    const date = +format(new Date(), 't')
    !this.created_time && (this.created_time = date)
    !this.updated_time && (this.updated_time = date)
  }

  @BeforeUpdate()
  beforeUpdate() {
    !this.updated_time && (this.updated_time = +format(new Date(), 't'))
  }

  @BeforeRemove()
  beforeRemove() {
    this.status = 0
  }
}
