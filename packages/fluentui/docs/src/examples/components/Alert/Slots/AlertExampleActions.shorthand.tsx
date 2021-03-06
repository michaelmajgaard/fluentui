import * as React from 'react';
import { Alert } from '@fluentui/react-northstar';

const AlertExampleDismissAction = () => (
  <Alert
    actions={[{ content: 'Privacy policy', primary: true }, 'Settings']}
    content="Get all the best inventions in your e-mail every day. Sign up now!"
    dismissible
  />
);

export default AlertExampleDismissAction;
