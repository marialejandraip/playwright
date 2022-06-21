import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: "*.spec.ts",
  //reporte lista para consola y reporte junit para pipeline
  reporter: [["list" ], ["junit", {outputFile:"reports/result.xml"}], ["allure"]],
  // 60000
  timeout: 60000,
  // Nuevos intentos maximo 2
  retries: 2,
  use:{
    baseURL:"https://www.saucedemo.com/",
    screenshot: "only-on-failure",
    video: "retry-with-video"
  }
}

export default config;