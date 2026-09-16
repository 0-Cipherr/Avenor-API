import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "admin1234 ",
  database: "admin",
});

export default pool;
