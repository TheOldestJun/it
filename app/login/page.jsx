import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



export default function Login() {
    return (
        <div className='flex justify-center align-middle py-12 sm:px-6 lg:px-8'>
            <div className="w-full max-w-lg px-4 border border-gray-400 bg-white rounded-sm">
                <div className="text-2xl text-center font-bold mt-2">Введіть дані для входу</div>
                <form action="" className="mt-8">
                    <Label htmlFor="email">Електронна пошта</Label>
                    <Input id="email" type="email" />

                    <Label htmlFor="password">Пароль</Label>
                    <Input id="password" type="password" />

                    <Button type="submit" className="w-full my-8">Login</Button>
                </form>
            </div>
        </div>
    );
}