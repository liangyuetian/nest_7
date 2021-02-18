import { Injectable } from '@nestjs/common'
import { Connection, EntityManager, getConnection, getManager } from 'typeorm'
import { InjectConnection, InjectEntityManager } from '@nestjs/typeorm'
import { EntityTarget } from 'typeorm/common/EntityTarget'
import { QueryRunner } from 'typeorm/query-runner/QueryRunner'

@Injectable()
export class DatabaseService {
  constructor(
    @InjectConnection()
    public connection: Connection,
    @InjectEntityManager()
    public entityManager: EntityManager
  ) {}

  query(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    return this.connection.query(query, parameters, queryRunner)
  }

  getRepository<Entity>(target: EntityTarget<Entity>, connectionName?: string) {
    return this.getConnection(connectionName).getRepository(target)
  }

  getManager(connectionName?: string): EntityManager {
    return getManager(connectionName)
  }

  getConnection(connectionName?: string): Connection {
    return getConnection(connectionName)
  }
}
