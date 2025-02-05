import IconButton from "@/components/atoms/buttons/IconButton";
import { Search_Outline } from "@/components/atoms/icons/general/Search";
import { Settings_Outline } from "@/components/atoms/icons/general/Settings";
import {
  Input,
  InputElement,
  InputIcon,
} from "@/components/atoms/inputs/Input";
import LogoText from "@/components/atoms/logos/LogoText";
import Notifications from "@/components/molecules/Notifications";
import Profile from "@/components/molecules/Profile";

const Header = () => {
  return (
    <header className="flex items-center border-b border-neutral-gray-9 bg-neutral-white px-8 py-6">
      <LogoText className="[--size:110px]" />

      <Input className="ms-6 w-[230px]" size="sm">
        <InputIcon>
          <Search_Outline />
        </InputIcon>

        <InputElement placeholder="جستجو" />
      </Input>

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
