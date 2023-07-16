import { LeftNavbar } from "../sides/navbar/leftnav/LeftNavbar";
import { SearchBar } from "../sides/searchBar/SearchBar";

export function TwitterLayout({ children }: any) {
  return (
    <div className="app">
      <LeftNavbar />
      <div className="main-content">{children}</div>
      <SearchBar />
    </div>
  );
}
