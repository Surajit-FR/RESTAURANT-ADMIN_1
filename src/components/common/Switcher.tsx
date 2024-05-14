import { useEffect, useState } from "react";

const Switcher = (): JSX.Element => {
    // State to manage the selected theme
    const [selectedTheme, setSelectedTheme] = useState<string>('semi-dark');

    // Function to handle theme change
    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTheme(event.target.id);
    };

    // Function to handle header color click
    const handleHeaderColorClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const headerColorId = event.currentTarget.id;
        setSelectedTheme(prevSelectedTheme => {
            // Remove 'color-header' class from the previous selected theme if present
            const prevClasses = prevSelectedTheme.split(' ').filter(cls => !cls.startsWith('color-header')).join(' ');
            // Append 'color-header' class followed by the clicked header color id
            return `${prevClasses} color-header ${headerColorId}`;
        });
    };

    // Effect to update the class attribute of <html> tag when selectedTheme changes
    useEffect(() => {
        const htmlTag = document.querySelector('html');
        if (htmlTag) {
            htmlTag.className = selectedTheme;
        }
    }, [selectedTheme]);

    return (
        <>
            <div className="switcher-body">
                <button
                    className="btn btn-primary btn-switcher shadow-sm"
                    type="button"
                    data-bs-toggle="offcanvas"
                    style={{ zIndex: "9" }}
                    data-bs-target="#offcanvasScrolling"
                    aria-controls="offcanvasScrolling"
                ><i className="bi bi-paint-bucket me-0"></i>
                </button>
                <div className="offcanvas offcanvas-end shadow border-start-0 p-2" data-bs-scroll="true" data-bs-backdrop="false"
                    tabIndex={-1} id="offcanvasScrolling">
                    <div className="offcanvas-header border-bottom">
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Theme Customizer</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                    </div>

                    <div className="offcanvas-body">
                        {/* Theme Variation */}
                        <h6 className="mb-0">Theme Variation</h6>
                        <hr />

                        {/* Light Theme */}
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="light-theme" value="option1" onChange={handleThemeChange} />
                            <label className="form-check-label" htmlFor="light-theme">Light</label>
                        </div>

                        {/* Dark Theme */}
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="dark-theme" value="option2" onChange={handleThemeChange} />
                            <label className="form-check-label" htmlFor="dark-theme">Dark</label>
                        </div>

                        {/* Semi Dark Theme */}
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="semi-dark" value="option3" defaultChecked onChange={handleThemeChange} />
                            <label className="form-check-label" htmlFor="semi-dark">Semi Dark</label>
                        </div>

                        {/* Minimal Theme */}
                        <hr />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="minimal-theme" value="option3" onChange={handleThemeChange} />
                            <label className="form-check-label" htmlFor="minimal-theme">Minimal Theme</label>
                        </div>
                        <hr />

                        {/* Header Colors */}
                        <h6 className="mb-0">Header Colors</h6>
                        <hr />
                        <div className="header-colors-indigators">
                            <div className="row row-cols-auto g-3">
                                <div className="col">
                                    <div className="indigator headercolor1" id="headercolor1" onClick={handleHeaderColorClick}></div>
                                </div>
                                <div className="col">
                                    <div className="indigator headercolor2" id="headercolor2" onClick={handleHeaderColorClick}></div>
                                </div>
                                <div className="col">
                                    <div className="indigator headercolor3" id="headercolor3" onClick={handleHeaderColorClick}></div>
                                </div>
                                <div className="col">
                                    <div className="indigator headercolor4" id="headercolor4" onClick={handleHeaderColorClick}></div>
                                </div>
                                <div className="col">
                                    <div className="indigator headercolor5" id="headercolor5" onClick={handleHeaderColorClick}></div>
                                </div>
                                <div className="col">
                                    <div className="indigator headercolor6" id="headercolor6" onClick={handleHeaderColorClick}></div>
                                </div>
                                <div className="col">
                                    <div className="indigator headercolor7" id="headercolor7" onClick={handleHeaderColorClick}></div>
                                </div>
                                <div className="col">
                                    <div className="indigator headercolor8" id="headercolor8"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Switcher;