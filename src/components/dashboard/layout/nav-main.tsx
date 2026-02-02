"use client"

import type { ComponentType } from "react"
import { IconChevronRight } from "@tabler/icons-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: ComponentType<{ className?: string }>
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            defaultOpen={item.isActive}
            render={(props) => <SidebarMenuItem {...props} />}
          >
            <SidebarMenuButton
              tooltip={item.title}
              render={(props) => <a href={item.url} {...props} />}
            >
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
            {item.items?.length ? (
              <>
                <CollapsibleTrigger
                  render={(props) => (
                    <SidebarMenuAction
                      {...props}
                      className="data-[state=open]:rotate-90"
                    >
                      <IconChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  )}
                />
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          render={(props) => (
                            <a href={subItem.url} {...props} />
                          )}
                        >
                          <span>{subItem.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </>
            ) : null}
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
