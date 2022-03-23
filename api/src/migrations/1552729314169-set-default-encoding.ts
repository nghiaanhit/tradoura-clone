import { MigrationInterface, QueryRunner } from 'typeorm';

export class setDefaultEncoding1552729314169 implements MigrationInterface {
  tables = ['migrations', 'project_locale', 'translation', 'project_client', 'term', 'project_user', 'plan', 'project', 'user', 'locale'];

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('SET FOREIGN_KEY_CHECKS=0;');
    for (const table of this.tables) {
      await queryRunner.query(`ALTER TABLE \`${table}\` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    }
    await queryRunner.query('SET FOREIGN_KEY_CHECKS=1;');
  }

  // No down migration since we cannot guess what the previous default encoding was
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
