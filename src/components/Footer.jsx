import Logo from '../assets/images/igotthejob.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaRegHandshake } from 'react-icons/fa';



const Footer = () => {
    const handleSubmitReview = e =>{
        e.preventDefault()
    }
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">

                <nav>
                    <header className="text-lg text-blue-500 font-semibold">Address</header>
                    <a className="">Nikunja , Road No.20 , Dhaka , Bangladesh</a>
                </nav>
                <nav>
                    <header className="text-lg text-blue-500 font-semibold">Contact</header>
                    <a href='tel:+8801767739907' className="link link-hover">Phone: 01767739907</a>
                    <a href='mailto:adibarmanshuvro89@gmail.com' className="link link-hover">Email: adibarmanshuvro89@gmail.com</a>
                </nav>
                <nav>
                    <header className="text-lg text-blue-500 font-semibold">Give us review</header>
                    <form onSubmit={handleSubmitReview}>
                        <input type="text" placeholder="name" className="input input-bordered w-full my-2" />
                        <textarea className="textarea textarea-bordered w-full" placeholder="your review"></textarea>
                        <input type="submit" className='btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500 font-semibold hover:text-white normal-case w-full' value="Submit review" />
                    </form>
                </nav>

            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">

                <aside className="flex items-center justify-self-start gap-2">
                    <FaRegHandshake className='text-5xl text-blue-500'></FaRegHandshake>
                    <p className='text-blue-500 font-semibold'>I Got The Job</p>
                </aside>

                <aside className="md:justify-self-center ">
                    <p>Copyright © 2023 - All right reserved by Md. Adib Arman Shuvro</p>
                </aside>

                <nav className="md:place-self-center md:justify-self-end mr-10">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/Shuvro0421"><AiFillGithub className='text-3xl text-blue-500'></AiFillGithub></a>
                        <a href="https://www.linkedin.com/in/adib-arman-shuvro-085a701b9">
                            <AiFillLinkedin className='text-3xl text-blue-500' />
                        </a>
                    </div>
                </nav>



            </footer>
        </div>
    );
};

export default Footer;