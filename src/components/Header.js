import React from 'react'
import styled from 'styled-components';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import { lightTheme, darkTheme } from "./themes/Themes";


function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search ..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    Beckx Fabian
                </Name>
                <UserImage>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" alt=""/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: ${({ theme }) => theme.background};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%)
`

const Main = styled.div`
    display: flex;
    margin: 0 16px;
`

const SearchContainer = styled.div`
    min-width: 500px;
    margin: 0 16px;
    
`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.searchBorder};
    width: 100%;
    border-radius: 6px;
    display:flex;
    align-items: center;
    background-color: ${({ theme }) => theme.searchBackground};


    input {
        border: none;
        width: 100%;
        padding: 4px 8px;
        color: white;
        background-color: transparent;

    }

    input:focus {
        outline: none;
    }
`

const UserContainer = styled.div`
    display:flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 23px;
    height: 23px;
    border: 2px solid white;
    border-radius: 50%;
    padding: 2px;

    img {
        width:100%;
    }
`