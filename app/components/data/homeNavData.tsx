import NavbarItem from '../../interfaces/navbarItem';
export const navItems: NavbarItem[] = [
  { itemName: 'Home', link: '/', submenu: -1 },
  {
    itemName: 'About Us',
    link: '/aboutus',
    submenu: 0,
  },
  {
    itemName: 'What we do',
    link: '/services',
    submenu: 1,
  },
  {
    itemName: 'Tools',
    link: '/home-loan-calculator',
    submenu: 2,
  },
  {
    itemName: 'How we help',
    link: '/case-studies',
    submenu: 3,
  },
  {
    itemName: 'Articles',
    link: '/articles',
    submenu: -1,
  },
  {
    itemName: 'Contact us',
    link: '/contact-us',
    submenu: -1,
  },
];
