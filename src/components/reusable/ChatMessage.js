import React from 'react';
import styled from 'styled-components';

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <Container>
            <UserAvatar>
                <img src={image} alt=""/>
            </UserAvatar>     
            <MessageContent>
                <Name>
                    {name}
                    <span>{ new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    <p>{text}</p>
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items:center;

    :hover {
        background-color: #dddddd;
    }
`
    const UserAvatar = styled.div`
        width: 36px;
        height: 36px;
        border-radius: 5px;
        overflow:hidden;
        margin-right: 8px;

        img {
            width:100%;
        }
    `

    const MessageContent = styled.div`
        display:flex;
        flex-direction: column;
    `

        const Name = styled.span`
            font-size: 15px;
            line-height: 15px;
            font-weight: 900;
            line-height: 1.4;

            span {
                font-size:13px;
                color: #616061;
                font-weight: 400;
                margin-left: 8px;
            }        
        `

        const Text = styled.span`
            font-size:14px;
            color: #333333;
        `
    