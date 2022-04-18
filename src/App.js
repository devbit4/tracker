import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const rotation = keyframes`
0% {
transform: rotate(0deg);
border-radius: 0px;
}
50%{
transform: rotate(360deg);
border-radius: 100px;
}
100%{
transform: rotate(0deg);
border-radius: 0px;
}
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  background-color: tomato;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 10s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
      // 클릭하면 active 상태
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😤</span>
      </Box>
    </Wrapper>
  );
}

export default App;
