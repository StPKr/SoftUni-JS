import { useState } from 'react';
import './Test.css';

export default function Test() {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    return (
        <>
            <button className='test-button' onClick={handleModal}>Click me</button>
            <div   className={`test-wrapper ${isOpen ? 'open' : 'closed'}`}>
                <div className='test-content'>
                    <div className="test-title-img">
                        <h1>Title goes here</h1>
                        <img src="https://placehold.co/300x450" alt="banner" />
                    </div>
                    <div className="test-details">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nisi.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nisi.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nisi.</p>
                    </div>
                    <div className="test-additional-content">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusamus at totam deleniti nesciunt quas saepe eveniet aliquam non dicta.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusamus at totam deleniti nesciunt quas saepe eveniet aliquam non dicta.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusamus at totam deleniti nesciunt quas saepe eveniet aliquam non dicta.</p>
                    </div>
                </div>
            </div>
        </>
    );
}