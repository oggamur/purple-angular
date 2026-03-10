export interface MenuItemInt {
  id: number;
  iconUrlActive: string;
  iconUrlInActive: string;
  text: string;
  link: string;
}
export const menuItems: MenuItemInt[] = [
  {
    id: 0,
    iconUrlActive: './icons/header/home_active_icon.svg',
    iconUrlInActive: './icons/header/home_inactive_icon.svg',
    text: 'Главная',
    link: '/private/home',
  },
  {
    id: 1,
    iconUrlActive: './icons/header/favorites_active_icon.svg',
    iconUrlInActive: './icons/header/favorites_inactive_icon.svg',
    text: 'Избранное',
    link: '/private/favorites',
  },
];
