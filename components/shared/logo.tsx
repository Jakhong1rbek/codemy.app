import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<Image src={'/logo.svg'} alt='logo' height={50} width={50} />
			<h1 className='font-space-grotesk text-4xl font-bold'>Codemy</h1>
		</Link>
	)
}

export default Logo
