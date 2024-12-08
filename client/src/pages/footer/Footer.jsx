import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} NoteSpace. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="/about" className="text-sm hover:underline">About</a>
                        <a href="/contact" className="text-sm hover:underline">Contact</a>
                        <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
                        <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
