import React, {useReducer} from 'react';
import io from 'socket.io-client';
import AuthBlock from "./components/AuthBlock/AuthBlock";
import styled from 'styled-components';
import reducer from './reducer';
import {IS_AUTH} from "./reducer";

function App() {
    const [state, dispatch] = useReducer(reducer, {
        isAuth: false,
    });

    const onLogin = () => {
        dispatch({
            type: IS_AUTH,
            payload: true,
        })
    }

    return (
    <StyledWrapper>
        {!state.isAuth
            && <AuthBlock
                    onLogin={onLogin}
                />
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
`;

export default App;
