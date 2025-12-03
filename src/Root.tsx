import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Tabs/HomePage';
import { TabsPage } from './components/Tabs/TabsPage';
import { TabsView } from './components/Tabs/TabsView';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route index element={<TabsView />} />
          <Route path=":tabId" element={<TabsView />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
