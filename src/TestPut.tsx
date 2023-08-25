import { useEffect, useState } from "react";
import styled from "styled-components";
import pix from "./assets/image.jpg";
import pix2 from "./assets/2.jpg";

interface iData {
  quote: string;
  name: string;
}

const App = () => {
  const [state, setState] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const [data, setData] = useState<Array<iData>>([
    {
      quote: "This is The Lord's Doing Lorem ipsum dolor sit amet....!",
      name: "Peter",
    },
    {
      quote:
        "eveniet rem doloremque dolor nostrum officiis excepturi laudantium.!",
      name: "James",
    },
    {
      quote:
        "Commodi dolorum, repellat eius accusamus et reprehenderit labore! !",
      name: "Zion",
    },

    {
      quote:
        "Dignissimos eum vitae eveniet rem doloremque dolor nostrum officiis excepturi laudantium.",
      name: "Ayo",
    },

    {
      quote:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum quo amet ",
      name: "Daniel",
    },
    {
      quote:
        "Commodi dolorum, repellat eius accusamus et reprehenderit labore! !",
      name: "Prince",
    },
    {
      quote:
        "eveniet rem doloremque dolor nostrum officiis excepturi laudantium.!",
      name: "Joan",
    },
  ]);

  const nextFunc = () => {
    setCount((el: number) => {
      return el + 1;
    });
  };

  const prevFunc = () => {
    setCount((el: number) => {
      if (el > 0) {
        return el - 1;
      } else {
        if (el === 0) {
          return (el = data.length - 1);
        }
      }
    });
  };

  useEffect(() => {
    setInterval(() => {
      setCount((el) => {
        return el + 1;
      });
    }, 3000);
  }, []);

  const getRandColor = () => {
    return `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
  };

  return (
    <Container>
      <Wrapper>
        {/* <Image src={pix} />
        <Image1 src={pix2} /> */}
        <Box>
          {/* value: {state % 4} */}
          <Div
            style={{
              color: `${getRandColor()}`,
            }}
          >
            {data[count % data.length].quote}
          </Div>
          <Span>...{data[count % data.length].name}</Span>
        </Box>
        <Box1>
          <ButtonPrev onClick={prevFunc}>Previous</ButtonPrev>
          <ButtonNext onClick={nextFunc}>Next</ButtonNext>
        </Box1>

        {/* <But>1</But> */}
      </Wrapper>
    </Container>
  );
};

export default App;

const Image1 = styled.img`
  width: 400px;
  height: 250px;
  border: 1px solid silver;
  border-radius: 5px;
  object-fit: cover;
  margin: 10px 0;
`;

const Image = styled.img`
  width: 400px;
  height: 250px;
  border: 1px solid silver;
  border-radius: 5px;
  object-fit: cover;
  margin: 10px 0;
`;

const Div = styled.div``;
const Span = styled.div`
  font-weight: normal;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-right: 40px;
  font-size: 15px;
`;

const ButtonNext = styled.div`
  margin: 0 10px;
  background-color: green;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 350ms;

  &:hover {
    transform: scale(1.06);
  }
`;

const ButtonPrev = styled.div`
  margin: 0 10px;
  background-color: red;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 350ms;

  &:hover {
    transform: scale(1.06);
  }
`;

const Box1 = styled.div`
  width: 500px;
  height: 50px;
  border: 1px solid silver;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 500px;
  height: 250px;
  border: 1px solid silver;
  padding: 0 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 22px;
`;

const Wrapper = styled.div`
  width: 700px;
  min-height: 400px;
  border: 1px solid silver;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 95vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
