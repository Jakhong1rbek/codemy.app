import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/navbar'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	)
}

export default Layout
