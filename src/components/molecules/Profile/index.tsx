import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import Divider from "@/components/atoms/Divider";
import { AngleDown_Outline } from "@/components/atoms/icons/Arrows/AngleDown";
import { HomeDashTrendDown_Outline } from "@/components/atoms/icons/Buildings/HomeDashTrendDown";
import { Moon_Outline } from "@/components/atoms/icons/general/Moon";
import { PowerOff_Outline } from "@/components/atoms/icons/Sign&Controls/PowerOff";
import { QuestionCircle_Outline } from "@/components/atoms/icons/Sign&Controls/QuestionCircle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/Popover";
import { Switch } from "@/components/atoms/Switch";
import { avatarPlaceholderURL } from "@/utils/utils";

const Profile = () => {
  return (
    <Popover>
      <PopoverTrigger className="group inline-flex items-center gap-6 rounded-2xl p-2 transition-colors hover:bg-primary-50">
        <Avatar>
          <AvatarImage src={avatarPlaceholderURL()} />
          <AvatarFallback>AT</AvatarFallback>
        </Avatar>

        <div className="space-y-1">
          <div className="text-body-5 leading-[180%] text-neutral-gray-1 transition-colors group-hover:text-primary-500">
            علی محمدی
          </div>
          <div className="text-start text-caption-2 leading-[160%] text-primary-600 transition-colors group-hover:text-primary-500">
            کاربر عادی
          </div>
        </div>

        <AngleDown_Outline className="size-6 self-start text-neutral-gray-1 transition-all group-hover:text-primary-500 group-data-[state=open]:rotate-180" />
      </PopoverTrigger>

      <PopoverContent className="flex w-[340px] flex-col gap-6 p-6" align="end">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="text-body-5 text-neutral-black">علی محمدی</div>
            <div className="flex items-center gap-2 text-neutral-gray-3">
              <span className="text-caption-2 leading-[160%]">شماره مشتری</span>
              <span className="text-overline-2 leading-[160%]">12345678</span>
            </div>
          </div>

          <Avatar>
            <AvatarImage src={avatarPlaceholderURL()} />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </div>

        <Divider />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HomeDashTrendDown_Outline className="size-6 text-neutral-gray-3" />
            <span className="text-body-5 text-neutral-gray-1">
              تاریخچه ورود
            </span>
          </div>

          <span className="text-body-5 text-neutral-gray-1">
            {new Intl.DateTimeFormat("fa-IR", { calendar: "persian" }).format(
              new Date(),
            )}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Moon_Outline className="size-6 text-neutral-gray-3" />
            <span className="text-body-5 text-neutral-gray-1">حالت تاریک</span>
          </div>

          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <QuestionCircle_Outline className="size-6 text-neutral-gray-3" />
            <span className="text-body-5 text-neutral-gray-1">
              سوالات متداول
            </span>
          </div>
        </div>

        <Divider />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PowerOff_Outline className="size-6 text-neutral-gray-3" />
            <span className="text-body-5 text-neutral-gray-1">خروج</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
