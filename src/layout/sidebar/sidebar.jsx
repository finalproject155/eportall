import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import logo from "@/asset/logo.png"
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
 
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]


 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent >
        <SidebarGroup className='py-5'>
            <div className="flex flex-row gap-4 items-center">
              <Image src={logo} alt="" width={50} height={50} className="" />
            <div className="flex flex-col ">
                  <p className='text-[17px] font-lex font-bold '>LAUTECH PORTAL</p>
                    <p className='text-[14px] font-lex font-medium text-gray-400 '>E-Portal</p>
            </div>
            </div>
          <SidebarGroupContent>
            <SidebarMenu className='pt-5'>
              {items.map((item) => (
                <SidebarMenuItem className='py-2' key={item.title}>
                  <SidebarMenuButton className='hover:bg-primary py-3 hover:text-white' asChild>
                    <a href={item.url}>
                      <item.icon width={30} height={30}/>
                      <span className="text-18px] font-semibold font-lex  ">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}