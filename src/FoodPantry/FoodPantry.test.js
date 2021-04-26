import React from "react";
import FoodPantry from "./FoodPantry"

describe("FoodPantry tests", () => {
    it("renders correctly", () => {
        const src = "https://charlottenc.gov/AnimalsCMPD/Donate/PublishingImages/pet%20food.jpg";
        const { container } = render(<FoodPantry src={src}/>);
        expect(container).toMatchSnapshot();
    });
});