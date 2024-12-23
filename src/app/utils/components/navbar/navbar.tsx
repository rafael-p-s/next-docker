'use client';
import { useState } from 'react';
import { BsArrowDownShort } from 'react-icons/bs'; 

export default function Navbar() {
    const [open, setOpen] = useState(false); 

    return (
        <div className="bg-orange-200 h-screen">
            <div className="flex justify-center">
                <div className={`bg-yellow-50 p-5 ${open ? "translate-y-0" : "-translate-y-16"} 
                h-12 w-80 flex items-center justify-between transition-transform duration-300 ease-in-out`}>
                    {open && (
                        <div className="flex items-center space-x-6">
                            {/* Primeira Imagem */}
                            <img
                                src="../../icons/World.png"
                                alt="Imagem 1"
                                className="w-12 h-12 object-contain"
                            />
                            {/* Segunda Imagem */}
                            <img
                                src="../../icons/Login.png" 
                                alt="Imagem 2"
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                    )}
                </div>
            </div>
            
            {/* Ícone para alternar o menu (seta para baixo) */}
            <div className="flex justify-center mt-2">
                <BsArrowDownShort 
                    className="bg-white text-purple-800 text-3xl rounded-full cursor-pointer" 
                    onClick={() => setOpen(!open)} 
                />
            </div>
        </div>
    );
}
