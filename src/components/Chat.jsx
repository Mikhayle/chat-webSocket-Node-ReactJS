import React from 'react';
import styled from 'styled-components';

const Chat = () => {
    return (
        <StyledWrapper>
            <UsersContainer>
                <Title>
                    Users (1):
                </Title>
                <ul>
                    <UserItem>
                        Test User
                    </UserItem>
                </ul>
            </UsersContainer>
            <MessagesContainer>
                <ul>
                    <Message>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <span>
                            Test User
                        </span>
                    </Message>
                    <Message>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <span>
                            Test User
                        </span>
                    </Message>
                </ul>
                <FormBlock>
                    <NewMessageArea
                        rows='3'
                    >
                    </NewMessageArea>
                    <button
                        type='button'
                        className='btn btn-primary'
                    >
                        Отправить
                    </button>
                </FormBlock>
            </MessagesContainer>
        </StyledWrapper>
    )
};

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  min-height: 90vh;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  
   @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const UsersContainer = styled.div`
  padding: 20px 10px;
  width: 20%;
  background-color: #d4d4d4;
  
  @media screen and (max-width: 768px) {
    max-height: 20vh;
    width: 100%;
    padding: 10px;
  }
`;

const Title = styled.h2`

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const UserList = styled.ul`
  
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;


const UserItem = styled.li`
  margin: 15px 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  font-weight: 700;
  
  @media screen and (max-width: 768px) {
    width: fit-content;
    margin: 0 10px 0 0;
    
  }
`;

const MessagesContainer = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  width: 80%;
  
  @media screen and (max-width: 768px) {
    max-height: 80vh;
    width: 100%;
  }
`;

const Message = styled.li`
  margin-bottom: 20px;  
  
  p {
    padding: 15px;
    margin-bottom: 10px;
    background-color: #7600fd;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
  }
  
  span {
    color: #ccc;
  }
`;

const FormBlock = styled.form`
  padding: 20px 0;
  border-top: 1px solid #ccc;
`;

const NewMessageArea = styled.textarea`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
`;

export default Chat;
