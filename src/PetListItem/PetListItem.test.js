import React from "react";
import PetListItem from "./PetListItem"; 

describe("PetListItem tests", () => {
    it("renders correctly", () => {
        const article = {
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
        }; 
        const { container } = render(<PetListItem article={article} key = {article.slug}/>);
        expect(container).toMatchSnapshot();
    });
});