import { Column, Entity, Index } from 'typeorm';
import { BaseContentEntity } from './base-content.entity';

// 分享记录表
@Entity('share_record')
export class ShareRecordEntity extends BaseContentEntity {
  @Index()
  @Column({
    type: 'bigint',
    comment: '分享者/参与者',
  })
  customer_id: number;

  @Column({
    type: 'varchar',
    length: 10,
    default: '',
    comment: 'share_indexes',
  })
  share_indexes: number;

  @Column({
    type: 'varchar',
    length: 10,
    default: '',
    comment: 'share_index',
  })
  share_index: number;

  @Column({
    type: 'varchar',
    length: 225,
    default: '',
    comment: '分享的渠道',
  })
  share_channel: string;

  @Column({
    type: 'varchar',
    length: 225,
    default: '',
    comment: '享的业务场景',
  })
  share_scene: string;

  @Column({
    type: 'varchar',
    length: 225,
    default: '',
    comment: '分享用户的app_uid',
  })
  share_uid: string;

  @Column({
    type: 'varchar',
    length: 225,
    default: '',
    comment: '分享的类别',
  })
  share_item: string;

  @Column({
    type: 'varchar',
    length: 225,
    default: '',
    comment: '对应类别的ID',
  })
  share_item_id: string;

  @Column({
    type: 'varchar',
    length: 20,
    default: '',
    comment: '活动id',
  })
  activity_id: string;
}
