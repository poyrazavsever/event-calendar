import React from 'react';
import { FaMouse } from 'react-icons/fa'; // Mouse ikonunu import ettik

const Scroll = () => {
    return (
        <div className="fixed bottom-5 right-5 flex items-center justify-center gap-2 cursor-default text-neutral-700">
            <span className="text-2xl font-bold">Scroll</span>
            <FaMouse className="text-2xl" />
        </div>
    );
};

export default Scroll;
