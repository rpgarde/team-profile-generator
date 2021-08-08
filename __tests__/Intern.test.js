const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("getName", () => {
    it("Should return name", () => {
      expect(new Intern('Paolo',10,'rpgarde@gmail.com','USyd').getName()).toBe('Paolo')
    });
  });
  describe("getId", () => {
    it("Should return Id", () => {
      expect(new Intern('Paolo',10,'rpgarde@gmail.com','USyd').getId()).toBe(10)
    });
  });
  describe("getEmail", () => {
    it("Should return Email", () => {
      expect(new Intern('Paolo',10,'rpgarde@gmail.com','USyd').getEmail()).toBe('rpgarde@gmail.com')
    });
  });
  describe("getRole", () => {
    it("Should return Role", () => {
      expect(new Intern('Paolo',10,'rpgarde@gmail.com','USyd').getRole()).toBe("Intern")
    });
  });
  describe("getSchool", () => {
    it("Should return school", () => {
      expect(new Intern('Paolo',10,'rpgarde@gmail.com','USyd').getSchool()).toBe('USyd')
    });
  });
});
