import { FC } from 'react';
import { LinkItem } from '../types';

export interface INavLinkProps {
  item?: LinkItem;
  isDropdown?: boolean;
  dropdownButtonLabel?: string;
  items?: LinkItem[];
}

export type NavLinkFC = FC<INavLinkProps>;
