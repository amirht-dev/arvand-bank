import IconButton from "@/components/atoms/buttons/IconButton";
import { Settings_Outline } from "@/components/atoms/icons/general/Settings";
import LogoText from "@/components/atoms/logos/LogoText";
import Notifications from "@/components/molecules/Notifications";
import Profile from "@/components/molecules/Profile";
import SearchBox from "@/components/molecules/SearchBox";

const Header = () => {
  return (
    <header className="flex items-center border-b border-neutral-gray-9 bg-neutral-white px-8 py-6">
      <LogoText className="[--size:110px]" />

      <SearchBox />

      <div className="ms-auto flex gap-2">
        <IconButton>
          <Settings_Outline />
        </IconButton>

        <Notifications />
      </div>

      <Profile />
    </header>
  );
};

export default Header;
