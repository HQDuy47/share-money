import HomePage from "../pages/HomePage/HomePage";

// Public routes
const publicRoutes = [
  { path: "/", component: HomePage },
  // { path: "/", component: WelcomePage, layout: null },
  //   { path: "/landing", component: LandingPage },
  //   { path: "/story", component: StoryPage },
  //   { path: "/product", component: ProductPage },
  //   { path: "/*", component: NotFoundPage, layout: null },
  //   { path: "/admin", component: AdminPage, layout: HeaderOnly },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
