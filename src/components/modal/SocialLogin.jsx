import React, { useState } from 'react'
import './sociallogin.css'
import Modal from '@mui/material/Modal';
import { useStateContext } from '../../contextapi/stateContext';
function SocialLogin() {

    const { open, handleClose } = useStateContext()

     const loginWithGoogle = (e) => {
        e.preventDefault()
        window.open("http://localhost:5000/auth/google", "_self")
        handleClose()
    }

    return (
        <Modal
            id="mymodal"
            aria-abelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            closeAfterTransition
        >
            <div className="modal-container">
                <div className="close-modal" onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>
                <h1 className="">Sign In </h1>
                <p className="">Welcome user, please sign in to continue</p>

                <div className="social-login-btn">
                    <form>
                        <button className="login-button" tabindex="0" type="submit" name="provider" value="github" fdprocessedid="fqwgsk">
                            <span className="social-logo-modal">
                                <svg className="" focusable="false" aria-hidden="true" height='24' viewBox="0 0 24 24" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg>
                            </span>
                            <span>Sign in with GitHub</span>
                        </button>
                    </form>


                    <form>
                        <button className="login-button" tabindex="0" value="google" fdprocessedid="e7np6" onClick={loginWithGoogle}>
                            <span className="social-logo-modal">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path><path d="M1 1h22v22H1z" fill="none"></path></svg>
                            </span>
                            <span>Sign in with Google</span>
                        </button>
                    </form>

                    <form>
                        <button className="login-button" tabindex="0" type="submit" name="provider" value="facebook" fdprocessedid="n4u1it">
                            <span className="social-logo-modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="#316FF6" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path></svg>
                            </span>
                            <span>Sign in with Facebook</span>
                        </button>
                    </form>


                    <form>
                        <button className="login-button" tabindex="0" type="submit" name="provider" value="twitter" fdprocessedid="5pbvr">
                            <span className="social-logo-modal">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="117.8 161.3 464.4 377.4" width="24" height="24"><path fill="#1da1f2" d="M582.2 206c-17 7.5-35.4 12.7-54.7 15a95.5 95.5 0 0 0 41.9-52.8 190.2 190.2 0 0 1-60.5 23.2A95.2 95.2 0 0 0 344 256.6a97.3 97.3 0 0 0 2.4 21.7c-79.2-4-149.4-42-196.4-99.6A95.2 95.2 0 0 0 179.6 306a95 95 0 0 1-43.1-11.9v1.2a95.3 95.3 0 0 0 76.4 93.5 96 96 0 0 1-25 3.3 96 96 0 0 1-18-1.7 95.3 95.3 0 0 0 89 66.1 191.2 191.2 0 0 1-141 39.5c42 27 92.1 42.8 146 42.8 175.2 0 271-145.2 271-271 0-4.2 0-8.3-.3-12.4a193.7 193.7 0 0 0 47.6-49.3z"></path></svg>
                            </span>
                            <span>Sign in with Twitter</span>
                        </button>
                    </form>

                    <form>
                        <button className="login-button" tabindex="0" type="submit" name="provider" value="linkedin" fdprocessedid="7i51q">
                            <span className="social-logo-modal">
                                <svg viewBox="0 5 2490 2490.0000000000005" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M185.2 313.1H2252V2291H185.2z" fill="#fff"></path><path d="M0 183.4C0 84.9 82.4 5 184 5h2122c101.6 0 184 79.9 184 178.4v2133.3c0 98.5-82.4 178.3-184 178.3H184c-101.6 0-184-79.8-184-178.3z" fill="#0a66c2"></path><path d="M756.7 2088.8v-1121H384.1v1121zm-186.2-1274c129.9 0 210.8-86.1 210.8-193.7-2.4-110-80.9-193.7-208.3-193.7-127.5 0-210.8 83.7-210.8 193.7 0 107.6 80.8 193.7 205.9 193.7zm392.4 1274h372.6v-626c0-33.5 2.4-67 12.3-90.9 26.9-67 88.2-136.3 191.2-136.3 134.8 0 188.7 102.8 188.7 253.5v599.6h372.6V1446c0-344.3-183.8-504.5-428.9-504.5-201 0-289.2 112.3-338.3 188.8h2.5V967.8H962.9c4.9 105.2 0 1121 0 1121z" fill="#fff"></path>
                                </svg>
                            </span>
                            <span>Sign in with LinkedIn</span>
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default SocialLogin
