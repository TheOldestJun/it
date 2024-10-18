import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useState } from "react";


export default function CreateForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [roleId, setRoleId] = useState('');

    return (
        <div className='flex justify-center align-middle py-12 sm:px-6 lg:px-8'>
            <div class="grid grid-cols-12 gap-2 border-gray-400 bg-white rounded-sm">
                <div class="col-span-6">
                    <Label htmlFor="email">Електронна пошта</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="col-span-6">
                    <Label htmlFor="password">Пароль</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div class="col-span-6">
                    <Label htmlFor="name">Ім'я користувача</Label>
                    <Input
                        id="name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div class="col-span-6">
                    <Label htmlFor="surname">Прізвище користувача</Label>
                    <Input
                        id="surname"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div class="col-span-12">
                    <Select onValueChange={() => setRoleId(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Тип користувача" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="DIRECTORS">Директорат</SelectItem>
                            <SelectItem value="APPLICANTS">Заявники</SelectItem>
                            <SelectItem value="EXECUTORS">Виконавці</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div class="col-span-12">
                    <Button type="submit" className="w-full">Створити</Button>
                </div>
            </div>
        </div>
    );
}