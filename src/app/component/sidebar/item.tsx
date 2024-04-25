"use client";
import { useMemo, useState } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Stack } from "@mui/material";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, items, path } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }

    return router.push(path);
  };

  const isActive = useMemo(() => {
    console.log('alwwwad', pathname.includes('Explore'));

    if (items && items.length > 0) {
      if ((items.find((item) => item.path === pathname))) {
        setExpanded(true);
        return true;
      }
    }

    return path === pathname;
  }, [items, path, pathname]);


  return (
    <>
      <div
        className={`w-20 h-20 p-5 rounded-full hover:bg-sidebar-background cursor-pointer drop-shadow-xl 
        ${isActive || (pathname.includes('Explore') && item.path === '/Explore') || (pathname.includes('Payment') && item.path === '/Explore')
            ? "text-[#2C3CDE] bg-sidebar-background" // Change "text-red-500" to your desired red color
            : "text-white hover:text-sidebar-active text-sidebar-iconColor hover:text-sidebar-active"
          }`}
        onClick={onClick}
      >


        <div>
          <Stack direction={'column'} alignItems={'center'} spacing={1}>
            <Icon size={20} />
            <p className="text-sm font-semibold">{name} </p>
          </Stack>
        </div>
        {items && items.length > 0 && <ChevronDown size={18} />}
      </div>

    </>
  );
};

export default SidebarItem;