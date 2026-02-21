import nextJest from 'next/jest.js';
import type { Config } from 'jest';

const createJestConfig = nextJest({
    dir: './',
});

const config: Config = {
    testEnvironment: 'jsdom',

    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },

    testMatch: ['<rootDir>/**/*.test.ts', '<rootDir>/**/*.test.tsx'],

    testPathIgnorePatterns: ['/node_modules/', '/.next/'],

    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/*.test.{ts,tsx}',
        '!**/node_modules/**',
        '!**/.next/**',
    ],

    coverageDirectory: 'coverage',
};

export default createJestConfig(config);
