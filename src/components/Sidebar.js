import React from 'react'
import styled from 'styled-components'
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { sidebarItemsData } from '../data/SidebarData';
import db from '../firebase';
import { useHistory } from 'react-router-dom';


function Sidebar( props ) {

    const history = useHistory();

    const goToChannel = (id) => {
        if (id) {
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const promptName = prompt("Enter channel name");
        if(promptName) {
            db.collection('rooms').add({
                name: promptName
            })
        }
    }
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Enovatic
                </Name>
                <NewMessage>
                    <PostAddRoundedIcon />
                </NewMessage>  
            </WorkspaceContainer>

            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem> 
                    ))
                }
                
            </MainChannels>

            <ChannelsContainer>
                <NewChannelContainer>

                    <div>
                        Channels
                    </div>
                    <AddRoundedIcon onClick={addChannel} />
                    
                </NewChannelContainer>
                <ChannelsList>
                {
                    props.rooms.map(item => (
                        <Channel onClick={ () => goToChannel(item.id) } >
                            # {item.name}
                        </Channel>
                    ))
                }
                </ChannelsList>
            </ChannelsContainer>

        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    background: ${({ theme }) => theme.background};
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items:center;
    padding: 0 19px;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.sidebarBorder};
`

    const Name = styled.div`

    `

    const NewMessage = styled.div`
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: white;
        color: #3f0E40;
        fill: #3f0E40;
        display:flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `

const MainChannels = styled.div`
    padding-top: 10px;
`

    const MainChannelItem = styled.div`
        color: rgb(188, 171, 188);
        display: grid;
        grid-template-columns: 15% auto;
        height: 28px;
        align-items: center;
        cursor: pointer;
        padding-left: 19px;
        :hover {
            background: #300832;
        }
    `

const ChannelsContainer = styled.div`
    color: rgb(188, 171, 188);
    margin-top: 10px;
`

    const NewChannelContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items:center;
        height: 28px;
        padding-left: 19px;
        padding-right: 12px;
    `

const ChannelsList = styled.div`

`

    const Channel = styled.div`
        height: 28px;
        display:flex;
        align-items: center;
        padding-left: 19px;
        cursor: pointer;

        :hover {
            background: #350D36;
        }
    `
    