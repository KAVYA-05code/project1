import React from 'react'
const tableheading = [
    {
        colname: "Avatar", icon: "👤",
    },
    {
        colname: "Name", icon: "♨️",
    },
    {
        colname: "Status", icon: "✅",
    },
];
const tabdata = [
    {
        avatar: "https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308460-stock-illustration-unknown-person-silhouette-profile-picture.jpg",
        name: "Alice",
        status: "Active"
    },
    {
        avatar: "https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308460-stock-illustration-unknown-person-silhouette-profile-picture.jpg",
        name: "Bob",
        status: "Inactive"
    }
]
function Table() {
    return (
        <div className='container mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-4'>📊User Data</h2>
            <table className=' min-w-full border  border-collapse'>
                <thead>
                    <tr>
                        {tableheading.map((heading) => (
                            <th key={heading.colname}
                                className='border border-gray-400 px-4 py-2 bg-gray-300'
                            >
                                {heading.icon}{heading.colname}
                            </th>
                        )
                        )}
                    </tr>
                </thead>
                <tbody>
                    {tabdata.map((user, index) => (
                        <tr key={index}>
                            <td className='border border-gray-300 px-4 py-2'>
                                <img width={50} height={50} src={user.avatar} alt=''/>
                    </td>
                    <td className='border border-gray-300 px-4 py-2'>
                        {user.name}
                    </td>
                       <td className={`border border-gray-300 px-4 py-2 ${user.status=="Active"?`text-green-500`:`text-red-600`} `}>
                        {user.status}
                    </td>
                        </tr>

                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table