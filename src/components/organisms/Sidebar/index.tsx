import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/Accordion";
import { AngleLeftSmall_Outline } from "@/components/atoms/icons/Arrows/AngleLeftSmall";
import NavLink from "@/components/atoms/NavLink";
import { sidebarMenu } from "@/constants";
import clsx from "clsx";

const Sidebar = () => {
  return (
    <aside className="w-fit border-e border-neutral-gray-9 p-6">
      <Accordion type="single" collapsible asChild>
        <ul className="space-y-2">
          {Object.values(sidebarMenu).map((item) =>
            "items" in item ? (
              <AccordionItem
                key={item.label}
                value={item.label}
                className="w-[273px]"
              >
                <AccordionTrigger
                  className={clsx(
                    "group justify-start gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-primary-50 hover:no-underline",
                    "data-[state=open]:bg-primary-50",
                  )}
                >
                  <item.icon
                    className={clsx(
                      "size-6 text-neutral-gray-4 transition-colors",
                      "group-hover:text-primary-500",
                      "group-data-[state=open]:text-primary-500",
                    )}
                  />
                  <span
                    className={clsx(
                      "text-body-2 text-neutral-black transition-colors",
                      "group-hover:text-primary-500",
                      "group-data-[state=open]:text-primary-500",
                    )}
                  >
                    {item.label}
                  </span>

                  <AngleLeftSmall_Outline
                    className={clsx(
                      "ms-auto size-6 text-neutral-black transition-all group-hover:text-primary-500",
                      "group-data-[state=open]:rotate-90 group-data-[state=open]:text-primary-500",
                    )}
                  />
                </AccordionTrigger>

                <AccordionContent className="mt-2 p-0" asChild>
                  <ul className="list-inside list-disc space-y-3 bg-neutral-gray-11 p-4 ps-8">
                    {Object.values(item.items).map((subItem) => (
                      <li key={subItem.label}>
                        <NavLink
                          href={subItem.href}
                          className="text-body-5 text-neutral-gray-1 data-[state=active]:text-primary-500"
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <li key={item.label}>
                <NavLink
                  href={item.href}
                  className="group flex w-[273px] items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-primary-50 data-[state=active]:bg-primary-900"
                >
                  <item.icon
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
                    {item.label}
                  </span>
                </NavLink>
              </li>
            ),
          )}
        </ul>
      </Accordion>
    </aside>
  );
};

export default Sidebar;

// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/atoms/Accordion";
// import NavLink from "@/components/atoms/NavLink";
// import { sidebarMenu } from "@/constants";
// import clsx from "clsx";

// const Sidebar = () => {
//   return (
//     <aside className="w-fit border-e border-neutral-gray-9 p-6">
//       <ul className="space-y-2">
//         <Accordion type="single">
//           {Object.values(sidebarMenu).map((item) =>
//             "items" in item ? (
//               <AccordionItem
//                 key={item.label}
//                 value={item.label}
//                 className="w-[273px]"
//               >
//                 <AccordionTrigger className="gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-primary-50">

//                   {item.label}
//                 </AccordionTrigger>
//               </AccordionItem>
//             ) : (
//               <li key={item.label}>
//                 <NavLink
//                   href={item.href}
//                   className="group flex w-[273px] items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-primary-50 data-[state=active]:bg-primary-900"
//                 >
//                   <item.icon
//                     className={clsx(
//                       "size-6 text-neutral-gray-4 transition-colors",
//                       "group-data-[state=disactive]:group-hover:text-primary-500",
//                       "group-data-[state=active]:text-primary-50",
//                     )}
//                   />
//                   <span
//                     className={clsx(
//                       "text-body-2 text-neutral-black transition-colors",
//                       "group-data-[state=disactive]:group-hover:text-primary-500",
//                       "group-data-[state=active]:text-primary-50",
//                     )}
//                   >
//                     {item.label}
//                   </span>
//                 </NavLink>
//               </li>
//             ),
//           )}
//         </Accordion>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
