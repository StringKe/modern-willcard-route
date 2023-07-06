import { Outlet } from '@modern-js/runtime/router'

export default function Layout() {
    return (
        <div>
            <div>root layout</div>
            <Outlet />
        </div>
    )
}
