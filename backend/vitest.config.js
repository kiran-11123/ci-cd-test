import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',          // coverage engine
      reporter: ['text', 'html'], // console + browser report
      reportsDirectory: './coverage'
    }
  }
})
