import { LeftNavbar } from "../sides/navbar/leftnav/LeftNavbar";
import { SearchBar } from "../sides/searchBar/SearchBar";
import { useUserLoged } from "../collections/users/providers/UserProvider";

export function TwitterLayout({ children }: any) {
  const { user } = useUserLoged();
  if (!user)
    return (
      <div>
        <div>{children}</div>
      </div>
    );
  return (
    <div className="app">
      <LeftNavbar />
      <div className="main-content">{children}</div>
      <SearchBar />
    </div>
  );
}
