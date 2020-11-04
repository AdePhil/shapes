import * as React from "react";
import styled from "@emotion/styled";
import { Select, Input } from "../../components/atoms";
import Bg from "../../assets/pngs/bg2.jpg";
import Circle from "../../svgs/Circle";
import Rectangle from "../../svgs/Rectangle";
import Square from "../../svgs/Sqaure";
import lightIcon from "../../assets/svgs/light.svg";
import darkIcon from "../../assets/svgs/dark.svg";
import Triangle from "../../svgs/Triangle";
import Pentagon from "../../svgs/Pentagon";
import Hexagon from "../../svgs/Hexagon";
import Star from "../../svgs/Star";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import CutDiamond from "../../svgs/CutDiamond";
import Diamond from "../../svgs/Diamond";
import TvScreen from "../../svgs/TvScreen";
import Cone from "../../svgs/Cone";
import Envelop from "../../svgs/Envelop";
import Plus from "../../svgs/Plus";
import Trapezoid from "../../svgs/Trapezoid";
import Message from "../../svgs/Message";
import LeftArrow from "../../svgs/LeftArrow";
import RightArrow from "../../svgs/RightArrow";
import Octagon from "../../svgs/Octagon";
import Parallelogram from "../../svgs/Parallelogram";
import Times from "../../svgs/Times";
import debounce from "lodash.debounce";

const Container = styled.div`
  height: 100vh;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }
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
  @media (max-width: 1000px) {
    flex: 0.5;
  }
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
  display: flex;
  align-items: center;
`;

const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media (max-width: 600px) {
    padding: 7rem 1rem 8rem;
  }
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

  @media (max-width: 1000px) {
    align-items: flex-start;
  }
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
  width: 40px;
  cursor: pointer;
  padding: 5px;
`;

const shapesMap = {
  circle: Circle,
  rectangle: Rectangle,
  square: Square,
  triangle: Triangle,
  parallelogram: Parallelogram,
  trapezoid: Trapezoid,
  diamond: Diamond,
  pentagon: Pentagon,
  hexagon: Hexagon,
  octagon: Octagon,
  star: Star,
  "cut-diamond": CutDiamond,
  "tv-screen": TvScreen,
  cone: Cone,
  envelop: Envelop,
  plus: Plus,
  times: Times,
  message: Message,
  "left-arrow": LeftArrow,
  "right-arrow": RightArrow,
};

const Label = styled.label`
  color: #fff;
`;

const Home = ({ isDark, setDark }) => {
  const [shapeName, setShapeName] = useLocalStorage("shapeName", "");

  const [fill, setFill] = useLocalStorage("fill", "#A3A3D7");
  const [stroke, setStroke] = useLocalStorage("stroke", "#E19898");

  const [length, setLength] = useLocalStorage("shapeLength", 300);
  const [lengthInput, setLengthInput] = React.useState(length);
  const Shape = shapesMap[shapeName];

  const setDebouncedLength = React.useCallback(
    debounce((q) => setLength(q), 800),
    []
  );

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
              value={shapeName}
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
              value={lengthInput}
              onChange={(e) => {
                setLengthInput(e.target.value);
                setDebouncedLength(e.target.value);
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
          {Shape && <Shape length={lengthInput} fill={fill} stroke={stroke} />}
        </DrawBoard>
      </BottomHalf>
    </Container>
  );
};

export default Home;
