const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("getName", () => {
    it("Should return name", () => {
      expect(new Manager('Paolo',10,'rpgarde@gmail.com',5).getName()).toBe('Paolo')
    });
  });
  describe("getId", () => {
    it("Should return Id", () => {
      expect(new Manager('Paolo',10,'rpgarde@gmail.com',5).getId()).toBe(10)
    });
  });
  describe("getEmail", () => {
    it("Should return Email", () => {
      expect(new Manager('Paolo',10,'rpgarde@gmail.com',5).getEmail()).toBe('rpgarde@gmail.com')
    });
  });
  describe("getRole", () => {
    it("Should return Role", () => {
      expect(new Manager('Paolo',10,'rpgarde@gmail.com',5).getRole()).toBe("Manager")
    });
  });
  describe("getOfficeNumber", () => {
    it("Should return office number", () => {
      expect(new Manager('Paolo',10,'rpgarde@gmail.com',5).getOfficeNumber()).toBe(5)
    });
  });
});
