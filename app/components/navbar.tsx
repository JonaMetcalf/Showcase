import Link from 'next/link'
import { useState } from 'react'

interface TabState {
    tab1: boolean,
    tab2: boolean
}

function handleClick (tab : {tab:number}) {
    return (null)

}

export default function () {
    const [tabState, setTabState] = useState<TabState>({tab1:false, tab2:false})

    return (
        <div className="grid grid-cols-1 bg-white-100 content-start px-5 py-3 space-y-3">
            <Link href="/mpm">
                <div onClick={() => {setTabState({tab1:false, tab2:false})}} className="flex flex-wrap p-4 text-xl w-48 rounded-xl hover:outline hover:outline-2">
                    MPM modelling of subaerial and underwater landslides
                </div>
            </Link>
            <Link href="/beams">
                <div className="flex flex-wrap p-4 text-xl w-48 rounded-xl hover:outline hover:outline-2">
                    Beam bending
                </div>
            </Link>
            
        </div>
    )
}