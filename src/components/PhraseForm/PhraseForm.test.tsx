import { render, screen, fireEvent, act } from '@testing-library/react';
import { PhraseForm } from './index';
import { usePhrasesStore } from '@/store/phrase';

jest.mock('@/store/phrase', () => ({
  usePhrasesStore: jest.fn(),
}));

describe('<PhraseForm />', () => {
  let addPhraseMock: jest.Mock;

  beforeEach(() => {
    addPhraseMock = jest.fn();
    // @ts-ignore
    (usePhrasesStore as jest.Mock).mockReturnValue({
      addPhrase: addPhraseMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('it should renders form elements correctly', () => {
    render(<PhraseForm />);

    const inputText = screen.getByLabelText(/ingresar frase/i);
    const inputByPlaceHolder = screen.getByPlaceholderText('Frase...');
    const submitButton = screen.getByRole('button', { name: /enviar/i });


    expect(inputText).toBeInTheDocument();
    expect(inputByPlaceHolder).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('it submits form with correct values', async () => {
    render(<PhraseForm />);

    const input = screen.getByLabelText(/ingresar frase/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    await act(() => {
      fireEvent.change(input, { target: { value: 'Test Phrase' } });
      fireEvent.click(submitButton);
    });

    expect(addPhraseMock).toHaveBeenCalled();
    expect(addPhraseMock).toHaveBeenCalledWith({
      phrase: 'Test Phrase',
      id: expect.any(String),
    });
  });

  test('it should display required validation error', async () => {
    render(<PhraseForm />);

    const input = screen.getByLabelText(/ingresar frase/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    await act(() => {
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.blur(input);
    });
    
    expect(screen.queryByText(/Requerido/i)).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test ('it should display minlegth input error when you need at least 10 characters', async () => {
    render(<PhraseForm />);
    
    const input = screen.getByLabelText(/ingresar frase/i);
    
    await act(() => {
      fireEvent.change(input, { target: { value: 'Test' } });
    });

    expect(screen.queryByText(/Debe tener al menos 10 caracteres/i)).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-errormessage', 'Debe tener al menos 10 caracteres');
  });

  test('it should display maxlength input error when you need no more than 100 characters', async () => {
    const charactersCount110 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim purus nec dictum lobortis. Nulla ac tellus semper, tempus felis sed, consectetur sapien. Donec rutrum erat sit amet varius pharetra. Phasellus vehicula ullamcorper urna, vel gravida diam dictum non. Aliquam tincidunt lectus in convallis volutpat.';

    render(<PhraseForm />);
    
    const input = screen.getByLabelText(/ingresar frase/i);
    
    await act(() => {
      fireEvent.change(input, { target: { value: charactersCount110 } });
    });

    expect(screen.queryByText(/Debe tener un maximo de 50 caracteres/i)).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-errormessage', 'Debe tener un maximo de 50 caracteres');
  });

  test('it should calls openModal with false after submission', async () => {
    const openModalMock = jest.fn();
    render(<PhraseForm openModal={openModalMock} />);

    const input = screen.getByLabelText(/ingresar frase/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    await act(() => {
      fireEvent.change(input, { target: { value: 'Test Phrase' } });
      fireEvent.click(submitButton);
    })

    expect(openModalMock).toHaveBeenCalledWith(false);
  });

  test('it should clears the input field when the clear button is clicked', async () => {
    render(<PhraseForm />);

    const input = screen.getByLabelText(/ingresar frase/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    
    await act(() => {
      fireEvent.change(input, { target: { value: 'Test Phrase' } });
      fireEvent.click(submitButton);
    });

    expect(input).toHaveValue('');
  });
});
