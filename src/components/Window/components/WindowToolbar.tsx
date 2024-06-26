import { useNameComponents } from "../../../store/nameComponents"

export const WindowToolbar = () => {
    const { name } = useNameComponents();
    return (
        <div className="window__toolbar d-flex align-items-center justify-content-between px-1">
            <div>
                {name}
            </div>
            <button className="close d-flex align-items-center justify-content-center">
                <span>
                    ✖
                </span>
            </button>
        </div>
    )
}