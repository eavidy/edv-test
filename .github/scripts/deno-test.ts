import { Buffer } from "node:buffer";

console.log("aaa");
console.error("eee");

await Deno.stdout.write(Buffer.from("xxxx"));
