import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 400px;
  height: 97%;
  background-color: #fff;
  margin: 15px 15px 5px 15px;
  border-radius: 5px;
  opacity: 0.9;
`;

export const List = styled.ul`
  width: 100%;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  flex-basis: 50px;

  i {
    display: flex;
    align-items: center;
    color: #f00;
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  min-width: 48px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  width: 100%;
`;

export const Name = styled.strong`
  font-size: 15px;
`;

export const Login = styled.span`
  font-size: 12px;
  color: #717171;
`;

export const Delimiter = styled.hr`
  margin: 0 20px;
  color: #dedddd;
  border: 1px solid;
`;
