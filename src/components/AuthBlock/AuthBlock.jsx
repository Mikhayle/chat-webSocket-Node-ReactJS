import React, {useState} from 'react';
import styled from 'styled-components';
import socket from '../../socket';
import axios from 'axios';

const AuthBlock = ({ onLogin }) => {
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onEnterHandler = async () => {
        if (!roomId || !userName) {
            return alert('Неверные данные')
        }
        setIsLoading(prevState => !prevState)
        await axios.post('/rooms', {
            roomId,
            userName
        });
        onLogin();
    };

    return (
        <StyledWrapper>
            <Input
                type='text'
                placeholder='Room ID'
                value={roomId}
                onChange={(event) => setRoomId(event.target.value)}
            />
            <Input
                type='text'
                placeholder='Ваше имя'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <button
                className='btn btn-success'
                onClick={onEnterHandler}
                disabled={isLoading}
            >
                {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
            </button>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 5px 10px;
  width: 300px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export default AuthBlock;
