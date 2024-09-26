import { useEffect } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../../helper/FormValidation';
// import CustomAlert from '../../util/CustomAlert';
import Loader from '../../components/Loader';
import { AppDispatch } from '../../store/Store';
import { LoginRequest } from '../../store/reducers/AuthReducers';
import { TLoginCredentials } from '../../types/authTypes';


const Signin = (): JSX.Element => {
    const accessToken: string | null = window.localStorage.getItem("accessToken");
    const refreshToken: string | null = window.localStorage.getItem("refreshToken");

    const { type } = useSelector((state: any) => state.authSlice);
    const location = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid } = useFormik<TLoginCredentials>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            dispatch(LoginRequest({ data: values, navigate }));
        },
    });

    useEffect(() => {
        // Add the class to the body tag
        document.body.classList.add('bg-login');
        // Cleanup function to remove the class when the component is unmounted
        return () => {
            document.body.classList.remove('bg-login');
        };
    }, [location]);

    useEffect(() => {
        if (accessToken && refreshToken && navigate) {
            navigate("/dashboard");
        } else if (navigate) {
            navigate("/admin/signin");
        }
    }, [accessToken, refreshToken, navigate, dispatch]);

    const renderError = (error: any) => {
        if (typeof error === "string") {
            return <p className='text-danger m-1' style={{ fontSize: "11.5px" }}>*{error}</p>;
        }
        return null;
    };


    return (
        <>
            {/* Loader */}
            <Loader loading={type === "authSlice/LoginRequest"} />

            <div className="wrapper">
                <main className="authentication-content mt-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-4 mx-auto">
                                <div className="card shadow rounded-5 overflow-hidden">
                                    <div className="card-body p-4 p-sm-5">
                                        <h5 className="card-title">Sign In</h5>
                                        <p className="card-text mb-5">See your growth and get consulting support!</p>
                                        <form className="form-body" onSubmit={handleSubmit}>
                                            <div className="row g-3">

                                                {/* Error alert */}
                                                {/* {error && <CustomAlert type="danger" message={error?.message} onClose={() => dispatch(clearAuthError())} />} */}

                                                {/* Email Input */}
                                                <div className="col-12">
                                                    <label htmlFor="inputEmailAddress" className="form-label">Email Address</label>
                                                    <div className="ms-auto position-relative">
                                                        <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                                            <i className="bi bi-envelope-fill"></i>
                                                        </div>
                                                        <input
                                                            type="email"
                                                            className="form-control radius-30 ps-5"
                                                            id="inputEmailAddress"
                                                            placeholder="Email Address"
                                                            name='email'
                                                            value={values?.email || ""}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            style={{ border: touched?.email && errors?.email ? "1px solid red" : "" }}
                                                        />
                                                    </div>
                                                    {touched?.email && renderError(errors?.email)}
                                                </div>

                                                {/* Password Input */}
                                                <div className="col-12">
                                                    <label htmlFor="inputChoosePassword" className="form-label">Enter Password</label>
                                                    <div className="ms-auto position-relative">
                                                        <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                                            <i className="bi bi-lock-fill"></i>
                                                        </div>
                                                        <input
                                                            type="password"
                                                            className="form-control radius-30 ps-5"
                                                            id="inputChoosePassword"
                                                            placeholder="•••••••••••"
                                                            name='password'
                                                            value={values?.password || ""}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            style={{ border: touched?.password && errors?.password ? "1px solid red" : "" }}
                                                        />
                                                    </div>
                                                    {touched?.password && renderError(errors?.password)}
                                                </div>

                                                {/* <div className="col-6 text-end">
                                                    <Link to="#">Forgot Password ?</Link>
                                                </div> */}

                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary radius-30"
                                                            disabled={!isValid}
                                                        >Sign In</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </main >
            </div >
        </>
    );
};

export default Signin;