import React from "react";
import AdoptionProcess from "./AdoptionProcess"

describe("AdoptionProcess tests", () => {
    it("renders correctly", () => {
        const src = "https://delawarehumane.org/wp-content/uploads/2019/03/34033908_10156259256476153_766746855991148544_o.jpg";
        const { container } = render(<AdoptionProcess src={src}/>);
        expect(container).toMatchSnapshot();
    });
});