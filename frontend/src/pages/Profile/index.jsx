import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
// import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    // const isLogin = useSelector((state) => state.user.logout)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOutHandleBtn = () => {
        dispatch()
        navigate("/login")
    }
    return (
        <>
            <div className="h-full bg-gray-200 p-8">
                <div className="bg-white rounded-lg shadow-xl pb-8">


                    <div className="w-full h-[250px]">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg" />
                    </div>
                    <div className="flex flex-col items-center -mt-20">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" className="w-40 border-4 border-white rounded-full" />
                        <div className="flex items-center space-x-2 mt-2">
                            <p className="text-2xl">Amanda Ross</p>
                            <span className="bg-blue-500 rounded-full p-1" title="Verified">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </span>
                        </div>
                        <p className="text-gray-700">Senior Software Engineer at Tailwind CSS</p>
                        <p className="text-sm text-gray-500">New York, USA</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                        <div className="flex items-center space-x-4 mt-2">

                            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                                <FontAwesomeIcon icon={faPenToSquare} />
                                <span>Edit</span>
                            </button>
                            <button onClick={() => logOutHandleBtn()} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                <span>LogOut</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                    <div className="flex flex-col w-full 2xl:w-2/3">
                        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                            <h4 className="text-xl text-gray-900 font-bold">About</h4>
                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl text-gray-900 font-bold">Connections (532)</h4>
                        <a href="#" title="View All">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Diane Aguilar</p>
                            <p className="text-xs text-gray-500 text-center">UI/UX Design at Upwork</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection2.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Frances Mather</p>
                            <p className="text-xs text-gray-500 text-center">Software Engineer at Facebook</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Carlos Friedrich</p>
                            <p className="text-xs text-gray-500 text-center">Front-End Developer at Tailwind CSS</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection4.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Donna Serrano</p>
                            <p className="text-xs text-gray-500 text-center">System Engineer at Tesla</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection5.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Randall Tabron</p>
                            <p className="text-xs text-gray-500 text-center">Software Developer at Upwork</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection6.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">John McCleary</p>
                            <p className="text-xs text-gray-500 text-center">Software Engineer at Laravel</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection7.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Amanda Noble</p>
                            <p className="text-xs text-gray-500 text-center">Graphic Designer at Tailwind CSS</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection8.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Christine Drew</p>
                            <p className="text-xs text-gray-500 text-center">Senior Android Developer at Google</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection9.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Lucas Bell</p>
                            <p className="text-xs text-gray-500 text-center">Creative Writer at Upwork</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection10.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Debra Herring</p>
                            <p className="text-xs text-gray-500 text-center">Co-Founder at Alpine.js</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Benjamin Farrior</p>
                            <p className="text-xs text-gray-500 text-center">Software Engineer Lead at Microsoft</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection12.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Maria Heal</p>
                            <p className="text-xs text-gray-500 text-center">Linux System Administrator at Twitter</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection13.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Edward Ice</p>
                            <p className="text-xs text-gray-500 text-center">Customer Support at Instagram</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection14.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Jeffery Silver</p>
                            <p className="text-xs text-gray-500 text-center">Software Engineer at Twitter</p>
                        </a>
                        <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection15.jpg" className="w-16 rounded-full" />
                            <p className="text-center font-bold text-sm mt-1">Jennifer Schultz</p>
                            <p className="text-xs text-gray-500 text-center">Project Manager at Google</p>
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Profile;
