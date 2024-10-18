import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import CreateForm from "./createForm";

export default function UserPanel() {
    return (
        <div>
            <Tabs defaultValue="create">
                <TabsList>
                    <TabsTrigger value="create">Створити користувача</TabsTrigger>
                    <TabsTrigger value="delete">Видалити користувача</TabsTrigger>
                </TabsList>
                <TabsContent value="create">
                    <CreateForm />
                </TabsContent>
                <TabsContent value="delete">
                    <h1>Delete user</h1>
                </TabsContent>
            </Tabs>
        </div>
    );
}