import { useNameComponents } from "../../../store/nameComponents"
import { useOpenManagement } from "../../../store/openManagement";

export const WindowToolbar = ({ keyName }: { keyName: string }) => {
    const { name } = useNameComponents();
    const { handleClose } = useOpenManagement();

    return (
        <div className="window__toolbar d-flex align-items-center justify-content-between px-1">
            <div>
                {name[keyName]}
            </div>
            <button
                className="close d-flex align-items-center justify-content-center"
                onClick={() => {
                    handleClose(keyName)
                }
                }>
                <span>
                    ✖
                </span>
            </button>
        </div>
    )
}