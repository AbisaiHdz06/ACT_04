const request = require("supertest");
const app = require("../app"); // Asegúrate de que la ruta es correcta

describe("post /api/user", () => {
  test("Debería responder con un mensaje de estado", async () => {
    const response = await request(app).get("/api/status");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "server is running!" });
  });
});

describe('Document Environment Test', () => {
    it('should have document defined in jsdom environment', () => {
      expect(typeof document).toBe('object'); // Verify that 'document' exists and is an object
      expect(typeof document.createElement).toBe('function'); // Verify a basic function of 'document'
    });
  });
