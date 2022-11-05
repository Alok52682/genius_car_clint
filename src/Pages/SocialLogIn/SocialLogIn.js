import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import { authContext } from '../../Context/AuthProvider';

const SocialLogIn = () => {
    const { signWithGoogle, signWithGithub } = useContext(authContext);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const googleLogIn = () => {
        signWithGoogle()
            .then(result => {
                setAuthToken(result);
                navigate(from, { replace: true });
            })
            .catch(err => alert(err.messege))
    }

    const githubLogIn = () => {
        signWithGithub()
            .then(result => {
                console.log(result.user);

                alert('Log in successfull');
                navigate(from, { replace: true });
            })
            .catch(err => {
                alert(err.messege);
            })
    }

    return (
        <div>
            <Link onClick={googleLogIn} className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md bg-red-100">
                <div className="px-4 py-3">
                    <img src={`https://cdn-icons-png.flaticon.com/512/2991/2991148.png`} alt='Google' className='w-5' />
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
            </Link>
            <Link onClick={githubLogIn} className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md bg-red-100">
                <div className="px-4 py-3">
                    <img src={`https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`} alt='Github' className='w-5' />
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with GitHub</h1>
            </Link>
        </div>
    );
};

export default SocialLogIn;