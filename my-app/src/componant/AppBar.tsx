import { SearchBar } from "./SearchBar"
export  const  AppBar = () => {
    return <div className="flex justify-between">
        <div>
            Youtube
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            Sign in
        </div>
    </div>
}