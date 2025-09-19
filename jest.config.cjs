/** @type {import('jest').Config} */
const common = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  transform: { "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.json", useESM: true }] },
  extensionsToTreatAsEsm: [".ts"]

};

const config = {
  // Timeout GLOBAL por defecto (unit)
  testTimeout: 5000,
  projects: [
    {
      displayName: "unit",
      ...common,
      testMatch: ["<rootDir>/src/**/*.unit.test.ts"]
    },
    {
      displayName: "e2e",
      ...common,
      testMatch: ["<rootDir>/src/**/*.e2e.test.ts"],
      setupFilesAfterEnv: ["<rootDir>/test.setup.e2e.ts"]
    }
  ]
};

module.exports = config;
