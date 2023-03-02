import React from 'react'
import '../Admin/Styles/Inventory.css'
import Modal from 'react-modal';
import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

export default function ProductEditModal() {
    const [price, setPrice] = useState("")


    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [prodId, setProdId] = useState("")
    const [prodObject, setProdObject] = useState({})
    console.log(prodId, prodObject)



    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const customStyles = {
        content: {
            width: '400px',
            margin: 'auto',
            height: 'auto'
        }
    };
    const overlayClassName = 'modal-overlay';

    const UpdatProdFunc = (id, ele) => {
        setProdId(id)
        setProdObject(ele)
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
                overlayClassName={overlayClassName}
            >
                <Input type="text" onChange={(e) => (e.target.value)} />
                <Button onClick={() => UpdateFunc(prodId)}></Button>
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </div>
    )
}
