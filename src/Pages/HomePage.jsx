import NavBar from "../components/NavBar";

const HomePage = () => {
    return (
        <>
            <div className="container mt-5 text-center">
                <h1 className="text-4xl text-gray-800">Welcome to Receipe sharing application!</h1>
                <h4 className="text-xl text-gray-600">A simple Receipe sharing application where you can share your Ideas</h4>

                <div className="max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5">
                    <ul className="text-center mt-1 text-lg text-gray-600">
                        <li>Recipe Sharing</li>
                        <li>Recipe Discovery</li>
                        <li>Video Tutorials</li>
                        <li>Ratings and Comments</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HomePage;