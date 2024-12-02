
import StoreModel from '@/components/models/store-model'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>

      <StoreModel/>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})