"use client";
import { useState, useEffect } from 'react';

function Popupbox() {
    const [showPopup, setShowPopup] = useState(false); // Start with false to hide the popup initially

    // Function to close the popup
    const closePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        // Function to show the popup
        const showPopupWithDelay = () => {
            setShowPopup(true);
        };

        // Show the popup after 3 seconds (3000 ms)
        const timeoutId = setTimeout(showPopupWithDelay, 3000);

        // Set up an interval to show the popup every minute (60000 ms)
        const intervalId = setInterval(showPopupWithDelay, 600000);

        // Clean up on component unmount
        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, []);

    if (!showPopup) return null; // If the popup is closed, don't render it

    return (
        <>
            <div className="popupOverlay">
                <div className="popupContent">
                    <span className="closeBtn" onClick={closePopup}>&times;</span>
                    <div className="popupLeft">
                        <img
                            src="https://finkeyz.com/wp-content/uploads/2024/06/headerimgtop-1.webp" // You can replace this with your own image
                            alt="Sign-up Visual"
                            className="popupImg"
                        />
                    </div>
                    <div className="popupRight">
                        <h2 className='pb-5 text-center'>ENQUIRY NOW</h2>
                        {/* <p>Enter your email address to create your account on our product.</p> */}
                        <form>
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="phone" placeholder="Phone" required />
                            <button type="submit">Submit</button>
                            {/* <label>
                                <input type="checkbox" required />
                                I’ve read and agree to the <a href="#">Privacy Policy</a>.
                            </label> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popupbox;
