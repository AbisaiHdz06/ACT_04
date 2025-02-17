const request = require("supertest");
const app = require("../app"); // Adjust the path to your app file

describe("POST /api/user", () => {
  test("should respond with a status message", async () => {
    const response = await request(app)
      .post("/api/user")
      .send({ username: "testuser" }); // Adjust the payload as necessary

    expect(response.status).toBe(200); // Adjust based on your expected status
    expect(response.body).toHaveProperty("message"); // Adjust based on your expected response
  });
});

describe('Document Environment Test', () => {
    it('should have document defined in jsdom environment', () => {
      expect(typeof document).toBe('object'); // Verify that 'document' exists and is an object
      expect(typeof document.createElement).toBe('function'); // Verify a basic function of 'document'
    });
  });
