import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { Button as SpButton } from '@spectrum-web-components/button';
import { ClearButton as SpClearButton } from '@spectrum-web-components/button';
import { CloseButton as SpCloseButton } from '@spectrum-web-components/button';

import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/button/sp-clear-button.js';
import '@spectrum-web-components/button/sp-close-button.js';

export const Button = createComponent({
    displayName: 'Button',
    elementClass: SpButton,
    react: React,
    tagName: 'sp-button',
    events: {},
});
export const ClearButton = createComponent({
    displayName: 'ClearButton',
    elementClass: SpClearButton,
    react: React,
    tagName: 'sp-clear-button',
    events: {},
});
export const CloseButton = createComponent({
    displayName: 'CloseButton',
    elementClass: SpCloseButton,
    react: React,
    tagName: 'sp-close-button',
    events: {},
});

export type ButtonType = EventTarget & SpButton;
export type ClearButtonType = EventTarget & SpClearButton;
export type CloseButtonType = EventTarget & SpCloseButton;
