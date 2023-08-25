import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const App = () => {
  const [state, setState] = useState<string>("");

  const getRandomSpeed = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    if (state) {
      window.location.reload();
    }
  }, [state]);

  return (
    <div>
      <Container>
        <Choice>
          <Hold>
            <label>Red</label>
            <input
              type="radio"
              value={"Red"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);
              }}
            />
          </Hold>
          <Hold>
            <label>Blue</label>
            <input
              type="radio"
              value={"Blue"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);
              }}
            />
          </Hold>
          <Hold>
            <label>White</label>
            <input
              type="radio"
              value={"White"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);
              }}
            />
          </Hold>
        </Choice>
        <TrackField>
          <BallHolder>
            <Ball bg="red" sp={`${getRandomSpeed(6, 1)}s`} />
            <Ball bg="blue" sp={`${getRandomSpeed(6, 1)}s`} />
            <Ball bg="white" sp={`${getRandomSpeed(6, 1)}s`} />
            <Ball bg="green" sp={`${getRandomSpeed(6, 1)}s`} />
          </BallHolder>
          <Line />
        </TrackField>
      </Container>
    </div>
  );
};

export default App;

const Choice = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0;
  display: flex;
`;

const Hold = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0 20px;
`;

const BallHolder = styled.div`
  position: absolute;
`;

const Ball = styled.div<{ bg?: string; sp?: string }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  margin: 8px;

  animation-name: ball;
  animation-duration: ${({ sp }) => sp};
  /* animation-iteration-count: infinite; */

  @keyframes ball {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(1170px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

const Line = styled.div`
  border-bottom: 1px solid white;
  width: 100%;
  height: 2px;
`;

const TrackField = styled.div`
  width: 1200px;
  height: 250px;
  background-color: #545454;
  border: 2px solid silver;
  display: flex;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: green;
  margin: 0;
`;
