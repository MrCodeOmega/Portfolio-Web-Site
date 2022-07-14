import React from "react";

const ArsaCards =({project:{title,description,tags,image,fiyat,parsel,ada},

})=>{
    return (
        <div id="projectCardLink"  rel="noopener noreferrer"
        className="rounded-xl w-full bg-gradient-to-r from-[#f4f5f4] via-[#ffffff] to-[#69696944] p-1 first-letter:hover:cursor-pointer shadow-lg"
        >
            <div id="cardBackground" className="w-full h-full p-4 bg-white rounded-lg">
            <div className="flex flex-col items-center space-y-4" >
                <img src={image.url} alt={title} className="object-cover w-full rounded-lg max-h-64" />
                <h2 id="projectCardTitle" className="text-2xl font-semibold text-gray-900 ">
                    {title}
                </h2>
                <p id="description" className="text-md text-gray-700">{description}</p>
                <p id="description2" className="text-md text-gray-700"> Ada: {ada} {" "}Parsel: {parsel}</p>
               
               <h5 id="description3" className="text-md text-gray-700">Fiyat: {fiyat}</h5>
                <div className="flex items-center space-x-4">
                    {tags.map((tag) =>(
                        <span id="tags" className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-yellow-200 bg-black rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            </div>

        </div>

    );
}


export default ArsaCards;