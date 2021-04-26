import React from "react";
import PetList from "./PetList"; 

describe("PetLists tests", () => {
    it("renders correctly", () => {
        const petList = [
            {
                "slug": "00001",
                "name": "Aladdin",
                "species": "Cat", 
                "breed": "Domestic Short Hair", 
                "gender": "Male", 
                "age": "2 Years", 
                "size": "Medium", 
                "color": "Black", 
                "location": "Newark", 
                "bio": "<p>Meet Aladdin! This sweet boy is looking for the perfect lap to relax in! He will follow you everywhere you go just like a dog. He is a very friendly boy that gets along with others cats. He originally came from a large cat colony living outside in lower Delaware. Aladdin is FIV positive, but that doesn't mean he won't live a long, normal life.</p>",
                "image": {
                    "url": "https://pbs.twimg.com/media/DlmBBTXXcAEdn6V.jpg",
                    "height": "400",
                    "width": "400"
                } 
            },
            {
                "slug": "00002",
                "name": "Chloe",
                "species": "Dog", 
                "breed": "Labrador Retriever", 
                "gender": "Female", 
                "age": "1 Year", 
                "size": "Medium", 
                "color": "Black", 
                "location": "Pike Creek", 
                "bio": "<p>Meet Chloe! She is loving and fun, but needs a good amount cuddle time due to her past. She loves to run free through the yard and chase the birds. Chloe is also super respectful to everyone around her.</p>",
                "image": {
                    "url": "https://www.fananimal.com/wp-content/uploads/2019/03/fan-animal-los-perros-en-verdad-sienten-celos.jpg",
                    "height": "400",
                    "width": "400"
                }
            }
        ]; 
        const { container } = render(<PetList articles={petList}/>);
        expect(container).toMatchSnapshot();
    });
});