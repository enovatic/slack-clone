import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import ChatInput from './reusable/ChatInput';
import ChatMessage from './reusable/ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';


function Chat({ user }) {

    let { channelId } = useParams();
    const [ channel, setChannel ] = useState();
    const [ messages, setMessages ] = useState([]);

    const getMessages = () => {
        db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                let messages = snapshot.docs.map((doc) => doc.data());
                setMessages(messages);
        })
    }

    const sendMessage = (text) => {
        if(channelId) {
            let payload = {
                text,
                timestamp: firebase.firestore.Timestamp.now(),
                user : user.name,
                userImage: user.photo,
            }
            db.collection("rooms")
                .doc(channelId)
                .collection('messages')
                .add(payload)

            console.log(payload);
        }
    }

    const getChannel = () => {
        db.collection('rooms')
            .doc(channelId)
            .onSnapshot((snapshot) => {
                setChannel(snapshot.data());
        })
    }

    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId])

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # { channel && channel.name } <StarBorderRoundedIcon style={{ fontSize: "14px", padding: "5px"}} />
                    </ChannelName>
                    <ChannelInfo>
                        Your tagline here ...
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>Détails</div>
                    <Info />
                </ChannelDetails>
            </Header>

            <MessageContainer>
                {
                    messages.length > 0 &&
                    messages.map((data, index) => (
                        <ChatMessage 
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp} 
                        />
                    ))
                }
            </MessageContainer>

            <ChatInput sendMessage={sendMessage} />
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display:grid;
    grid-template-rows: 65px auto min-content;
    min-height:0;
`

    const Header = styled.div`
        padding: 10px 20px;
        border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
        display:flex;
        justify-content: space-between;
        align-items:center;
    `

        const Channel = styled.div`
            p {
                font-size:13px;
                color: ${({ theme }) => theme.text};
            }
        `
        
            const ChannelName = styled.div`
                font-weight:900;
                font-size:15px;
                line-height: 22px;
                display:flex;
            `

            const ChannelInfo = styled.div`
                font-weight:400;
                font-size:13px;
                color: #606060;

            `

        const ChannelDetails = styled.div`
            display:flex;
            align-items: center;
            color: #606060;
        `

            const Info = styled(InfoOutlinedIcon)`
                margin-left: 10px;
            `

    const MessageContainer = styled.div`
        display:flex;
        flex-direction: column;
        overflow-y: scroll;

    `

        

    

    