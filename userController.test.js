const { getUser } = require("../controllers/userController");

describe("getUser Controller", () => {
  test("Debe retornar un usuario", () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };

    getUser(req, res);

    expect(res.json).toHaveBeenCalledWith({ id: 1, name: "John Doe" });
  });
});
