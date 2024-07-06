// const navItems = ["Home", "About", "Contact"];

export const navItems = [
  {
    label: "Dashboard",
    link: "/dashboard",
    auth_required: true,
  },
  {
    label: "Home",
    link: "/",
    auth_required: false,
  },
  {
    label: "About",
    link: "/About",
    both: true,
  }, 
  {
    label: "Login",
    link: "/login",
    auth_required: false,
  },
  {
    label: "Signup",
    link: "/signup",
    auth_required: false,
  },
];
