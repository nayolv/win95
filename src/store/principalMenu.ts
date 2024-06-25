import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type principalMenuState = {
    isOpen: boolean
    handleMenu: () => void
    cleanState: () => void
}

export const usePrincipalMenuState =
    create(persist<principalMenuState>(
        (set) => ({
            isOpen: false,
            handleMenu: () => {
                set((state) => ({ isOpen: !state.isOpen }))
            },
            cleanState: () => {
                set({ isOpen: false })
            }
        }),
        {
            name: 'open-menu'
        }
    ))