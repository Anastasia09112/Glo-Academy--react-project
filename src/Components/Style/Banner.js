import React from 'react';
import styled from 'styled-components';
import bannerImg from '../../image/banner.png';

const BannerStyled = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${bannerImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 80px;
`;

export const Banner = () => (
    <BannerStyled>
        
    </BannerStyled>
)