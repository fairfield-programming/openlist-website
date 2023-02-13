import * as React from "react"
import { Link } from "gatsby"

const PrettifyPermissions = (i) => {

    const output = i.split('-').map(i => i[0].toUpperCase() + i.slice(1).toLowerCase()).join(' ')

    return <Link>
        <div className="w-full h-8 flex flex-row justify-start items-center text-sm">
            <svg className="block fill-white bg-green-500 rounded-xl mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg>
            {output}
        </div>
    </Link>

}

const PrettifyConditions = (i) => {

    const output = i.split('-').map(i => i[0].toUpperCase() + i.slice(1).toLowerCase()).join(' ')

    return <Link>
        <div className="w-full h-8 flex flex-row justify-start items-center text-sm">
            <svg className="block fill-white bg-blue-500 rounded-xl mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            </svg>
            {output}
        </div>
    </Link>

}

const PrettifyLimitations = (i) => {

    const output = i.split('-').map(i => i[0].toUpperCase() + i.slice(1).toLowerCase()).join(' ')

    return <Link>
        <div className="w-full h-8 flex flex-row justify-start items-center text-sm">
            <svg className="block fill-white bg-red-500 rounded-xl mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            {output}
        </div>
    </Link>

}

const LicenseListItem = ({ name, description, id, permissions, conditions, limitations }) => {
  
    return <article>
        <div className="grid grid-cols-2 pb-16 gap-4">
            <div>
                <Link to={`/licenses/${id}`}>
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-3xl font-bold">{ name }</h2>
                </Link>
                <p className="text-lg mt-2">{ description || "Blah blah blah..." }</p>
            </div>
            <div className="grid grid-cols-3">
                <div>
                    <h3 className="text-md font-bold">Permissions</h3>
                    {
                        permissions.map(i => PrettifyPermissions(i))
                    }
                </div>
                <div>
                    <h3 className="text-md font-bold">Conditions</h3>
                    {
                        conditions.map(i => PrettifyConditions(i))
                    }
                </div>
                <div>
                    <h3 className="text-md font-bold">Limitations</h3>
                    {
                        limitations.map(i => PrettifyLimitations(i))
                    }
                </div>
            </div>
        </div>
    </article>

}

export default LicenseListItem
