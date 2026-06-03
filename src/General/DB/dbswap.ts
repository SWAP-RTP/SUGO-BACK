import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelizeSwap = new Sequelize(
    process.env.DB_NAME_SWAP as string,
    process.env.DB_USER_SWAP as string,
    process.env.DB_PASSWORD_SWAP as string,
    {
        host: process.env.DB_HOST_SWAP || "localhost",
        port: Number(process.env.DB_PORT_SWAP),
        dialect: "postgres",
        logging: false,
    },
);

export default sequelizeSwap;
