import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 3030,
    },
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: "./src/infrastructure/tests.setup.ts",
    },
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        data: resolve(__dirname, "src", "data"),
        helpers: resolve(__dirname, "src", "helpers"),
        hooks: resolve(__dirname, "src", "hooks"),
        layouts: resolve(__dirname, "src", "layouts"),
        lib: resolve(__dirname, "src", "lib"),
        pages: resolve(__dirname, "src", "pages"),
        types: resolve(__dirname, "src", "types"),
        utils: resolve(__dirname, "src", "utils"),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
  };
});
