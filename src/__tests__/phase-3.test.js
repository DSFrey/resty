import { Form } from "../components/form";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Can pass REST request information and make API calls', () => {
  test('Calls handleApiCall when GO is pressed', () => {
    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall} />);
    let button = screen.getByText('GO!');

    fireEvent.click(button);
    expect(handleApiCall).toHaveBeenCalled();
  })

  test('Can call handleApiCall with the correct parameters', () => {
    let expectedParams = {
      method: 'DELETE',
      url: 'irs.gov',
      data: 'my tax obligations'
    }

    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall} />);
    let button = screen.getByText('GO!');
    let deleteButton = screen.getByTestId('DELETE');
    let urlInput = screen.getByTestId('url');
    let jsonInput = screen.getByTestId('JSON');

    fireEvent.click(deleteButton);
    fireEvent.change(urlInput, {target: {value: 'irs.gov'}});
    fireEvent.change(jsonInput, {target: {value: 'my tax obligations'}});
    fireEvent.click(button);

    expect(handleApiCall).toHaveBeenCalledWith(expectedParams);
  })
})