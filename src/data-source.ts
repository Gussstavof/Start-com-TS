import "reflect-metadata"
import {createConnection, DataSource} from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234567",
    database: "api-rest",
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: [],
    subscribers: [],
})

async function runMigrations() {
    const connection = await createConnection();
    await connection.runMigrations();
    await connection.close();
}
export default AppDataSource

