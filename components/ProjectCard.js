import React from "react";

const ProjectCard =({project:{title,desc,tags,image,source,},

})=>{
    return (
        <a id="projectCardLink" href={source} target="_blank" rel="noopener noreferrer"
        className="rounded-xl w-full bg-gradient-to-r from-[#6EE787] via-[#3B82F6] to-[#9333EA] p-1 first-letter:hover:cursor-pointer shadow-lg"
        >
            <div id="cardBackground" className="w-full h-full p-4 bg-white rounded-lg">
            <div className="flex flex-col items-center space-y-4" >
                <img src={image.url} alt={title} className="object-cover w-full rounded-lg max-h-64" />
                <h2 id="projectCardTitle" className="text-2xl font-semibold text-gray-900 ">
                    {title}
                </h2>
                <p id="description" className="text-md text-gray-700">{desc}</p>
                <div className=" items-center space-x-4">
                    {tags.map((tag) =>(
                        <span id="tags" className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-yellow-200 bg-black rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            </div>

        </a>

    );
}


export default ProjectCard;