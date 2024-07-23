import ContentImage from '.././assets/images/contentImage.png';

const MainSection = () => {
    const cardContents = [
        { cardNumber: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { cardNumber: 2, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { cardNumber: 3, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
    ];
    
    return (  
    <>
        <section className="container mx-auto px-4 md:px-48 py-8 md:py-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center">
                {cardContents.map((cardContent, index) => {
                    return (
                    <section key={index} className="border rounded-lg shadow-lg text-center p-4 w-full">
                        <div className="h-64 bg-gray-300 flex items-center justify-center">
                            <img src={ContentImage} alt="Card" className="w-full h-full object-cover" />
                        </div>
                        <p className="mt-4 text-gray-700 font-medium text-center h-fit md:h-36">
                            {cardContent.content}
                        </p>
                        <button className="mt-4 bg-transparent text-black font-semibold py-2 px-4 rounded-full border-2 border-black hover:bg-black hover:text-white transition tracking-[.15em]">
                            READ MORE
                        </button>
                    </section>
                    );
                })}
            </div>
        </section>
    </>
    );
}
 
export default MainSection;