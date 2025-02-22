//@deno-types="npm:@types/pg"
import pg from "npm:pg";
const url = Deno.env.get("PG_URL")!;
const op = parserDbUrl(url);
console.log(op);
const client = await createPgClient(url);
console.log("ok");

await client.end()
async function createPgClient(
  url: string | URL,
): Promise<pg.Client> {
  let option: DbConnectOption;
  if (typeof url === "string" || url instanceof URL) {
    option = parserDbUrl(url);
  } else option = url;

  const pgClient = new pg.Client(option);
  await pgClient.connect();
  return pgClient;
}
function parserDbUrl(url: URL | string): DbConnectOption {
  if (typeof url === "string") url = new URL(url);
  return {
    database: url.pathname.slice(1),
    hostname: url.hostname,
    port: +url.port,
    password: url.password ? url.password : undefined,
    user: url.username ? url.username : undefined,
  };
}
interface DbConnectOption {
  database: string;
  user?: string;
  password?: string;
  hostname?: string;
  port?: number;
}
