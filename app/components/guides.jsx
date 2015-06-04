import React from 'react';
import {IntlMixin} from 'react-intl';

import PageTitleActions from 'flux/actions/page-title';

export default class Guides extends React.Component {
  displayName = 'Guides'

  _getIntlMessage = IntlMixin.getIntlMessage

  componentWillMount() {
    const localizedTitle = this._getIntlMessage('guides.page-title');
    PageTitleActions.set(localizedTitle);
  }

  render() {
    return (
      <div>
        <h1>Guides</h1>
        <p>Coming soon...</p>
      </div>
    );
  }
}
