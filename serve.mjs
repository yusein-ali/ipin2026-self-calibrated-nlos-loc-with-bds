// Serves this folder on localhost and opens the deck in the default browser.
// No dependencies, so `npm start` works offline without `npm install`.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const root = fileURLToPath(new URL(".", import.meta.url));
const firstPort = Number(process.env.PORT) || 8000;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".mp4": "video/mp4",
  ".woff2": "font/woff2",
  ".md": "text/markdown; charset=utf-8",
};

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  const file = normalize(join(root, path.endsWith("/") ? path + "index.html" : path));
  if (!file.startsWith(root.endsWith(sep) ? root : root + sep)) {
    res.writeHead(403).end("Forbidden");
    return;
  }
  try {
    const body = await readFile(file);
    const headers = {
      "Content-Type": types[extname(file)] ?? "application/octet-stream",
      "Cache-Control": "no-store",
      "Content-Length": body.length,
    };
    if (extname(file) === ".mp4") {
      headers["Accept-Ranges"] = "bytes";
      if (req.headers.range) {
        const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
        const start = match?.[1] ? Number(match[1]) : Math.max(0, body.length - Number(match?.[2]));
        const end = match?.[1] && match[2] ? Math.min(Number(match[2]), body.length - 1) : body.length - 1;
        if (!match || (!match[1] && !match[2]) || !Number.isSafeInteger(start) ||
            !Number.isSafeInteger(end) || start < 0 || start > end || start >= body.length) {
          res.writeHead(416, { "Content-Range": `bytes */${body.length}` }).end();
          return;
        }
        headers["Content-Range"] = `bytes ${start}-${end}/${body.length}`;
        headers["Content-Length"] = end - start + 1;
        res.writeHead(206, headers);
        res.end(req.method === "HEAD" ? undefined : body.subarray(start, end + 1));
        return;
      }
    }
    res.writeHead(200, headers);
    res.end(req.method === "HEAD" ? undefined : body);
  } catch {
    res.writeHead(404).end("Not found");
  }
});

function open(url) {
  const [cmd, args] =
    process.platform === "darwin"
      ? ["open", [url]]
      : process.platform === "win32"
        ? ["cmd", ["/c", "start", "", url]]
        : ["xdg-open", [url]];
  spawn(cmd, args, { stdio: "ignore", detached: true }).on("error", () => {}).unref();
}

function listen(port) {
  server.once("error", (err) => {
    if (err.code === "EADDRINUSE" && port < firstPort + 20) listen(port + 1);
    else throw err;
  });
  server.listen(port, "127.0.0.1", () => {
    const url = `http://localhost:${port}/`;
    console.log(`Presentation running at ${url}`);
    console.log(`PDF export view:        ${url}?view=print`);
    console.log("Press Ctrl+C to stop.");
    if (!process.env.NO_OPEN) open(url);
  });
}

listen(firstPort);
