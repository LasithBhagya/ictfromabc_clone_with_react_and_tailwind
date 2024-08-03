import youtube from './imgs/youtube.svg';
import telegram from './imgs/telegram.svg';
import facebook from './imgs/facebook.svg';
import banner from './imgs/ictfromabc-vertical-banner.png';
import '../index.css';

function LoginPage() {
    return(
        <div className='flex flex-row w-full h-full bg-black lg:rounded-lg overflow-y-scroll lg:overflow-y-hidden'>
            <div className='login-content-holder flex flex-col flex-grow rounded-l-lg'>
                <div className='login-content flex flex-col lg:flex-row items-center justify-evenly flex-grow rounded-tl-lg z-0'>
                    {/* defenition */}
                    <div className='defenition flex flex-col items-center lg:items-start max-w-[36vw] lg:max-w-[20vw] min-h-[36vw] mt-8 sm:mt-0 lg:min-h-0'>
                        <div className='d-title flex flex-row'>
                            <h1 className='font-fredoka text-[8vw] lg:text-[4vw] font-semibold text-red1'>ict</h1>
                            <h1 className='font-fredoka text-[8vw] lg:text-[4vw] font-semibold text-light1'>fromabc</h1>
                        </div>
                        <div>
                            <p className='font-cursive mt-[2vh] text-[2vw] text-center lg:text-[1vw] lg:text-left text-light1'>
                                ICT class with the highest number of A and B passes in Sri Lanka
                            </p>
                        </div>
                        <div className='flex flex-row mt-[4vh] h-[3vw]'>
                            <a href='#' className='sl-element relative flex items-center justify-center overflow-hidden box-border mr-[2vw] w-[6vw] h-[6vw] lg:w-[3vw] lg:h-[3vw] rounded-full border border-dark2 border-solid bg-dark1 cursor-pointer
                            before:absolute before:content-[""] before:top-0 before:left-0 before:w-[200%] before:h-full before:z-10 before:transition-none'>
                                <img src={youtube} alt='yt' className='w-3/5 h-auto'></img>
                            </a>
                            <a href='#' className='sl-element relative flex items-center justify-center overflow-hidden box-border mr-[2vw] w-[6vw] h-[6vw] lg:w-[3vw] lg:h-[3vw] rounded-full border border-dark2 border-solid bg-dark1 cursor-pointer
                            before:absolute before:content-[""] before:top-0 before:left-0 before:w-[200%] before:h-full before:z-10 before:transition-none'>
                                <img src={telegram} alt='t' className='w-3/5 h-auto'></img>
                            </a>
                            <a href='#' className='sl-element relative flex items-center justify-center overflow-hidden box-border mr-[2vw] w-[6vw] h-[6vw] lg:w-[3vw] lg:h-[3vw] rounded-full border border-dark2 border-solid bg-dark1 cursor-pointer
                            before:absolute before:content-[""] before:top-0 before:left-0 before:w-[200%] before:h-full before:z-10 before:transition-none'>
                                <img src={facebook} alt='f' className='w-3/5 h-auto'></img>
                            </a>
                        </div>
                        <div className='flex mt-[4vh]'>
                            <a href='#' id='pastpaper-collection' className='p-[1em] no-underline text-light3 rounded-lg border-2 border-dashed border-red2 box-border font-fredoka lg:text-[1vw] duration-[80ms] ease-out text-[2vw]'>
                                ICT pastpaper collection
                            </a>
                        </div>
                    </div>
                    {/* seperator */}
                    <div className='hidden lg:block w-0.5 h-[50vh] bg-red2'></div>
                    {/* login form */}
                    <div className='form-holder relative flex flex-col justify-between p-4 lg:aspect-square h-[calc(82vw-2em)] lg:h-[calc(50vh-2rem)] max-w-[512px] max-h-[calc(52%-2em)] md:max-h-[40%] lg:max-w-none lg:max-h-none rounded-lg bg-dark1t
                    before:absolute before:content-[""] before:w-full before:h-full before:top-1/2 before:left-1/2 before:p-px before:rounded-lg before:opacity-50 before:blur-2xl before:-z-10
                    after:absolute after:content-[""] after:w-full after:h-full after:top-1/2 after:left-1/2 after:p-px after:rounded-lg after:-z-10'>
                        <div className='form flex flex-col px-[2vw]'>
                            <h1 className='w-full mt-[2vh] mb-[3vh] font-fredoka text-[4vh] font-semibold text-center text-light4'>Let's get started!</h1>
                            <input type='tel' id='phone-no' placeholder='Your phone number' />
                            <input type='password' id='password' placeholder='Your password' />
                            <button id='login-btn' className='w-auto p-[1.2vh] mb-[2vh] font-fredoka font-medium text-[2vh] rounded-lg border border-solid border-red1x text-light2 bg-transparent duration-[80ms] ease-linear
                            hover:text-light1 hover:bg-red1 hover:cursor-pointer focus:text-light1 focus:bg-red1'>Login</button>
                        </div>
                        <div className='relative w-[calc(100%-4vw)] self-center border-b-2 border-dashed border-light7
                        after:content-["OR"] after:absolute after:w-[10%] after:text-center after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2
                        after:font-fredoka after:font-medium after:text-[1.6vh] after:text-light4 after:bg-dark1'></div>
                        <div className='contact-details flex flex-col mx-[2vw] mb-[2vh]'>
                            <a href='#' className='w-fit mb-[0.8vh] underline font-sans text-[1.6vh] text-light6'>visit old site</a>
                            <span className='w-fit mb-[0.2vh] font-sans text-[1.4vh] text-light7'><b>email:</b> lasithbhagya13@gmail.com</span>
                            <span className='w-fit mb-[0.2vh] font-sans text-[1.4vh] text-light7'><b>tel-no:</b> +94 769182646</span>
                        </div>
                    </div>
                </div>
                <div className='mb-[1vh] flex flex-col items-center z-0'>
                    <p className='font-monospace text-[1vh] text-light7'>© 2024. All rights reserved.</p>
                </div>
            </div>
            <div className='hidden xl:block'>
                <img src={banner} alt='ictfromabc' className='w-auto h-full rounded-r-lg'></img>
            </div>
        </div>
    );
}

export default LoginPage;