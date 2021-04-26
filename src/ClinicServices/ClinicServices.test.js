import React from "react";
import ClinicServices from "./ClinicServices"

describe("ClinicServices tests", () => {
    it("renders correctly", () => {
        const src = "https://www.mercypetclinic.org/wp-content/uploads/2017/12/MPC_Dog_Vaccine_Main.jpg";
        const { container } = render(<ClinicServices src={src}/>);
        expect(container).toMatchSnapshot();
    });
});