import styles from './RecipeModal.module.css';
import { useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { setModal } from '../../stores/modal';
import RecipeContainer from './RecipeContainer/RecipeContainer';

const RecipeModal = () => {
    const portalElement = document.getElementById('portal')!;
    const dispatch = useDispatch();

    const modalRef = useRef<HTMLDivElement>(null);

    const handleBackdropClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (modalRef.current && event.target === event.currentTarget) {
            dispatch(setModal({ index: null, showModal: false }));
        }
    }, [dispatch]);

    return ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div ref={modalRef} className={styles.modal}>
                <RecipeContainer />
            </div>
        </div>,
        portalElement
    );
}

export default RecipeModal;