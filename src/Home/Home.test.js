import React from "react";
import Home from "./Home"

describe("Home tests", () => {
    it("renders correctly", () => {
        const src = "https://delawarehumane.org/wp-content/uploads/2016/06/Front-Bricks.png";
        const { container } = render(<Home src={src}/>);
        expect(container).toMatchSnapshot();
    });
});