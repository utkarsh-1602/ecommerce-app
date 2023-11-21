"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    const pathName = usePathname();
    console.log("pathName ==> ", pathName)


    const params = useParams();
    console.log("Params ===> " + JSON.stringify(params));


    const routes = [
        {
            href: `/${params.storeId}`,
            label: "Overview",
            active: pathName === `/${params.storeId}`
        },

        {
            href: `/${params.storeId}/billboards`,
            label: "Billboards",
            active: pathName === `/${params.storeId}/billboards`
        },

        {
            href: `/${params.storeId}/categories`,
            label: "Categories",
            active: pathName === `/${params.storeId}/categories`
        },
        {
            href: `/${params.storeId}/sizes`,
            label: "Sizes",
            active: pathName === `/${params.storeId}/sizes`
        },
        {
            href: `/${params.storeId}/colors`,
            label: "Colors",
            active: pathName === `/${params.storeId}/colors`
        },
        {
            href: `/${params.storeId}/products`,
            label: "Products",
            active: pathName === `/${params.storeId}/products`
        },
        {
            href: `/${params.storeId}/orders`,
            label: "Orders",
            active: pathName === `/${params.storeId}/orders`
        },
        {
            href: `/${params.storeId}/settings`,
            label: "Settings",
            active: pathName === `/${params.storeId}/settings`
        }


    ];

    console.log("routes ====>" + routes);

    return (
        <nav
            className={cn("flex space-x-4 lg:space-x-6", className)}
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.active ? "text-black dark:text-white" : "text-muted-foreground",
                        "ml-6"
                    )}
                >

                    {route.label}
                </Link>
            ))
            }
        </nav >
    )
} 