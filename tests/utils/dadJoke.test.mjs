import { getRandomDadJoke } from "./getRandomDadJoke";

describe("getRandomDadJoke", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("returns a joke when fetch succeeds", async () => {
    const mockJoke = "Why don't eggs tell jokes? They'd crack each other up.";

    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ joke: mockJoke })
    });

    const result = await getRandomDadJoke();

    expect(fetch).toHaveBeenCalledWith(
      "https://icanhazdadjoke.com/",
      expect.objectContaining({
        headers: {
          Accept: "application/json",
          "User-Agent": expect.any(String)
        }
      })
    );

    expect(result).toBe(mockJoke);
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
});
