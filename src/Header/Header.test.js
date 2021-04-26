import React from "react";
import Header from "./Header"

describe("Header tests", () => {
    it("renders correctly", () => {
        const src = "https://delawarehumane.org/wp-content/uploads/2016/07/DHA-Web-Logo-For-Footer.png";
        const { container } = render(<Header src={src}/>);
        expect(container).toMatchSnapshot();
    });
});