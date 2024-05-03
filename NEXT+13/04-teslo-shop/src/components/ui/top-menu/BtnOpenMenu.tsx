'use client'
import { useUIStore } from "@/store";

export const BtnOpenMenu = () => {
  const { openSideMenu } = useUIStore( state => state);

  return (
    <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" onClick={openSideMenu}>
        Menú
    </button>
  )
}