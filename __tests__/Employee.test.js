const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("getName", () => {
    it("Should return name", () => {
      expect(new Employee('Paolo',10,'rpgarde@gmail.com').getName()).toBe('Paolo')
    });
  });
  describe("getId", () => {
    it("Should return Id", () => {
      expect(new Employee('Paolo',10,'rpgarde@gmail.com').getId()).toBe(10)
    });
  });
  describe("getEmail", () => {
    it("Should return Email", () => {
      expect(new Employee('Paolo',10,'rpgarde@gmail.com').getEmail()).toBe('rpgarde@gmail.com')
    });
  });
  describe("getRole", () => {
    it("Should return Role", () => {
      expect(new Employee('Paolo',10,'rpgarde@gmail.com').getRole()).toBe("Employee")
    });
  });
});
