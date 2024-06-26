import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type openManagement = {
    isOpen: { [key: string]: boolean }
    handleOpen: (key: string) => void
    cleanState: (key: string) => void
}

export const useOpenManagement =
    create(persist<openManagement>(
        (set) => ({
            isOpen: {
                menu: false,
                about: false,
            },
            handleOpen: (key) => {
                set((prev) => ({ ...prev, isOpen: { ...prev.isOpen, [key]: !prev.isOpen[key] } }))
            },
            cleanState: (key) => {
                set((prev) => ({ ...prev, isOpen: { ...prev.isOpen, [key]: false } }));
            }
        }),
        {
            name: 'handleOpen'
        }
    ))