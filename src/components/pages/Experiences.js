import React from 'react';
import Page from '../../styled-components/Page';
import { t } from '../../i18n/translate';

function Experiences() {
  return <Page id="experiences">
    {t('experiences')}
    <br />
    {t('text')}
    </Page>;
}

export default Experiences;
