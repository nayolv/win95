import { create } from "zustand"
import { persist } from "zustand/middleware"

type nameComponent = {
    name: string
    setName: (name: string) => void
}

export const useNameComponents =
    create(persist<nameComponent>
        (set => ({
            name: "",
            setName: (name: string) => set({ name: name }),
        }),
            {
                name: "nameComponents",
            }
        ))