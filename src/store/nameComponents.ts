import { create } from "zustand"
import { persist } from "zustand/middleware"

type nameComponent = {
    name: { [key: string]: string }
    setName: (key: string, name: string) => void
}

export const useNameComponents =
    create(persist<nameComponent>(
        (set) => ({
            name: {
                about: "",
                projects: "",
                experience: "",
                contact: ""
            },
            setName: (key, name) => {
                set((prev) => ({ ...prev, name: { ...prev.name, [key]: name } }))
            },

        }),
        {
            name: 'nameComponents'
        }
    ))