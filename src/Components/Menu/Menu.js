import React from 'react';
import styled from 'styled-components';
import dbMenu, { DBMenu } from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from '../Style/Banner';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger}
                      setOpenItem={setOpenItem}>
            </ListItem>
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other}
                    setOpenItem={setOpenItem} setOpenItem={setOpenItem}>
            </ListItem>
        </SectionMenu>
    </MenuStyled>
)