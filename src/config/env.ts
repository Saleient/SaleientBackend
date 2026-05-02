import { config } from "dotenv";
config();

const env={
    PORT:parseInt(process.env.PORT as string)
}

export default env;