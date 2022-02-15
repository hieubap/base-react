import Authorization from "layouts/authorization";
import React, { Suspense } from "react";

// public
const Home = React.lazy(() => import("./public/wall"));
const Chat = React.lazy(() => import("./public/chat"));

const SignIn = React.lazy(() => import("./auth/signIn"));
const SignUp = React.lazy(() => import("./auth/signUp"));

const Page =
  (Component, roles = []) =>
  (props) => {
    return (
      <Suspense fallback={<div>loading</div>}>
        <Authorization accessRoles={roles} isCheckRoute>
          <Component {...props} />
        </Authorization>
      </Suspense>
    );
  };

export const routes_public = [
  {
    path: "/p/home",
    component: Page(Home, []),
  },
  {
    path: "/p/chat",
    component: Page(Chat, []),
  },
];

export const routes_auth = [
  {
    path: "/auth/signin",
    component: Page(SignIn, []),
  },
  {
    path: "/auth/signup",
    component: Page(SignUp, []),
  },
];
