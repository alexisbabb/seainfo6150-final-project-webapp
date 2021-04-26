import React from "react";
import PetDetailsToggleButton from "./PetDetailsToggleButton"; 

describe("PetDetailsToggleButton tests", () => {

    let isTextShowing = false;

	function onClick() {
		setIsTextShowing(!isTextShowing);
	}

    it("renders correctly", () => {
        const buttonText = "Show More"; 
        const { container } = render(<PetDetailsToggleButton buttonText={buttonText} onClick={onClick}/>);
        expect(container).toMatchSnapshot();
    });
});