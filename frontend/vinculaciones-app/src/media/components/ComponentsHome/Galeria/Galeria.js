import { Container } from 'react-bootstrap';
import './galeria.css';
import GaleriaModal from './GaleriaModal';
import {useEffect, useRef, useState} from 'react';

function Galeria({ media }) {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalTitle, setModalTitle] = useState(null);
    const videoRefs = useRef([]);

    useEffect(() => {
        videoRefs.current.forEach(video => {
            if (video) {
                video.play().catch(error => {
                    console.error('Error attempting to play', error);
                });
            }
        });
    }, []);
    const renderMedia = (item, index) => {
        if (item.type === 'image') {
            return (
                <img
                    key={index}
                    className='card-element'
                    src={item.src}
                    alt={item.alt}
                    onClick={() => {
                        if (item.clickable) {
                            setModalContent(item.component);
                            setModalShow(true);
                        }
                        setModalTitle(item.title);
                    }}
                />
            );
        } else if (item.type === 'video') {
            return (
                <video
                    key={index}
                    ref={el => videoRefs.current[index] = el}
                    className='card-element video-element'
                    src={item.src}
                    controls
                    muted
                    onClick={() => {
                        if (item.clickable) {
                            setModalContent(item.component);
                            setModalShow(true);
                        }
                        setModalTitle(item.title);
                    }}
                />
            );
        }
        return null;
    };

    return (
        <Container className='galeria mt-5 mb-5'>
            {media.map((item, index) => (
                <Container>
                    {renderMedia(item, index)}
                </Container>
            ))}
            <GaleriaModal title={modalTitle} show={modalShow} onHide={() => setModalShow(false)}>
                {modalContent}
            </GaleriaModal>
        </Container>
    );
}

export default Galeria;
