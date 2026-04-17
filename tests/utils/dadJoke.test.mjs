import { jest } from '@jest/globals';

describe("icanhazdadjoke.com API (live test)", () => {
  // Allow slow network calls (GitHub Actions can be slow)
  jest.setTimeout(10000);

  it("returns a valid dad joke JSON response", async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json",
        "User-Agent": "JestTest (https://example.com)"
      }
    });

    expect(response.ok).toBe(true);

    const data = await response.json();

    // Validate structure
    expect(data).toHaveProperty("joke");
    expect(typeof data.joke).toBe("string");
    expect(data.joke.length).toBeGreaterThan(0);

    // Optional: validate status field
    expect(data).toHaveProperty("status");
    expect(data.status).toBe(200);
  });
});
