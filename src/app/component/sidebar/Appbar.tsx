"use client";
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
  Home,
  Search,
  Heart,
  User,
} from "lucide-react";
import SidebarItem from "./item";

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

const items: ISidebarItem[] = [
  {
    name: "HOME",
    path: "/",
    icon: Home,
  },
  {
    name: "Explore",
    path: "/Explore",
    icon: Search,
  },
  {
    name: "Trips",
    path: "/Trips",
    icon: Heart,
  },
  {
    name: "Profile",
    path: "/Profile",
    icon: User,
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-50 bg-white shadow-lg z-10 p-4" style={{backgroundColor: '#2D3DDF',borderTopRightRadius: '35px',borderBottomRightRadius: '35px'}}>
      <div className="flex flex-col space-y-10 w-full">
        <img className="h-10 w-fit mx-10 my-2" src="/img/icon/logo.png" alt="Logo" style={{alignItems: 'center' ,height: '30px',width: '30px'}}/>
        <div className="flex flex-col space-y-2" style={{marginTop: '10rem'}}>
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;