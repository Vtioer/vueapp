module.exports = {
  presets: [
    // "@vue/cli-plugin-babel/preset",
    [
      "@vue/app",
      {
        polyfills: [
          "es6.promise",
          "es6.symbol",
          "es6.array.iterator",
          "es6.object.assign",
        ],
        useBuiltIns: "entry",
      },
    ],
  ],
};

