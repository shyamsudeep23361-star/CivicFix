// Run once in your project folder:  node download-images.js   (Node 18+)
// Links are temporary - run this soon.
const fs = require("fs");
const P = "https://www.figma.com/api/mcp/asset/ce7cae92-1910-45da-b5a2-fe0ede74e112/";
const files = {
  "508d0.png": "before.png", "11aa2.png": "after.png", "c4c7d.png": "pothole.png",
  "9f847.png": "streetlights.png", "7c896.png": "garbage.png", "4e68e.png": "map.png"
};
fs.mkdirSync("images", { recursive: true });
(async () => {
  for (const [remote, local] of Object.entries(files)) {
    const r = await fetch(P + remote);
    if (!r.ok) { console.log("FAILED", local, r.status); continue; }
    fs.writeFileSync("images/" + local, Buffer.from(await r.arrayBuffer()));
    console.log("saved images/" + local);
  }
})();
