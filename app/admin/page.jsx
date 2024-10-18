"use client"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import UserPanel from "@/components/adminPanel/userPanel";

export default function Admin() {
    return (
        <div>
            <Tabs defaultValue="dashboard">
                <TabsList>
                    <TabsTrigger value="dashboard">
                        Статистика
                    </TabsTrigger>
                    <TabsTrigger value="users">
                        Користувачі
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard">
                    <h1>Dashboard</h1>
                </TabsContent>
                <TabsContent value="users">
                    <UserPanel />
                </TabsContent>
            </Tabs>
        </div>
    );
}