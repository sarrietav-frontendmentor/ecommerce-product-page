import { render, screen } from "@testing-library/react"
import { CartBasket } from "../CartBasket"

describe("test CartBasket component", () => {
  it("renders without items", () => {
    render(<CartBasket />)

    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  })
})