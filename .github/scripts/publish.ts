import { publishFlow } from "https://esm.sh/gh/dnpack/action-script/cmd/github_repo.ts?raw";

import packageJson from "../../package.json" with { type: "json" };
console.log("::endgroup::");
await publishFlow("v" + packageJson.version, { tagFailThrow: true });
