import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Landing",
    component: () => import("../MainPages/LandingPage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../MainPages/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../MainPages/RegisterPage.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../MainPages/Home.vue"),
  },
  {
    path: "/properties",
    name: "Properties",
    component: () => import("../MainPages/Properties.vue"),
  },
  {
    path: "/propertyNews",
    name: "Property News",
    component: () => import("../MainPages/PropertyNews.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../MainPages/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../MainPages/Contact.vue"),
  },

  {
    path: "/Details/:id", 
    name: "Details",
    component: () => import("../MainPages/Details.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../MainPages/Admin.vue"),
    meta: { hideNavAndFooter: true },
  },
  // {
  //   path: "/AgentNew",
  //   name: "ViewAgent",
  //   component: () => import("../components/AgentSidePages/ViewAgent.vue"),
  //   meta: { hideNavAndFooter: true },
  // },
  {
    path: "/AgentNew",
    name: "ViewAgent",
    component: () => import("../MainPages/AgentNew.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/Mobile",
    name: "ViewAgent",
    component: () => import("../MainPages/Mobile.vue"),
    meta: { hideNavAndFooter: true },
  },
  // {
  //   path: "/AgentNewEditAgent",
  //   name: "EditAgent",
  //   component: () => import("../components/AgentSidePages/EditAgent.vue"),
  //   meta: { hideNavAndFooter: true },
  // },

  // {
  //   path: "/AgentNewAddProperty",
  //   name: "AgentAddProperty",
  //   component: () =>
  //     import("../components/AgentSidePages/AgentNewAddProperty.vue"),
  //   meta: { hideNavAndFooter: true },
  // },

  // {
  //   path: "/AgentNewManageProperty",
  //   name: "AgentManageProperty",
  //   component: () =>
  //     import("../components/AgentSidePages/AgentNewManageProperty.vue"),
  //   meta: { hideNavAndFooter: true },
  // },

  // {
  //   path: "/AgentNewChangePassword",
  //   name: "AgentChangePassword",
  //   component: () =>
  //     import("../components/AgentSidePages/AgentNewChangePassword.vue"),
  //   meta: { hideNavAndFooter: true },
  // },
  // {
  //   path: "/AgentNewSignOut",
  //   name: "AgentSignOut",
  //   component: () => import("../components/AgentSidePages/AgentNewSignOut.vue"),
  //   meta: { hideNavAndFooter: true },
  // },

  {
    path: "/AdminNew",
    name: "AdminListProperty",
    component: () => import("../MainPages/AdminNew.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminNewAddAgent",
    name: "AdminAddAgent",
    component: () => import("../components/AdminSidePages/AddAgent.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminNewAgentsTable",
    name: "AdminAgentsTable",
    component: () => import("../components/AdminSidePages/AgentsTable.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminNewPropertyTable",
    name: "AdminPropertyTable",
    component: () => import("../components/AdminSidePages/PropertyTable.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminNewBlogListing",
    name: "AdminBlogListing",
    component: () => import("../components/AdminSidePages/BlogListing.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminNewBlogTable",
    name: "AdminBlogTable",
    component: () => import("../components/AdminSidePages/BlogTable.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminNewSignOut",
    name: "AdminSignOut",
    component: () => import("../components/AdminSidePages/SignOutAdminNew.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/agentProfile",
    name: "AgentProfile",
    component: () => import("../MainPages/AgentProfile.vue"),
    meta: { hideNavAndFooter: false },
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../MainPages/Search.vue"),
    meta: { hideNavAndFooter: false },
  },

  {
    path: "/agentProfile/:id",
    name: "agentProfile",
    component: () => import("../MainPages/AgentProfile.vue"),
  },
  
  {
    path: "/Login",
    name: "Login",
    component: () => import("../MainPages/Login.vue"),
  },
  {
    path: "/AddJob",
    name: "AddJob",
    component: () => import("../MainPages/AddJob.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("./"),
  routes,
});

export default router;
