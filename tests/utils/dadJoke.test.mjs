import { getRandomDadJoke } from "./getRandomDadJoke";

describe("getRandomDadJoke (live API test)", () => {
  // Allow slow network calls (GitHub Actions can be slow)
  jest.setTimeout(10000);

  it("fetches a real joke from the API", async () => {
    const joke = await getRandomDadJoke();

    expect(joke).not.toBeNull();
    expect(typeof joke).toBe("string");
    expect(joke.length).toBeGreaterThan(0);
  });
});

  it("returns null when fetch fails", async () => {
    global.fetch.mockRejectedValue(new Error("Network error"));

    const result = await getRandomDadJoke();

    expect(result).toBeNull();
  });

  it("returns null when response is not ok", async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      status: 500
    });

    const result = await getRandomDadJoke();

    expect(result).toBeNull();
  });

