import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/admin/Dashboard';
import { ThemeProvider } from '@mui/material';
import customMuiTheme from './muiTheme';



function App() {
    return (
        <ThemeProvider theme={customMuiTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
