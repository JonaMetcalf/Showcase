'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image';
import githubsvg from '../../public/github-svgrepo-com.svg'
import linkedinsvg from '../../public/LinkedIn_icon_circle.svg'


interface TabState {
    tab1: boolean,
    tab2: boolean
}


export default function Navbar() {
    const [tabState, setTabState] = useState<TabState>({tab1:false, tab2:false})

    return (
        <div className="fixed bg-white h-screen top-0 left-0 z-40 grid grid-cols-1 content-start px-5 py-3 space-y-3">
            <Link href="/mpm">
                <div onClick={() => {setTabState({tab1:false, tab2:false})}} className="flex flex-wrap p-4 text-xl w-48 rounded-xl hover:outline hover:outline-2">
                    MPM modelling of subaerial and underwater landslides
                </div>
            </Link>
            <div className='absolute bottom-4 left-2 space-x-2 space-y-2'>
            <p>Created by Jona Metcalf</p>
            
            <a href={'https://www.linkedin.com/in/jonametcalf/'} target='_blank'>
                <Image
                    src={linkedinsvg}
                    alt="linkedin"
                    width={30}
                    height={30}
                    className='inline-block'
                />
            </a>
            <a href={'https://github.com/JonaMetcalf'} target='_blank'>
                <Image
                    src={githubsvg}
                    alt="github"
                    width={30}
                    height={30}
                    className='inline-block'
                />
            </a>
            </div>
            
            
            
        </div>
    )
}