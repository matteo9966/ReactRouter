import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1vh',
        }}
      >
        <NavLink
          style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
          to="/invoices"
        >
          Invoices
        </NavLink>{' '}
        |{' '}
        <NavLink
          style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
          to="/expenses"
        >
          Expenses
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
