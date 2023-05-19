import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
    return (

        <aside className='w-72 bg-zinc-950 p-6'>

            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-red-500 rounded full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded full'></div>
                <div className='w-3 h-3 bg-green-500 rounded full'></div>
            </div>
            <nav className='space-y-5 mt-10'>
                <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
                    <HomeIcon></HomeIcon>
                    Home
                </a>
                <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
                    <Search></Search>
                    Search
                </a>
                <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
                    <Library></Library>
                    Your Library

                </a>
            </nav>

            <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Rock Mix</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Christian Workout</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Discovery weekly</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Playlist</a>
            </nav>

        </aside>
    )
}