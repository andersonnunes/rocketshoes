import { Route, Routes as Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Switch>
  )
}
