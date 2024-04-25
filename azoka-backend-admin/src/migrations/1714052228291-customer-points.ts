import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CustomerPoints1714051074062 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "customer",
      new TableColumn({
        name: "points",
        type: "int",
        default: 0,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

