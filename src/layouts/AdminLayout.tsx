import React, { PropsWithChildren } from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {
    Box,
    CSSObject,
    Divider,
    IconButton,
    Theme,
    styled,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HailIcon from '@mui/icons-material/Hail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ResponsiveNavLink from 'components/ResponsiveNavLink';
import { useLocation } from 'react-router-dom';

interface Props {
    title: string;
    renderHeader?(): JSX.Element;
}

const drawerWidth = 270;
const navHeight = 70;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    height: navHeight,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

function logout(e: React.FormEvent) {
    e.preventDefault();

}

export default function AdminLayout({
    title,
    renderHeader,
    children,
}: PropsWithChildren<Props>) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    const location = useLocation();

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            setIsSidebarOpen(open);
        };

    const sideBar = () => (
        <Box sx={{ width: drawerWidth }} role="presentation">
            <ul className="">
                <li>
                    <ResponsiveNavLink
                        href={"/admin/dashboard"}
                        active={"/admin/dashboard" === location.pathname}
                    >
                        <span className={'mr-4'}>
                            <DashboardIcon fontSize="large" />
                        </span>
                        Dashboard
                    </ResponsiveNavLink>
                </li>
                <li>
                    <ResponsiveNavLink
                        href={"/admin/talents"}
                        active={location.pathname.startsWith('/admin/talents')}
                    >
                        <span className={'mr-4'}>
                            <HailIcon fontSize="large" />
                        </span>
                        Talent
                    </ResponsiveNavLink>
                </li>
            </ul>
        </Box>
    );

    return (
        <div
            className="min-h-screen min-w-full w-full"
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgb(255, 255, 255) 85%), radial-gradient(ellipse at center left, rgba(4, 159, 249, 0.384), transparent 50%), radial-gradient(ellipse at center right, rgba(35, 18, 190, 0.13), transparent 50%), radial-gradient(ellipse at bottom right, rgba(20, 4, 249, 0.363), transparent 50%), radial-gradient(ellipse at bottom left, rgba(252, 202, 38, 0.342), transparent 50%)',
            }}
        >
            <Box sx={{ display: 'flex' }}>
                <AppBar open={isSidebarOpen}>
                    <nav
                        className="flex justify-between w-full sticky bg-main-blue my-auto px-7 shadow shadow-sky-400/50"
                        style={{ height: navHeight }}
                    >
                        <div className="flex gap-3 max-w-6xl mr-30">
                            <button
                                className="text-3xl md:ml-20 text-white px-3 py-2"
                                onClick={toggleDrawer(!isSidebarOpen)}
                            >
                                <MenuIcon fontSize="large" />
                            </button>
                        </div>
                        <div className="mr-3 relative my-auto">
                            {/* <Dropdown
                                align="right"
                                width="48"
                                renderTrigger={() => (
                                    <button className="flex text-sm text-white border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                                        <SettingsIcon fontSize="large" />
                                    </button>
                                )}
                            >
                                <div className="block px-4 py-2 text-xs text-gray-400">
                                    Manage Account
                                </div>

                                <ResponsiveNavLink href={"/profile"}>
                                    Profile
                                </ResponsiveNavLink>

                                <div className="border-t border-gray-100"></div>

                                <form onSubmit={logout}>
                                    <ResponsiveNavLink as="button">
                                        {' '}
                                        <div className="text-red-700 font-bold">Log Out</div>{' '}
                                    </ResponsiveNavLink>
                                </form>
                            </Dropdown> */}
                        </div>
                    </nav>
                </AppBar>
                <Drawer variant="permanent" open={isSidebarOpen}>
                    <DrawerHeader>
                        <IconButton onClick={toggleDrawer(!isSidebarOpen)}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    {sideBar()}
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1, p: 3, marginTop: `${navHeight}px`,
                        backgroundColor: '#FFF5FE',
                    }}
                >
                    <div className="mx-auto px-8">
                        <div className="">{children}</div>
                    </div>
                </Box>
            </Box>
            <div className="w-full bg-blue-50 fixed bottom-0 text-center shadow shadow-sky-400/50 py-1">
                Friendease Inc
            </div>
        </div>
    );
}
