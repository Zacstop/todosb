import React from 'react';

import { Button } from './Button';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <div style={{width: 375, height: 56, padding: 16, background: 'white', boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.10)', borderBottom: '1px solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
  <div style={{color: 'rgba(0, 0, 0, 0.75)', fontSize: 20, fontFamily: 'Work Sans', fontWeight: '700', wordWrap: 'break-word'}}>MediXForm</div>
  <div style={{width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
    <div style={{width: 20, height: 20, position: 'relative', border: '1px solid'}}>
      <div style={{width: 11.67, height: 8.33, left: 4.17, top: 5.83, position: 'absolute', background: 'rgba(0, 0, 0, 0.75)'}}></div>
    </div>
  </div>
</div>
);
