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
    icon: 'AdminIcon',
    name: 'Admins',
  },
  {
    path: '/mentors',
    icon: 'MentorIcon',
    name: 'Mentors',
  },
  {
    path: '/mentees',
    icon: 'PeopleIcon',
    name: 'Mentees',
  },
  {
    path: '/skills',
    icon: 'SkillIcon',
    name: 'Skills',
  },
  {
    path: '/categories',
    icon: 'CategoryIcon',
    name: 'Categories',
  },
  {
    path: '/giftcodes',
    icon: 'GiftIcon',
    name: 'Giftcodes',
  },
]

export default routes
