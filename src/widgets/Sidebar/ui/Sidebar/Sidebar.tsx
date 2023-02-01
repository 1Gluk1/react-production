import { classNames } from "shared/lib/class-names/class-names";
import cls from './Sidebar.module.scss';
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface ISidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(collapsed => !collapsed)
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
        <button
            onClick={onToggle}
        >
            Toggle sidebar
        </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/* LangSwitcher */}
            </div>
        </div>
    );
};