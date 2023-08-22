import { render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from 'history';
import MyForm from "./login";
import Mysignup from "./signup";
import { BrowserRouter ,Routes ,Route} from 'react-router-dom'

/* test('renders learn react link', () => {
  render(<App />);
 const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/
  const reactRouterContext = (children: any) => {

    if (isTest) {
        return <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
    }

    return <BrowserRouter>{children}</BrowserRouter>

}
  

