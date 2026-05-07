import { section } from "framer-motion/client";

export default function Hero() {
    return (
        <section>

            {/* Background Image */}
            <img 
                src="../images/Borobudur.jpg"
                alt="Hero Image" 
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div>
                <div>
                    <p></p>

                    <h1></h1>

                    <p></p>

                    <button></button>
                </div>
            </div>

        </section>
    )
}