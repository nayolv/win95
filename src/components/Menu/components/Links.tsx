import { useNameComponents } from "../../../store/nameComponents";
import { useOpenManagement } from "../../../store/openManagement"

const links = [
    {
        id: 1,
        name: "About",
        img: "https://win98icons.alexmeub.com/icons/png/address_book_user.png",
    },
    {
        id: 2,
        name: "Projects",
        img: "https://win98icons.alexmeub.com/icons/png/accesibility_window_abc.png",
    },
    {
        id: 3,
        name: "Experience",
        img: "https://win98icons.alexmeub.com/icons/png/accessibility_kbd_mouse.png",
    },
    {
        id: 4,
        name: "Contact",
        img: "https://win98icons.alexmeub.com/icons/png/modem-2.png",
    }
]
export const Links = () => {
    const { handleClose, handleOpen } = useOpenManagement();
    const { setName } = useNameComponents();

    return (
        <div className='menu__links'>
            <ul>
                {links.map(({ id, name, img }) => (
                    <li key={id} className="mb-1 d-flex align-items-center">
                        <button onClick={() => {
                            handleOpen(name.toLowerCase())
                            handleClose("menu")
                            setName(name.toLowerCase(), name)
                        }} className="d-flex align-items-center ps-2">
                            <img className="me-2" src={img} alt="" />
                            {name}
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}