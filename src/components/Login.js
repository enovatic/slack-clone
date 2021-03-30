import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const newUser = {
                    name: result.user.displayName,
                    photo: result.user.photoURL,
                }
                localStorage.setItem('user', JSON.stringify(newUser));
                props.setUser(newUser);
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    return (
        <Container>
            <Content>
                <SlackLogo src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="" />
                <Title>
                    Sign in Slack
                </Title>
                <SignInGoogle>
                    <button onClick={() => signIn()}>Sign in with Google</button>
                </SignInGoogle>
            </Content>
        </Container>
    )
}

export default Login


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`

    const Content = styled.div`
        background: ${({ theme }) => theme.body2};
        display:grid;
        grid-template-rows:100px min-content min-content;
        margin: auto;
        max-width: 350px;
        padding: 80px;
        border-radius: 6px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12),
                    0 1px 2px rgba(0, 0, 0, 0.20);
    `

        const SlackLogo = styled.img`
            width: 100px;
            align-self: center;
            margin:auto;
            display:flex;
        `

        const Title = styled.h1`
            font-weight:900;
            line-height:3;
        `

        const SignInGoogle = styled.div`
            align-self: center;
            margin:auto;
            display:flex;
            
            button {
                border:none;
                transition: all 0.3s;
                background: #0a8d48;
                cursor: pointer;
                color: white;
                padding: 10px 15px;
                border-radius: 4px;
                box-shadow: ${({ theme }) => theme.boxShadow};

                :hover {
                    background: #461E47;
                    box-shadow: 0px 1px 20px 0px #331933;
                }

                :focus {
                    outline:none;
                }
            }
        `