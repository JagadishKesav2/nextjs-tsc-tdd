import '@testing-library/jest-dom';
import { render, fireEvent, getByTitle } from "@testing-library/react";
import Home from '../src/pages/index';

const { getByTestId } = render(<Home />)

describe("test for Home page", () => {
    test.concurrent("should render $header", () => {
        expect(
            getByTestId(('header'))
        ).toBeInTheDocument();
    })
})