import React from "react";
import PetImage from "./PetImage"

describe("PetImage tests", () => {
    it("renders correctly", () => {
        const url = "https://pbs.twimg.com/media/DlmBBTXXcAEdn6V.jpg";
        const name = "Aladdin";
        const { container } = render(<PetImage url={url} name = {name}/>);
        expect(container).toMatchSnapshot();
    });
});