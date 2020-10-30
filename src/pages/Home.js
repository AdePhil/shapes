import * as React from "react";
import styled from "@emotion/styled";
import { Select, Input } from "../components/atoms";
import Bg from "../assets/pngs/bg2.jpg";
import Circle from "../svgs/Circle";
import Rectangle from "../svgs/Rectangle";
import Square from "../svgs/Sqaure";
import Polygon from "../svgs/Polygon";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const TopHalf = styled.div`
  height: 45vh;
  box-shadow: 0 0px 50px rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(45, 55, 72, 1);
  background-image: url(${Bg});
  background: linear-gradient(
      rgba(45, 55, 72, 0.98) 100%,
      rgba(45, 55, 72, 0.98) 100%
    ),
    url(${Bg});
  background-size: contain;
  padding: 0 1.5rem;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 4.5rem;
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const DrawBoard = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0rem;
  position: relative;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  flex: 1;
`;

const shapesMap = {
  circle: Circle,
  rectangle: Rectangle,
  square: Square,
  pentagon: Polygon,
};
const Home = () => {
  const [shapeName, setShapeName] = React.useState("");
  const [length, setLength] = React.useState(100);
  const Shape = shapesMap[shapeName];
  const fill = "#f5f5f5";
  return (
    <Container>
      <TopHalf>
        <HeadingGroup>
          <Heading>Awesome Shapes</Heading>
          <InputGroup>
            <Select
              m="0 20px 0 0"
              placeholder="Select shape to draw"
              onChange={(e) => setShapeName(e.target.value)}
            >
              <option value={null} selected>
                Select shape to draw
              </option>
              <option value="circle">Circle</option>
              <option value="rectangle">Rectangle</option>
              <option value="square">Square</option>
              <option value="polygon">Polygon</option>
            </Select>
            <Input
              type="number"
              placeholder="Enter shape length"
              onChange={(e) => setLength(e.target.value)}
            />
          </InputGroup>
        </HeadingGroup>
      </TopHalf>
      <DrawBoard>{Shape && <Shape length={length} fill={fill} />}</DrawBoard>
    </Container>
  );
};

export default Home;
