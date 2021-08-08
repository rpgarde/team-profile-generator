const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("getName", () => {
    it("Should return name", () => {
      expect(new Engineer('Paolo',10,'rpgarde@gmail.com','rpgarde').getName()).toBe('Paolo')
    });
  });
  describe("getId", () => {
    it("Should return Id", () => {
      expect(new Engineer('Paolo',10,'rpgarde@gmail.com','rpgarde').getId()).toBe(10)
    });
  });
  describe("getEmail", () => {
    it("Should return Email", () => {
      expect(new Engineer('Paolo',10,'rpgarde@gmail.com','rpgarde').getEmail()).toBe('rpgarde@gmail.com')
    });
  });
  describe("getRole", () => {
    it("Should return Role", () => {
      expect(new Engineer('Paolo',10,'rpgarde@gmail.com','rpgarde').getRole()).toBe("Engineer")
    });
  });
  describe("getGitHub", () => {
    it("Should return github", () => {
      expect(new Engineer('Paolo',10,'rpgarde@gmail.com','rpgarde').getGitHub()).toBe('rpgarde')
    });
  });
});
