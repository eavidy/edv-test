import client from "npm:@actions/artifact@2";
import { glob } from "https://esm.sh/glob@10.3.10";

console.log("::endgroup::");

const artifactClient = client.default;
async function uploadPackage() {
  const root = Deno.cwd();
  const pathList = await glob("**/*.js", {
    cwd: root,
    root: root,
    nodir: true,
  });
  console.log(`上传文件 root=${root}:`);
  console.log(pathList);

  return artifactClient.uploadArtifact("dit-qc", pathList, root);
}

await uploadPackage();
