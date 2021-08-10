import '@testing-library/jest-dom';
import { render, fireEvent, getByTitle } from "@testing-library/react";
import Home from '../src/pages/index';
import data from "../src/data/data.json";

type Props = {
    data:
    {
        title: string;
    }[];
};

const { getByTestId, getByText } = render(<Home />)

describe("test for Home page", () => {
    test.concurrent("should render $header", () => {
        expect(
            getByTestId(('header'))
        ).toBeInTheDocument();

        expect(
            getByText('InnerSource Project Portal')
        ).toBeInTheDocument();
    })
    test.concurrent("should render $sub header", () => {
        expect(
            getByTestId(('sub-header'))
        ).toBeInTheDocument();

        expect(
            getByText('Leverage, Reuse or Contribute to')
        ).toBeInTheDocument();

        expect(
            getByText('InnerSource projects')
        ).toBeInTheDocument()
    })
})
