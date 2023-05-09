import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store/ui/uiSlice";

export const useUiStore = () =>{
    const {
        isDateModalOpen
    } = useSelector(( store )=> store.ui);

    const dispatch = useDispatch();

    const openDateModal = () =>{
        dispatch( onOpenDateModal() );
    }

    const closeDateModal = () =>{
        dispatch(onCloseDateModal());
    }

    const toggleDateModal = () =>{
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal()
    }

    return {
        //propiedades
        isDateModalOpen,
        //metodos
        openDateModal,
        closeDateModal,
        toggleDateModal
    }
}