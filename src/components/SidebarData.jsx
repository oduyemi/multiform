import React from "react";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SummarizeIcon from '@mui/icons-material/Summarize';


export const SidebarData = [
    {
        title: "Your Info",
        path: "/",
        icon: <PersonPinIcon />,
        cName: "personal-info",
    },
    {
        title: "Select Plan",
        path: "/plan",
        icon: <SubscriptionsIcon />,
        cName: "plan"
    },
    {
        title: "Addon",
        path: "/addon",
        icon: <CreditCardIcon />,
        cName: "addon"
    },
    {
        title: "Summary",
        path: "/summary",
        icon: <SummarizeIcon />,
        cName: "summary"
    }
]
