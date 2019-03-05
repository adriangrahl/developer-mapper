import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 300px;
  padding: 15px;
`;

export const Strong = styled.strong`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;

  button {
    width: 100%;
    max-width: 120px;
    border-radius: 5px;
    border: 1px;
  }
`;

export const Cancel = styled.button`
  background: #dfe0df;

  &:hover {
    background: #c2c5c2;
  }
`;

export const Add = styled.button`
  background: #8fe88f;

  &:hover {
    background: #52e452;
  }
`;

