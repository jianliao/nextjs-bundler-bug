import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ButtonType } from '@swc-react/button';
import { ClearButtonType } from '@swc-react/button';
import { CloseButtonType } from '@swc-react/button';

export const SpButton = dynamic<
  Partial<ButtonType> | { children?: ReactNode } | { onClick: Function }
>(() => import('@swc-react/button').then((m) => m.Button as any), { ssr: false });
export const SpClearButton = dynamic<
  Partial<ClearButtonType> | { children?: ReactNode } | { onClick: Function }
>(() => import('@swc-react/button').then((m) => m.ClearButton as any), { ssr: false });
export const SpCloseButton = dynamic<
  Partial<CloseButtonType> | { children?: ReactNode } | { onClick: Function }
>(() => import('@swc-react/button').then((m) => m.CloseButton as any), { ssr: false });

export type { ButtonType, ClearButtonType, CloseButtonType } from '@swc-react/button';
