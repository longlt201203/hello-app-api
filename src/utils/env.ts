import { config } from "dotenv";

config();

export const Env = {
	LISTEN_PORT: parseInt(process.env.LISTEN_PORT || "3000"),

	DB_HOST: process.env.DB_HOST || "localhost",
	DB_PORT: parseInt(process.env.DB_PORT || ""),
	DB_NAME: process.env.DB_NAME || "",
	DB_USER: process.env.DB_USER || "",
	DB_PASS: process.env.DB_PASS || "",

	GLOBAL_PREFIX: process.env.GLOBAL_PREFIX || "/api",

	MY_CONFIG: process.env.MY_CONFIG || "",
	MY_SECRET: process.env.MY_SECRET || "",
} as const;

console.log(Env);
