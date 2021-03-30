import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import {EditorChatData} from '../../data/EditorChatData';

function ChatInput({ sendMessage }) {

    const [ input, setInput ] = useState("");

    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input);
        setInput("");

    }
    return (
        <Container>
            <InputContainer>
                <form action="">
                    <input 
                        onChange={(e) => setInput(e.target.value)}
                        type="text" 
                        placeholder="Entrez un message ici ..."
                        value={input}
                    />
                    <SendButton 
                        type="submit"
                        onClick={send}
                    >
                        <Send />
                    </SendButton>
                </form>
                <EditorContainer>
                    <Shortcuts className="shortcuts" />
                    <EditorItems>
                        {
                            EditorChatData.map(item => ( 
                                <Item>
                                    {item.icon}
                                    <span>{item.text}</span>
                                </Item>
                            ))
                        }
                    </EditorItems>
                    
                </EditorContainer>
            </InputContainer>
        </Container>
    )
}

export default ChatInput;

const Container = styled.div`
    position:relative;
    padding: 0 20px 24px;
    
`

    const InputContainer = styled.div`
        position:relative;
        border: 1px solid ${({ theme }) => theme.toggleBorder};
        border-radius: 4px; 
        overflow:hidden;

        form {
            display:flex;
            height: 42px;
            align-items: center;
            padding-left: 10px;

            input {
                flex:1;
                background: transparent;
                color: ${({ theme }) => theme.text};
                border:none;
        
                :focus {
                    outline: none;
                }
            }
        }
        
        

    `

        const SendButton = styled.button`
            background: #007a5a;
            border: none;
            width: 32px;
            height:32px;
            display:flex;
            cursor: pointer;
            border-radius: 2px;
            font-size: 13px;
            align-items: center;
            justify-content: center;
            margin-right: 5px;
            transition: all 0.3s;
            cursor: pointer;


            .MuiSvgIcon-root {
                width:18px;
            }

            :focus {
                outline: none;
            }

            :hover {
                background: #148567;
            }
        `

            const Send = styled(SendIcon)`
                color: #d9d9d9;
            `


        const EditorContainer = styled.div`
            border-top: 1px solid ${({ theme }) => theme.toggleBorder};
            background: ${({ theme }) => theme.editorBackground};
            padding: 8px;
            display:flex;

            .MuiSvgIcon-root {
                width:18px;
            }

            .shortcuts {
                background: #1264A3;
                color: #d9d9d9;
                width: 22px;
                height: 22px;
                display: block;
                padding: 6px;
                border-radius: 50%;
                transition: all 0.3s;
                cursor: pointer;
                margin-right: 10px;

                :hover {
                    background: #2375B4;
                }
            }
            
        `

            const Shortcuts = styled(FlashOnIcon)`
                
            `
            const EditorItems = styled.div`
                display:flex;
                align-items:center;
                justify-content: center;
            `

                const Item = styled.div`
                    position: relative;
                    padding: 4px 8px;
                    border-radius: 2px;
                    cursor:pointer;

                    span {
                        position: absolute;
                        display:none;
                        z-index:10;
                        top: -140%;
                        left: 50%;
                        transform: translate( -50%, 0);
                        background: #222222;
                        color: white;
                        padding: 15px;
                        border-radius: 4px;
                        white-space: nowrap;
                        align-items: center;
                        justify-content: center;
                    }

                    :hover {
                        background:#DDD;

                        span {
                            display:block;
                        }
                    }
                `