import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const sql = neon(process.env.DB_URI);

const connectDB = async () => {
  try {
    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

export { sql };
export default connectDB;
