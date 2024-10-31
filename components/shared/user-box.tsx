'use client'
import { SignOutButton, useUser } from '@clerk/nextjs'
import React from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarImage } from '../ui/avatar'
import Link from 'next/link'
import { LogOutIcon, UserRoundCog } from 'lucide-react'

import useTranslate from '@/hooks/use-translate'

function UserBox() {
	const { user } = useUser()
	const t = useTranslate()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className='size-10 cursor-pointer'>
					<AvatarImage src={user?.imageUrl} />
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-80'
				align='start'
				alignOffset={11}
				forceMount
			>
				<div className='flex flex-col space-y-4 p-4'>
					<p className='text-xs font-medium leading-none text-muted-foreground'>
						{user?.emailAddresses[0].emailAddress}
					</p>
					<div className='flex items-center gap-x-2'>
						<div className='rounded-md bg-secondary p-1'>
							<Avatar className='size-8'>
								<AvatarImage src={user?.imageUrl}></AvatarImage>
							</Avatar>
						</div>
						<div className='space-y-1'>
							<p className='line-clamp-1 font-space-grotesk text-sm'>
								{user?.fullName}
							</p>
						</div>
					</div>
				</div>
				<DropdownMenuSeparator />
				<Link href={'/user-profile'}>
					<DropdownMenuItem className='w-full cursor-pointer text-muted-foreground'>
						<UserRoundCog />
						<span>{t('manageAccount')}</span>
					</DropdownMenuItem>
				</Link>
				<DropdownMenuItem className='w-full cursor-pointer text-muted-foreground '>
					<LogOutIcon />
					<SignOutButton>{t('logout')}</SignOutButton>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserBox
