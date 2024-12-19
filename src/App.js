import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { EditContactPage } from './pages/EditContactPage';
function App() {
    return (_jsx("main", { children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Homepage, {}) }), _jsx(Route, { path: "/edit/:id", element: _jsx(EditContactPage, {}) })] }) }) }));
}
export default App;
