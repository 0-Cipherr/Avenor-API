import pg from "pg";

const { Pool } = pg;

const pool: pg.Pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
