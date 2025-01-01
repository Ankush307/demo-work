import React from "react";
import { Link, useParams } from "react-router-dom";

const AboutUs = () => {
    const { aboutId } = useParams();

    return (
        <div className="min-h-screen flex items-center justify-center gap-10">
            <div className="bg-gray-500 px-10 py-4 rounded-lg shadow-xl text-white  ">
                <Link className="text-xl font-bold" to="/about/1">About 1</Link>
            </div>
            <div className="bg-gray-500 px-10 py-4 rounded-lg shadow-xl text-white  ">
                <Link className="text-xl font-bold" to="/about/2">About 2</Link>
            </div>
            <div className="bg-gray-500 px-10 py-4 rounded-lg shadow-xl text-white  ">
                <Link className="text-xl font-bold" to="/about/3">About 3</Link>
            </div>
            <div className="bg-gray-500 px-10 py-4 rounded-lg shadow-xl text-white  ">
                <Link className="text-xl font-bold" to="/about/4">About 4</Link>
            </div>
            <p className="hidden">{aboutId}</p>
        </div>
    );
};

export default AboutUs;