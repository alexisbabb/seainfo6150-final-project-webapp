import React from "react";
import Error from "./Error"

describe("Error tests", () => {
    it("renders correctly", () => {
        const src = "https://cdn3.volusion.com/euhfr.xvuyx/v/vspfiles/photos/EG1155-1374-2.jpg?v-cache=1325487014";
        const { container } = render(<Error src={src}/>);
        expect(container).toMatchSnapshot();
    });
});