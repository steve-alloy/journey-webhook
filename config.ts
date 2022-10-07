import dotenv from "dotenv";

interface Config {
    port: string | number | undefined;
}

dotenv.config();

const configObj: Config = {
    "port": process.env.PORT
}

export default configObj;