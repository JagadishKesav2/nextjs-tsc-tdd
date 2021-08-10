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
    test('id should match', () => {
        const obj = {
            id: '111',
            productName: 'Jest Handbook',
            url: 'https://jesthandbook.com'
        };
        expect(obj.id).toEqual('111');
        expect(obj.productName).toEqual('Jest Handbook');
    });
    test('should have right id and name', () => {
        expect(user).toEqual(
            expect.objectContaining({
                id: 1,
                name: 'Hugo'
            })
        );
    });
    test('id and productName should match', () => {
        const obj = {
            id: '111',
            productName: 'Jest Handbook',
            url: 'https://jesthandbook.com'
        };
        expect(obj).toEqual(
            expect.objectContaining({
                id: '111',
                productName: 'Jest Handbook',
                url: 'https://jesthandbook.com'
            })
        );
    });
    const oddArray = [1, 3, 5, 7, 9, 11, 13];
    test('should start correctly', () => {
        expect(oddArray).toContain(1);
        expect(oddArray).toContain(3);
        expect(oddArray).toContain(9);
        expect(oddArray).toContain(5);
    });
    const user = {
        id: 1,
        friends: [],
        name: 'Hugo',
        url: 'https://codewithhugo.com'
    };
    test('should have right id and name', () => {
        expect(user).toEqual(
            expect.objectContaining({
                id: 1,
                name: 'Hugo'
            })
        );
    });

    test.concurrent('select drop down', () => {
        const select = getByTestId('language')
        fireEvent.change(select, { target: { value: '1' } })
        expect(((select as HTMLOptionElement).value)).toEqual('1')
    });
})


describe("test", () => {
    const q1 = { id: '1', value: 0, name: 'dropdown' }
    const q2 = { id: '2', value: 1, name: 'dropdown' }
    describe.each`
        value              |   expected
        ${q1.value}        |   ${0}
        ${q2.value}        |   ${2}
    `("$selected", ({ value, expected }) => {
        test.concurrent("select drop down test", () => {
            const select = getByTestId('language')
            fireEvent.change(select, { target: { value: value } })
            expect(Number((select as HTMLOptionElement).value)).toEqual(expected)
        })
    })

})