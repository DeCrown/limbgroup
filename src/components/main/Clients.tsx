import React from 'react';
import Content from "../shared/Content";
import ChapterHeader from "../shared/ChapterHeader";
import styled from "styled-components";
import ChapterText from "../shared/ChapterText";
import Cards from "../clients/Cards";
import BecomePartner from "../clients/BecomePartner";
import {Components} from "../../utils/Images";
import {DEVICE} from "../../utils/Device";
import Slider from "../shared/Slider";

const ContentStyle = styled(Content)`
  padding-top: 140px;
  height: 583px;
  display: flex;
  grid-gap: 110px;
  padding-bottom: 217px;
  
  .tablet & {
    padding-top: 90px;
    padding-bottom: 150px;
  }

  .mobile & {
    height: auto;
    padding-top: 40px;
    flex-direction: column;
    grid-gap: 50px;
    padding-bottom: 50px;
  }
`;

const ChapterStyle = styled.div`
  display: grid;
  align-content: space-between;
  flex-grow: 1;
`;

const ChapterTextStyle = styled(ChapterText)`
  max-width: 536px;
  
  .mobile & {
    max-width: unset;
    margin: 80px 0 30px 0;
  }
`;

const ClientsList = [
    {
        logo: Components.companyLogo,
        description: 'Наименование, небольшое писание компании и т.д. Наименование, небольшое писание компании и т.д. Наименование, небольшое писание компании и т.д.'
    },
    {
        logo: Components.companyLogo,
        description: 'Наименование, небольшое писание компании и т.д.'
    },
    {
        logo: Components.companyLogo,
        description: 'Наименование, небольшое писание компании и т.д.'
    },
    {
        logo: Components.companyLogo,
        description: 'Наименование, небольшое писание компании и т.д.'
    },
    {
        logo: Components.companyLogo,
        description: 'Наименование, небольшое писание компании и т.д.'
    }
];

const Clients = () => {
    return (
        <ContentStyle>
            <ChapterStyle>
                <ChapterHeader>Наши клиенты</ChapterHeader>
                <ChapterTextStyle>
                    Большую часть наших клиентов составляют представители малого и среднего бизнеса, желающие развить свой бизнес с помощью современных технологий.
                </ChapterTextStyle>
                {
                    DEVICE == 'mobile' ? <Slider slides={ClientsList} /> : <Cards clients={ClientsList} />
                }
            </ChapterStyle>
            <BecomePartner />
        </ContentStyle>
    );
};

export default Clients;