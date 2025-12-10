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
    title: "Home",
    url: "#",
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
            <div className="flex flex-col gap-2 items-center">
              <Image src={logo} alt="" />
          <div className='text-[25px] font-bold '>LADOKE AKINTOLA UNIVERSITY OF TECHNOLOGY</div>
            </div>
          <SidebarGroupContent>
            <SidebarMenu className='pt-5'>
              {items.map((item) => (
                <SidebarMenuItem className='py-3' key={item.title}>
                  <SidebarMenuButton className='hover:bg-primary py-7 hover:text-white' asChild>
                    <a href={item.url}>
                      <item.icon width={30} height={30}/>
                      <span className="text-[23px] font-semibold font-lex  ">{item.title}</span>
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