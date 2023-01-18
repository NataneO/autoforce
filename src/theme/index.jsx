import { ThemeProvider } from 'react-bootstrap';
import LandingPage from '../pages/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
  return (
    <ThemeProvider
      breakpoints={['xxxl','xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <LandingPage />
    </ThemeProvider>
  );
}