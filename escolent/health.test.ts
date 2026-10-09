import { createServer } from "node:http";
import { describe, expect, it } from "vitest";
import { GET } from "./app/health/route";

describe("health", () => {
  it("fetches /health and expects 200", async () => {
    const server = createServer(async (req, res) => {
      if (req.url === "/health" && req.method === "GET") {
        const response = await GET();
        res.statusCode = response.status;
        res.end(await response.text());
        return;
      }
      res.statusCode = 404;
      res.end();
    });

    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    const port = typeof address === "object" && address ? address.port : 0;

    try {
      const response = await fetch(`http://127.0.0.1:${port}/health`);
      expect(response.status).toBe(200);
    } finally {
      server.close();
    }
  });
});
