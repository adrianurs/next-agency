import { FC } from 'react';
import { LinkItem } from '../../types';

export interface IDropdownNavLinkProps {
  dropdownButtonLabel: string;
  items: LinkItem[];
  active?: boolean;
  currentPath: string;
}

export type DropdownNavLinkFC = FC<IDropdownNavLinkProps>;
