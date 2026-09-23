import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-screen bg-[#030305] text-white flex items-center justify-center px-4 py-8 overflow-hidden relative'>
      {/* Background glow */}
      <div className='absolute -top-40 -left-40 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]' />
      <div className='absolute -bottom-40 -right-40 w-96 h-96 bg-violet-700/20 rounded-full blur-[120px]' />

      {/* Small decorative lights */}
      <div className='absolute top-20 left-[20%] w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_15px_5px_rgba(168,85,247,0.5)]' />
      <div className='absolute bottom-28 right-[20%] w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_15px_5px_rgba(168,85,247,0.5)]' />

      <div className='relative w-full max-w-5xl grid lg:grid-cols-2 bg-[#08080d]/90 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(124,58,237,0.15)] backdrop-blur-xl'>
        {/* LEFT SIDE */}
        <div className='hidden lg:flex relative flex-col justify-center items-center p-12 bg-gradient-to-br from-purple-950/30 via-[#08080d] to-black border-r border-white/10'>
          {/* Glow behind logo */}
          <div className='absolute w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]' />

          <div className='relative text-center'>
            {/* DevDrop icon */}
            <div className='mx-auto mb-8 w-32 h-32 rounded-full border border-purple-500/50 bg-purple-950/30 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.5)]'>
              <div className='text-6xl text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]'>
                ◇ logo
              </div>
            </div>

            <h1 className='text-4xl font-bold tracking-tight'>
              Dev<span className='text-purple-500'>Drop</span>
            </h1>

            <p className='mt-3 text-gray-400'>Drop. Discover. Build.</p>

            <div className='mt-10 max-w-sm'>
              <p className='text-gray-500 text-sm leading-6'>
                A place for developers to drop ideas, discover useful resources
                and build amazing things together.
              </p>
            </div>

            {/* Bottom features */}
            <div className='mt-12 bg-white flex justify-center gap-8 text-xs text-gray-500'>
              <div>
                <div className='text-purple-400 mb-1'>✦</div>
                Share
              </div>

              <div>
                <div className='text-purple-400 mb-1'>◇</div>
                Discover
              </div>

              <div>
                <div className='text-purple-400 mb-1'>∞</div>
                Build
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='p-6 sm:p-10 lg:p-12'>
          {/* Mobile logo */}
          <div className='lg:hidden text-center mb-8'>
            <h1 className='text-3xl font-bold'>
              Dev<span className='text-purple-500'>Drop</span>
            </h1>

            <p className='text-gray-500 text-sm mt-1'>Drop. Discover. Build.</p>
          </div>

          {/* Header */}
          <div className='mb-8 text-center'>
            <h2 className='text-3xl font-semibold'>
              {isLogin ? 'Welcome back 👋' : 'Join DevDrop 🚀'}
            </h2>

            <p className='text-gray-500 mt-2 text-sm'>
              {isLogin
                ? 'Sign in to continue to your DevDrop.'
                : 'Create your account and start building.'}
            </p>
          </div>

          {/* Login / Signup switch */}
          <div className='flex p-1 rounded-xl bg-black/50 border border-white/10 mb-7'>
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 rounded-lg text-sm transition-all ${
                isLogin
                  ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(124,58,237,0.15)]'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 rounded-lg text-sm transition-all ${
                !isLogin
                  ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(124,58,237,0.15)]'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Social buttons */}
          <div className='grid grid-cols-2 gap-3 mb-6'>
            <button className='flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition text-sm'>
              <span className='font-bold'>G</span>
              Google
            </button>

            <button className='flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition text-sm'>
              <span>◉</span>
              GitHub
            </button>
          </div>

          {/* Divider */}
          <div className='flex items-center gap-4 mb-6'>
            <div className='h-px flex-1 bg-white/10' />
            <span className='text-xs text-gray-600'>OR CONTINUE WITH</span>
            <div className='h-px flex-1 bg-white/10' />
          </div>

          {/* Form */}
          <form className='space-y-5'>
            {!isLogin && (
              <div>
                <label className='block text-sm text-gray-400 mb-2'>
                  Username
                </label>

                <input
                  type='text'
                  placeholder='devdrop_user'
                  className='w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none text-sm placeholder:text-gray-700 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition'
                />
              </div>
            )}

            <div>
              <label className='block text-sm text-gray-400 mb-2'>Email</label>

              <input
                type='email'
                placeholder='you@example.com'
                className='w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none text-sm placeholder:text-gray-700 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition'
              />
            </div>

            <div>
              <div className='flex justify-between mb-2'>
                <label className='text-sm text-gray-400'>Password</label>

                {isLogin && (
                  <button
                    type='button'
                    className='text-xs text-purple-400 hover:text-purple-300'
                  >
                    Forgot password?
                  </button>
                )}
              </div>

              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='••••••••'
                  className='w-full px-4 pr-12 py-3 rounded-xl bg-black/40 border border-white/10 outline-none text-sm placeholder:text-gray-700 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition'
                />

                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300'
                >
                  {showPassword ? '◉' : '○'}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className='block text-sm text-gray-400 mb-2'>
                  Confirm password
                </label>

                <input
                  type='password'
                  placeholder='••••••••'
                  className='w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none text-sm placeholder:text-gray-700 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition'
                />
              </div>
            )}

            {isLogin && (
              <label className='flex items-center gap-2 text-sm text-gray-500 cursor-pointer'>
                <input type='checkbox' className='accent-purple-600' />
                Remember me
              </label>
            )}
            <Link to='/splash'>
              <button
                type='submit'
                className='w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_35px_rgba(124,58,237,0.5)] transition-all'
              >
                {isLogin ? 'Sign In →' : 'Create Account →'}
              </button>
            </Link>
          </form>

          {/* Bottom */}
          <p className='text-center text-sm text-gray-500 mt-7'>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}

            <button
              onClick={() => setIsLogin(!isLogin)}
              className='ml-1 text-purple-400 hover:text-purple-300'
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </p>

          {!isLogin && (
            <p className='text-center text-[11px] text-gray-600 mt-5 leading-5'>
              By creating an account, you agree to our
              <span className='text-gray-400'> Terms </span>
              and
              <span className='text-gray-400'> Privacy Policy</span>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
