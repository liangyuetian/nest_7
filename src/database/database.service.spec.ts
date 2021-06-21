import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from './database.module';
import { DatabaseService } from './database.service';
import { ActivityEntity } from './entity';
import { format } from 'date-fns';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [DatabaseService],
    }).compile();

    service = module.get<DatabaseService>(DatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  let connection;
  let firstDate;
  it('should 连接数据库', function () {
    connection = service.getConnection('docker').getRepository(ActivityEntity);

    firstDate = new ActivityEntity();
    // firstDate.activity_id = `t_${Math.ceil(Math.random() * 6)}`
    firstDate.activity_id = 'test_1';
    firstDate.activity_name = '测试活动';
    firstDate.activity_main = {
      name: '测试活动',
      desc: '为测试而生',
      icon: 'https://icon.com',
    };
    firstDate.start_time = +format(new Date(), 't');
    firstDate.end_time = +format(new Date(), 't');
  });

  it('should activity表插入1条数据', async () => {
    await connection.save(firstDate);

    const newDate = await connection.findOne({
      activity_id: firstDate.activity_id,
    });

    expect(newDate.activity_id).toBe(newDate.activity_id);
  });

  it('should activity表删除一条数据', async () => {
    await connection.remove(firstDate);
    expect(true).toBeDefined();
  });
});
