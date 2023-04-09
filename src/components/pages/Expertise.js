import React from 'react';
import {
  Boxes,
  Title,
  // Separator,
  Expertise,
  TitleMargin,
  ProfileDesc,
  HomeContainer,
  ExpertiseList,
  ExpertiseTitle,
  ExpertiseContainer,
  HomeContainerLayout,
} from '../styled-components-styles/ExpertiseStyles';

import { t } from '../../i18n/translate';

function Profile() {
  // const st = useSelector((state) => state.lightTheme.state);

  return (
    <HomeContainer id="profile">
        <div style={{ marginBottom: '2rem' }}></div>
      <HomeContainerLayout>
        <Title>{t('profileTitle')}</Title>
      </HomeContainerLayout>
      <ProfileDesc>{t('profileDesc')}</ProfileDesc>

      {/* <Separator /> */}

      <ExpertiseContainer>
        <Boxes>
          <ExpertiseTitle>
            <img src="../react-2.svg" alt="react" width="40px" />
            <TitleMargin>{t('librariesTitle')}</TitleMargin>
          </ExpertiseTitle>
          <Expertise>{t('librariesDesc')}</Expertise>
          <br />
          <ExpertiseList>{t('libraries')}</ExpertiseList>
        </Boxes>
        <Boxes>
          <ExpertiseTitle>
            <img src="../redux.svg" alt="redux" width="40px" />
            <TitleMargin>{t('statesTitle')}</TitleMargin>
          </ExpertiseTitle>
          <Expertise>{t('statesDesc')}</Expertise>
          <br />
          <ExpertiseList>{t('states')}</ExpertiseList>
        </Boxes>
        <Boxes>
          <ExpertiseTitle>
            <img src="../nodejs.svg" alt="js" width="40px" />
            <TitleMargin>{t('developmentTitle')}</TitleMargin>
          </ExpertiseTitle>
          <Expertise>{t('developmentDesc')}</Expertise>
          <br />
          <ExpertiseList>{t('development')}</ExpertiseList>
        </Boxes>
      </ExpertiseContainer>
    </HomeContainer>
  );
}

export default Profile;
