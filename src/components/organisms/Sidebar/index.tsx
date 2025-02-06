import NavLink from "@/components/atoms/NavLink";
import { sidebarMenu } from "@/constants";
import clsx from "clsx";

const Sidebar = () => {
  return (
    <aside className="w-fit border-e border-neutral-gray-9 p-6">
      <ul className="space-y-2">
        {Object.values(sidebarMenu).map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <NavLink
              href={href}
              className="group flex w-[273px] items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-primary-50 data-[state=active]:bg-primary-900"
            >
              <Icon
                className={clsx(
                  "size-6 text-neutral-gray-4 transition-colors",
                  "group-data-[state=disactive]:group-hover:text-primary-500",
                  "group-data-[state=active]:text-primary-50",
                )}
              />
              <span
                className={clsx(
                  "text-body-2 text-neutral-black transition-colors",
                  "group-data-[state=disactive]:group-hover:text-primary-500",
                  "group-data-[state=active]:text-primary-50",
                )}
              >
                {label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
