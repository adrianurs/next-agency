import { FC } from 'react';
import { LinkItem } from '../types';

export interface INavLinkProps {
	item: LinkItem;
}

export type NavLinkFC = FC<INavLinkProps>;
