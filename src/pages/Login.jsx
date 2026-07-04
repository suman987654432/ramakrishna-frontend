import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoLockClosed, IoMail } from 'react-icons/io5';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const VALID_EMAIL = 'atreumhospitals2026@gmail.com';
        const VALID_PASSWORD = 'Atreum@2024';

        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            localStorage.setItem('isAdminAuthenticated', 'true');
            navigate('/admin-dashboard');
        } else {
            setError('Invalid Email or Password');
        }
    };

    return (
        <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center p-4 font-sohne">
            <div className="max-w-md w-full bg-white rounded-[32px] shadow-2xl p-8 md:p-10 border border-slate-100">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-[#19628D]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <IoLockClosed size={40} className="text-[#19628D]" />
                    </div>
                    <h1 className="text-3xl font-bold text-[#0B5D85] mb-2">Admin Login</h1>
                    <p className="text-slate-500">Enter your credentials to access the dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
                        <div className="relative">
                            <IoMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#19628D]/20 focus:border-[#19628D] transition-all"
                                placeholder="atreumhospitals@gmail.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Password</label>
                        <div className="relative">
                            <IoLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input 
                                type="password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#19628D]/20 focus:border-[#19628D] transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold border border-red-100 text-center animate-shake">
                            {error}
                        </div>
                    )}

                    <button 
                        type="submit"
                        className="w-full py-4 bg-[#19628D] text-white rounded-2xl font-bold text-lg hover:bg-[#0B5D85] transition-all shadow-xl shadow-[#19628D]/20 active:scale-95"
                    >
                        Access Dashboard
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-slate-400 text-sm italic">
                        Authorized Personnel Only
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
