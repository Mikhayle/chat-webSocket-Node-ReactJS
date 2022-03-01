import React, {useEffect, useReducer} from 'react';
import socket from './socket';
import AuthBlock from "./components/AuthBlock/AuthBlock";
import styled from 'styled-components';
import reducer from './reducer';
import {JOINED} from "./reducer";
import Chat from "./components/Chat";

function App() {
    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        roomId: null,
        userName: null
    });

    const onLogin = (entriesData) => {
        dispatch({
            type: JOINED,
            payload: entriesData,
        });
        // socket request to backend
        socket.emit('ROOM: JOIN', entriesData);
    };

    useEffect(() => {
        socket.on('ROOM: JOINED', (users) => {
            console.log('Новый пользователь: ', users);
        })
    }, [])

    window.socket = socket;

    return (
    <StyledWrapper>
        {!state.joined
            ? <AuthBlock
                    onLogin={onLogin}
                />
            : <Chat />
        }
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content:center;
  
  @media screen and (max-width: 768px) {
    align-items: start;
  }
`;

export default App;
