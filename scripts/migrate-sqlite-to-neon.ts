import { createClient } from "@libsql/client";
import { Client } from "pg";
import path from "node:path";

const source = createClient({ url: `file:${path.resolve("prisma/dev.db")}` });
const target = new Client({ connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL });
const tables = ["User", "CitizenProfile", "Scheme", "SchemeTranslation", "SchemeRequirement", "SchemeRequirementTranslation", "Application"];
const booleans = new Set(["hasAadhaar", "hasBankAccount"]);

await target.connect();
for (const table of tables) {
  const columns = (await source.execute(`PRAGMA table_info("${table}")`)).rows.map((row) => String(row.name));
  const rows = (await source.execute(`SELECT * FROM "${table}"`)).rows;
  for (const row of rows) {
    const values = columns.map((column) => booleans.has(column) ? Boolean(row[column]) : row[column]);
    const quoted = columns.map((column) => `"${column}"`).join(",");
    await target.query(`INSERT INTO "${table}" (${quoted}) VALUES (${values.map((_, index) => `$${index + 1}`).join(",")}) ON CONFLICT DO NOTHING`, values);
  }
  console.log(`${table}: ${rows.length} rows`);
}
await target.end();
await source.close();
