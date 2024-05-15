import React from "react";

const Loader = (): JSX.Element => {
    const containerStyle: React.CSSProperties = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#4a62686e",
        zIndex: "99999",
        height: "100vh",
        width: "100%"
    }
    const spinnerStyle1: React.CSSProperties = {
        width: "2.6rem",
        height: "2.6rem",
    }
    const spinnerStyle2: React.CSSProperties = {
        width: "2rem",
        height: "2rem",
    }

    return (
        <>
            <div>
                <div className="d-flex justify-content-center align-items-center" style={containerStyle}>
                    <div className="spinner-grow" role="status" style={spinnerStyle2}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow mx-2" role="status" style={spinnerStyle1}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow" role="status" style={spinnerStyle2}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Loader;