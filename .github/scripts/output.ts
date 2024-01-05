import { writeNewTagToOutput } from "https://cdn.jsdelivr.net/gh/dnpack/action-script@0.3.0/cmd/github_repo.ts";
await writeNewTagToOutput(Math.random().toString(), "NEW_TAG");
import { setOutput } from "npm:@actions/core";
setOutput("YY", "111");
