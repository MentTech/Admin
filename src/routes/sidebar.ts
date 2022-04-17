/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/admins',
    icon: 'PeopleIcon',
    name: 'Admins',
  },
  {
    path: '/mentors',
    icon: 'PeopleIcon',
    name: 'Mentors',
  },
  {
    path: '/users',
    icon: 'PeopleIcon',
    name: 'Mentees',
  },
  {
    path: '/skills',
    icon: 'ClassIcon',
    name: 'Skills',
  },
  {
    path: '/categories',
    icon: 'ClassIcon',
    name: 'Categories',
  },
  {
    path: '/tokens',
    icon: 'ClassIcon',
    name: 'Tokens',
  },
]

export default routes
