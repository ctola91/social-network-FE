import { render, screen } from '@testing-library/react';
import Content from '../shared/components/layout/Content';
import App from './App';
import Numbers from './Numbers/Numbers';

test('renders learn has correct link', () => {
  render(
    <App>
      <Content>
        <Numbers />
      </Content>
    </App>
  );
  const linkElement = screen.getByText(/Numbers/i);
  expect(linkElement).toBeInTheDocument();
});
