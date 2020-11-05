import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "emotion-theming";
import { lightTheme } from "../../theme";
import Home from "./Home";

describe("check if svg renders on select", () => {
  test("check if circle svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "circle");
    expect(screen.getByTestId("circle")).toBeInTheDocument();
  });

  test("check if rectangle svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "rectangle");
    expect(screen.getByTestId("rectangle")).toBeInTheDocument();
  });

  test("check if square svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "square");
    expect(screen.getByTestId("square")).toBeInTheDocument();
  });

  test("check if triangle svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "triangle");
    expect(screen.getByTestId("triangle")).toBeInTheDocument();
  });
  test("check if parallelogram svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "parallelogram");
    expect(screen.getByTestId("parallelogram")).toBeInTheDocument();
  });

  test("check if trapezoid svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "trapezoid");
    expect(screen.getByTestId("trapezoid")).toBeInTheDocument();
  });

  test("check if diamond svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "diamond");
    expect(screen.getByTestId("diamond")).toBeInTheDocument();
  });

  test("check if pentagon svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "pentagon");
    expect(screen.getByTestId("pentagon")).toBeInTheDocument();
  });

  test("check if hexagon svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "hexagon");
    expect(screen.getByTestId("hexagon")).toBeInTheDocument();
  });

  test("check if octagon svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "octagon");
    expect(screen.getByTestId("octagon")).toBeInTheDocument();
  });

  test("check if star svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "star");
    expect(screen.getByTestId("star")).toBeInTheDocument();
  });

  test("check if cut-diamond svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "cut-diamond");
    expect(screen.getByTestId("cut-diamond")).toBeInTheDocument();
  });

  test("check if tv-screen svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "tv-screen");
    expect(screen.getByTestId("tv-screen")).toBeInTheDocument();
  });
  test("check if cone svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "cone");
    expect(screen.getByTestId("cone")).toBeInTheDocument();
  });

  test("check if envelop svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "envelop");
    expect(screen.getByTestId("envelop")).toBeInTheDocument();
  });
  test("check if plus svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "plus");
    expect(screen.getByTestId("plus")).toBeInTheDocument();
  });
  test("check if times svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "times");
    expect(screen.getByTestId("times")).toBeInTheDocument();
  });
  test("check if message svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "message");
    expect(screen.getByTestId("message")).toBeInTheDocument();
  });

  test("check if left-arrow svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }
    userEvent.selectOptions(screen.getByRole("combobox"), "left-arrow");
    expect(screen.getByTestId("left-arrow")).toBeInTheDocument();
  });

  test("check if right-arrow svg renders", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "right-arrow");
    expect(screen.getByTestId("board")).toBeInTheDocument();
  });
});

describe("check if svg renders with right length from input", () => {
  test("check circle svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "circle");
    const svg = screen.getByTestId("circle");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });
  test("check rectangle svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "rectangle");
    const svg = screen.getByTestId("rectangle");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length / 2}px`);
  });
  test("check square svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "square");
    const svg = screen.getByTestId("square");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });
  test("check triangle svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "triangle");
    const svg = screen.getByTestId("triangle");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });
  test("check parallelogram svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "parallelogram");
    const svg = screen.getByTestId("parallelogram");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check trapezoid svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "trapezoid");
    const svg = screen.getByTestId("trapezoid");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check diamond svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "diamond");
    const svg = screen.getByTestId("diamond");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check pentagon svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "pentagon");
    const svg = screen.getByTestId("pentagon");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check hexagon svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "hexagon");
    const svg = screen.getByTestId("hexagon");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check octagon svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "octagon");
    const svg = screen.getByTestId("octagon");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check star svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "star");
    const svg = screen.getByTestId("star");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check cut-diamond svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "cut-diamond");
    const svg = screen.getByTestId("cut-diamond");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check tv-screen svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "tv-screen");
    const svg = screen.getByTestId("tv-screen");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length / 2}px`);
  });

  test("check cone svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "cone");
    const svg = screen.getByTestId("cone");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check envelop svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "envelop");
    const svg = screen.getByTestId("envelop");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check plus svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "plus");
    const svg = screen.getByTestId("plus");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check times svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "times");
    const svg = screen.getByTestId("times");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check message svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "message");
    const svg = screen.getByTestId("message");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check left-arrow svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "left-arrow");
    const svg = screen.getByTestId("left-arrow");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });

  test("check right-arrow svg length", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    );
    if (!SVGElement.prototype.getTotalLength) {
      SVGElement.prototype.getTotalLength = () => 1;
    }

    userEvent.selectOptions(screen.getByRole("combobox"), "right-arrow");
    const svg = screen.getByTestId("right-arrow");
    expect(svg).toBeInTheDocument();

    const length = 300;
    const input = screen.getByPlaceholderText("Enter shape length");
    fireEvent.change(input, { target: { value: length } });

    await waitFor(() => {
      expect(input.value).toBe(`${length}`);
    });

    expect(svg).toHaveAttribute("width", `${length}px`);
    expect(svg).toHaveAttribute("height", `${length}px`);
  });
});
