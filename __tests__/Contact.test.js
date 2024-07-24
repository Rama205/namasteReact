import Contact from "../src/components/Contact";
import { render } from "@testing-library/react";



test("Should load contact us Component",()=>{
    render(
        <Contact />
    )
})