import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTableV1 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "dateEntry",
                    type: "timestamp",
                    default: "0",
                },
                {
                    name: "amountInteraction",
                    type: "int",
                    default: 0,
                }
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}