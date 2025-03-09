// Main Component

export default function ProjectItem () {
    // Rendering

    return (
        <div className="w-sm rounded bg-gray-800">
            {/* Image here. */}

            {/* <div className="px-6"> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab ratione esse enim, quasi aliquam. Deleniti repellat soluta aperiam aliquid consectetur ea ad omnis nobis. Dicta eveniet unde illo accusamus.</p>
            </div>

            {/* <div className="px-6 pt-4 pb-2"> */}
            <div className="px-6 pb-2">
                <button>Github</button>&nbsp;
                <button>Go!</button>
            </div>

            {/* <div className="p-4 m-4">
                <p
                    className="text-2xl"
                >Card Title</p>
                
                <p className="m-4 text-red-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quam doloribus velit rem porro repellendus non, nobis quasi sint laudantium dicta voluptatibus tenetur ducimus nihil fugiat, impedit ratione sed harum.</p>
            </div> */}
        </div>
    )
}
