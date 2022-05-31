import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Map } from './components/Map/Map';
import { SearchContext } from './contexts/searchContext';

export const App = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <SearchContext.Provider value={{search, setSearch}}>
        <Header />
        <Map />
      </SearchContext.Provider>
    </>
  );
}

