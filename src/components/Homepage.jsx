import SongRow from "./SongRow"
import WelcomeContainer from "./WelcomeContainer"

const Homepage = (props) => {

    return (
        <>
            <WelcomeContainer query="mf doom" />
            <SongRow query="max b" />
            <SongRow query="ski aggu" />
        </>
    )
}

export default Homepage