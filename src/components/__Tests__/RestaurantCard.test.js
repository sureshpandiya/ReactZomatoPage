import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../Mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render RestaurantCard component with Props Data", () =>{
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Domino's Pizza");
    expect(name).toBeInTheDocument();
});