const OurTeam = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
                    <p className="max-w-2xl text-center dark:text-gray-600">At Paper Glass Hub, our team is fueled by creativity, dedication, and a shared love for paper crafts and glass art. We're a diverse group of artisans, designers, and enthusiasts who are committed to delivering exceptional products and experiences to our customers.</p>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                            <p className="text-xl font-semibold leading-tight">Emily Davis</p>
                            <p className="dark:text-gray-600">Paper Artisan</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                            <p className="text-xl font-semibold leading-tight">Olivia Anderson</p>
                            <p className="dark:text-gray-600">Memory Keeper</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                            <p className="text-xl font-semibold leading-tight">Ethan Rodriguez</p>
                            <p className="dark:text-gray-600">Paper Sculptor</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                            <p className="text-xl font-semibold leading-tight">Chloe Martinez</p>
                            <p className="dark:text-gray-600">Glass Artisan</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                            <p className="text-xl font-semibold leading-tight">Harper Brown</p>
                            <p className="dark:text-gray-600">Flame Sculptor</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                            <p className="text-xl font-semibold leading-tight">Mia Garcia</p>
                            <p className="dark:text-gray-600">Glass Artisan</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurTeam;