import Link from "next/link";
import Image from "next/image";
import {navigations, socialLinks} from "@app/constants";
import {Button} from "@heroui/react";

export const NavBar = () => {
    return (
        <header className={'absolute top-0 w-full h-20 py-5 z-10'}>
            <nav className="relative h-full max-w-8xl px-6 sm:px-10  mx-auto flex justify-between items-center">
                <Link href='/' className='flex justify-center items-center '>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={100}
                        height={15}
                        className='object-contain h-auto w-auto'
                        loading={'eager'}
                    />
                </Link>
                <ul className="absolute-center text-subtitle flex gap-20">
                    {navigations.map(({id, name}) => (
                        <li key={id}><Link href='/'>{name}</Link></li>
                    ))}
                </ul>
                <div className="flex gap-5 items-center">
                    <ul className="text-subtitle flex gap-5">
                        {socialLinks.map(({icon: Icon, id}) => (
                            <li key={id} className="text-2xl"><Icon/></li>
                        ))}
                    </ul>
                    <Button className="capitalize" size={'lg'}>book now</Button>
                </div>
            </nav>
        </header>
    )
}