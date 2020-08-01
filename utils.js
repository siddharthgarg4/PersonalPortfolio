return {
  css: generateLoaders(),
  postcss: generateLoaders(),
  less: generateLoaders("less"),
  sass: generateLoaders("sass", { indentedSyntax: true }),
  scss: generateLoaders("sass").concat({
    loader: "sass-resources-loader",
    options: {
      resources: path.resolve(__dirname, "../src/styles/main.scss")
    }
  }),
  stylus: generateLoaders("stylus"),
  styl: generateLoaders("stylus")
};
