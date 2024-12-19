import Image from "../../../public/pic.jpg";

const Hero = () => {
    return (
    <div id="home" className="px-16 flex min-h-screen
        w-full items-center justify-center py-28 md:px-32">
        <div className="flex flex-col justify-center items- gap-10 text-black">
        <div className="flex max-w-[600px] flex-col items-start justify-center gap-3">
            <h1 className="bg-gradient-to-r from-orange-600 to bg-slate-800 bg-clip-text text-transparent text-5xl font-bold md:text-7xl">Abidin SP</h1>
            <h3 className="bg-gradient-to-r from-orange-600 to bg-slate-800 bg-clip-text text-transparent text-2xl font-bold md:text-3xl">Front-end Developer</h3>
            <p className="md:text-base text-wrap text-sm text-gray-500">I am a web developer, and I am very passionate about coding; it feels like playing a game to me. Currently, I am focusing on front-end development, and the skills I have include HTML, CSS, JavaScript, React, and Tailwind. My goal is to become an expert full-stack developer, a software engineer, and a cybersecurity expert. I truly enjoy learning all of these areas.</p>
        </div>
        </div>
        <img src={Image} alt="" className="cursor-pointer rounded-full w-[300px] mx-4 transition-all duration-300 hover:translate-y-5 hover:scale-105 md:w-[350] flex sm:flex-col"/>
    </div>
);
};

export default Hero;
