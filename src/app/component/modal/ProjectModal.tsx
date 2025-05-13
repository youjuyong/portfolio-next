import React, { PropsWithChildren, FC } from "react";
import Modal from "react-modal";
import { ProjectModalCss } from "../../../css/modal";

interface modalPropsType {
    modalBoolean   : boolean,
    setModalIsOpen : (e : modalType) => void,
}

type modalType = {
    modalValue : boolean,
    modalName : string
}

export const Project_Modal_Cp : FC<PropsWithChildren<modalPropsType>> =  ( { modalBoolean, setModalIsOpen, children }) => {

    return (
        <>
              <Modal
                isOpen={modalBoolean}
                style={ProjectModalCss}
                onRequestClose={() => setModalIsOpen({ modalValue : false, modalName : ''})}
                ariaHideApp={false}
                contentLabel="Pop up Message"
                shouldCloseOnOverlayClick={false}
            >
                {children}
            </Modal>
        </>
    )
};