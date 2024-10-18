import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


export default function CreateForm() {
    return (
        <div className='flex justify-center align-middle py-12 sm:px-6 lg:px-8'>
            <form action="">
                <div class="grid grid-cols-12 gap-2 max-w-2xl">
                    <div class="col-span-6">
                        <Label htmlFor="email">Електронна пошта</Label>
                        <Input id="email" type="email" />
                    </div>
                    <div class="col-span-6">
                        <Label htmlFor="password">Пароль</Label>
                        <Input id="password" type="password" />
                    </div>
                    <div class="col-span-6">
                        <Label htmlFor="name">Ім'я користувача</Label>
                        <Input id="name" type="text" />
                    </div>
                    <div class="col-span-6">
                        <Label htmlFor="surname">Прізвище користувача</Label>
                        <Input id="surname" type="text" />
                    </div>
                    <div class="col-span-6">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="text" />
                    </div>
                </div>

            </form>
        </div>
    );
}