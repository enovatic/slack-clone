import React from 'react'
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import SendIcon from '@material-ui/icons/Send';
import { BodyChatItemsData } from '../data/BodyChatData';
import { lightTheme, darkTheme } from "./themes/Themes";


function Chat() {
    return (
        <Container>
            <ChatHeader>
                <ChatHeaderLeft>
                    <h4># Enovatic <StarBorderRoundedIcon style={{ fontSize: "14px", padding: "5px"}} /></h4>
                    <p>Your tagline here ...</p>
                </ChatHeaderLeft>
                <ChatHeaderRight>
                    <p>Détails</p>
                    <InfoOutlinedIcon />
                </ChatHeaderRight>
            </ChatHeader>
            <ChatBody>
                {
                    BodyChatItemsData.map(item => (
                        <BodyChatItem>              
                            <img src={item.image} alt=""/>
                            <div>
                                <h4>{item.username}</h4>
                                <span>{item.date}</span>
                                <p>{item.description}</p>
                            </div>
                        </BodyChatItem>
                    ))
                }
            </ChatBody>
            <ChatFooter>
                <input type="text"/>
                <button><SendIcon /></button>
            </ChatFooter>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display:grid;
    grid-template-rows: 65px auto 100px;
`

    const ChatHeader = styled.div`
        padding: 10px 20px;
        border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
        display:flex;
        justify-content: space-between;
    `

        const ChatHeaderLeft = styled.div`


            h4 {
                font-size:15px;
                line-height: 22px;
                display:flex;
            }

            p {
                font-size:13px;
                color: ${({ theme }) => theme.text};
            }
        `

        const ChatHeaderRight = styled.div`
            display:flex;
            justify-content: center;
            align-items: center;

            p {
                margin-right: 10px;
            }
        `

    const ChatBody = styled.div`
        

    `
        const BodyChatItem = styled.div`
            padding: 10px 20px;
            display: grid;
            grid-template-columns: 55px auto;

            img {
                border-radius: 5px;
                width: 36px;
                height: 36px;
            }

            h4 {
                font-size:15px;
                line-height: 15px;
                display:inline-block;
                margin-right: 10px;
                font-weight: 900;
            }
            span {
                font-size:13px;
                color: #616061;
            }

            p {
                font-size:14px;
                color: #333333;
            }

            :hover {
                background-color: #eeeeee;
            }
        `

    const ChatFooter = styled.div`
        display: flex;
        position:relative;
        
        button {
            position: absolute;
            right:33px;
            top: 48%;
            transform: translate(0 , -40%);
            background: #007a5a;
            color: #fff;
            border: none;
            width: 34px;
            height:34px;
            padding:5px 0;
            display:block;
            cursor: pointer;
            border-radius: 4px;

            :focus {
                outline: none;
            }
        }

        input {
            width:100%;
            margin: 20px;
            background: transparent;
            border: none;
            padding: 12px 25px;
            color: #888888;
            border: 1px solid ${({ theme }) => theme.toggleBorder};
            border-radius: 4px; 

            :focus {
                outline: none;
            }
        }

    `

    