import React, { useState } from 'react'

export const useModal = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);

    const closeModal = (e, classAction) => {
        if(e.target.classList.contains(`${classAction}`)){
            setOpen(false);
        }
    }

    return [open, openModal, closeModal];
}
