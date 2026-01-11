import {useState, useEffect} from 'react';
import Button from "@/components/base/button2";
import { useLocation } from "react-router-dom";
import { mainLink,} from "@/content/header";
import Logo from "@/components/base/logo";
import LinkList from "@/components/customer/link";
import { Container } from "@/components/Container";
import { useAppLinkModal } from "@/contexts/AppLinkModalContext";


export default function Header() {
    const [activeKey, setActiveKey] = useState<string>('Home')
    const location = useLocation();
    const { openModal } = useAppLinkModal();

    useEffect(() => {
        const currentMenu = mainLink.find(item => item.href === location.pathname);
        if (currentMenu) {
            setActiveKey(currentMenu.name);
        }
    }, [location.pathname]);

    const handleLaunchApp = () => {
        openModal();
    };

    return (
        <header className="w-full bg-black/50 backdrop-blur sticky top-0 z-50">
            <Container className="py-2 flex items-center justify-between">
                <Logo />
                <nav className="flex gap-2 lg:gap-4 items-center">
                    <LinkList 
                        links={mainLink} 
                        onLinkClick={setActiveKey} 
                        activeKey={activeKey}
                    />
                    <div className="hidden md:block">
                        <Button 
                        onClick={handleLaunchApp}>
                            Launch App
                        </Button>
                    </div>
                    <div className="md:hidden relative">
                        <Button
                            onClick={handleLaunchApp}
                        >
                            App
                        </Button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

