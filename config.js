System.config({
  baseURL: "/smellyshelly",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "typescript": "npm:typescript@1.8.0"
  }
});
