import React from 'react'
import './Login.css'

function Login({ handleRegister, handleLogin }) {
    return (
        <div className="login-wrap mt-5">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" className="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-form mt-3">
                    <form onSubmit={handleLogin}>
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="email" className="label">Email</label>
                                <input id="email" type="email" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Şifre</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" />
                                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button mt-5" value="Sign In" />
                            </div>
                            <div className="hr"></div>
                        </div>
                    </form>
                    <form onSubmit={handleRegister}>
                        <div className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Kullanıcı Adı</label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="passReg" className="label">Şifre</label>
                                <input id="passReg" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label htmlFor="passRegRep" className="label">Şifre Tekrar</label>
                                <input id="passRegRep" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label htmlFor="emailReg" className="label">Email Adresin</label>
                                <input id="emailReg" type="email" className="input" />
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign Up" />
                            </div>
                            <div className="hr"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login