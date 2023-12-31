import {
  GitHubRepo,
  publishFlow,
} from "https://esm.sh/gh/dnpack/action-script/cmd/github_repo.ts?raw";

console.log("::endgroup::");
await publishFlow(["v0.3.1", "v0.3.2"], { tagFailThrow: true }).catch((e) => {
  console.error(e);
  throw e;
});

const repo = new GitHubRepo();
const res = await repo.deleteMatchVersionTag(
  new Set(["v0.2.9"]),
  "0.2.10",
  "minor",
);
console.log(res);
