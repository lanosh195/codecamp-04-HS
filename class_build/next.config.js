module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "hansol-site",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    404: { page: "/404" },
  }),
};
