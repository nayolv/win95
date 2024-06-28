import { ReactNode } from "react"
import './style.scss';
import { WindowToolbar } from "./components/WindowToolbar";

interface WindowDto {
    children: ReactNode
    keyName: string
}
export const Window: React.FC<WindowDto> = ({ children, keyName }) => {
    return (
        <div className="window">
           <WindowToolbar keyName={keyName} />
            {children}
        </div>
    )
}