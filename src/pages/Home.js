import * as React from "react";
import styled from "@emotion/styled";
import { Select, Input } from "../components/atoms";
import Bg from "../assets/pngs/bg2.jpg";
import Circle from "../svgs/Circle";
import Rectangle from "../svgs/Rectangle";
import Square from "../svgs/Sqaure";
import lightIcon from "../assets/svgs/light.svg";
import darkIcon from "../assets/svgs/dark.svg";
import Triangle from "../svgs/Triangle";
import Pentagon from "../svgs/Pentagon";
import Hexagon from "../svgs/Hexagon";
import Star from "../svgs/Star";

const Container = styled.div`
  height: 100vh;
  display: flex;
`;
const TopHalf = styled.div`
  box-shadow: 0 0px 50px rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Bg});
  background: linear-gradient(
      rgba(22, 22, 29, 0.95) 100%,
      rgba(22, 22, 29, 0.95) 100%
    ),
    url(${Bg});
  background-size: contain;
  padding: 0 1.5rem;
  position: relative;
  flex: 0.5;
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
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
`;

const InnerInputGroup = styled.div`
  margin-right: 1rem;
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

const BottomHalf = styled.div`
  background-color: ${(props) => props.theme.colors.body};
  transition: all 1s;
  width: 100%;
  flex: 0.5;
  overflow: hidden;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  position: absolute;
  width: 100%;
  top: 0;
`;

const ModeButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  width: 50px;
  cursor: pointer;
  padding: 5px;
`;

const shapesMap = {
  circle: Circle,
  rectangle: Rectangle,
  square: Square,
  triangle: Triangle,
  pentagon: Pentagon,
  hexagon: Hexagon,
  star: Star,
};

const Label = styled.label`
  color: #fff;
`;
const Home = ({ isDark, setDark }) => {
  const [shapeName, setShapeName] = React.useState("");
  const [length, setLength] = React.useState(300);
  const Shape = shapesMap[shapeName];
  const [fill, setFill] = React.useState("#f5f5f5");
  const [stroke, setStroke] = React.useState("black");
  return (
    <Container>
      <TopHalf>
        <Header>
          <ModeButton onClick={() => setDark((currentTheme) => !currentTheme)}>
            {isDark ? (
              <img src={lightIcon} alt="light mode" />
            ) : (
              <img src={darkIcon} alt="dark mode" />
            )}
          </ModeButton>
        </Header>
        <HeadingGroup>
          <Heading>Awesome Shapes</Heading>
          <InputGroup>
            <Select
              m="0 20px 0 0"
              placeholder="Select shape to draw"
              onChange={(e) => setShapeName(e.target.value)}
            >
              <option value={null} defaultValue>
                Select shape to draw
              </option>
              {Object.keys(shapesMap).map((shapeName) => (
                <option key={shapeName} value={shapeName}>
                  {shapeName}
                </option>
              ))}
            </Select>
            <Input
              type="number"
              name="length"
              placeholder="Enter shape length"
              value={length}
              onChange={(e) => {
                console.log(e.target.value);
                setLength(e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup center>
            <InnerInputGroup>
              <Label htmlFor="fill">Fill: &nbsp;</Label>
              <input
                type="color"
                name="fill"
                value={fill}
                onChange={(e) => {
                  setFill(e.target.value);
                }}
              />
            </InnerInputGroup>
            <InnerInputGroup>
              <Label htmlFor="fill">Stroke: &nbsp;</Label>
              <input
                type="color"
                name="stroke"
                value={stroke}
                onChange={(e) => {
                  setStroke(e.target.value);
                }}
              />
            </InnerInputGroup>
          </InputGroup>
        </HeadingGroup>
      </TopHalf>
      <BottomHalf>
        <DrawBoard>
          {Shape && <Shape length={length} fill={fill} stroke={stroke} />}
        </DrawBoard>
      </BottomHalf>
    </Container>
  );
};

export default Home;
