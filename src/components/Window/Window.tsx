import { ReactNode } from "react"
import './style.scss';
import { WindowToolbar } from "./components/WindowToolbar";

interface WindowDto {
    children: ReactNode
}
export const Window: React.FC<WindowDto> = ({ children }) => {
    return (
        <div className="window">
           <WindowToolbar />
            {children}
        </div>
    )
}