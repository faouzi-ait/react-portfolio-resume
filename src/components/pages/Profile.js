import React from 'react';
import {
  HomeContainer,
  Boxes,
  Title,
  ProfileDescription,
  Separator,
  SkillTitle,
  SkillSetContainer,
  SkillSetText,
  SkillSetQuote,
  SkillsetMainContainer,
  ResponseContainer,
  // EducationContainerBis,
  Education,
  EducationMainContainer,
} from '../styled-components-styles/ProfileStyles';
// import Page from "../../styled-components/Page";
import { t } from '../../i18n/translate';

function Profile() {
  const SkillSectionContainer = ({ title1, term1, title2, term2 }) => {
    return (
      <SkillSetContainer>
        <SkillSection title={title1} terms={term1} />
        <SkillSection title={title2} terms={term2} />
      </SkillSetContainer>
    );
  };

  const SkillSection = ({ title, terms }) => {
    return (
      <ResponseContainer>
        <SkillTitle>{title}</SkillTitle>
        <SkillSetText>{terms}</SkillSetText>
      </ResponseContainer>
    );
  };

  const EducationSection = ({ title, date, description }) => {
    return (
      <ResponseContainer>
        <SkillTitle>{title}</SkillTitle>
        <SkillSetText>{date}</SkillSetText>
        <SkillSetText>{description}</SkillSetText>
      </ResponseContainer>
    );
  };

  return (
    <HomeContainer id="profile">
      <Boxes>
        <Title>{t('profileTitle')}</Title>
        <ProfileDescription>{t('profileDesc')}</ProfileDescription>
        <Separator />

        <SkillsetMainContainer>
          <SkillSetContainer>
            <SkillSectionContainer
              title1={t('skillOverviewTitle')}
              term1={<SkillSetQuote>{t('skillOverview')}</SkillSetQuote>}
            />
          </SkillSetContainer>

          <SkillSectionContainer
            title1={t('skillSetDevTitle')}
            term1={t('skillSetDev')}
            title2={t('skillSetFrontTitle')}
            term2={t('skillSetFront')}
          />
          <SkillSectionContainer
            title1={t('skillSetUXTitle')}
            term1={t('skillSetUX')}
            title2={t('skillSetToolTitle')}
            term2={t('skillSetTool')}
          />
        </SkillsetMainContainer>

        <Separator />
        <Title>{t('education')}</Title>

        <EducationMainContainer>
          <SkillSectionContainer
            title1=""
            term1={
              <Education>
                I always aim at improving my skillset with practical approach
                and real world application development
              </Education>
            }
          />
          <EducationSection
            title="Application and Mobile Developement"
            date="Jan 2020 — Jan 2023, Nortumbria University, London"
            description={
              <Education>Msc in Application and Mobile Development</Education>
            }
          />
          <SkillSectionContainer title1="" term1="" />
          <EducationSection
            title="Information Technology"
            date="Nov 2002 — May 2005, Waterford City, Ireland"
            description={<Education>Bsc in Information Technology</Education>}
          />
        </EducationMainContainer>
      </Boxes>
    </HomeContainer>
  );
}

export default Profile;
