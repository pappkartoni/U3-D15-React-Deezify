import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getSongsAction } from '../redux/actions'
import WelcomeSongTile from './WelcomeSongTile'


const WelcomeContainer = (props) => {
    const dispatch = useDispatch()
    const songQueries = useSelector((state) => state.songs.queryList.find(q => q.query === props.query))
    const songs = songQueries !== undefined ? songQueries.songs : []
    
    useEffect(() => {
        if (songQueries === undefined) {
            dispatch(getSongsAction(props.query))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.query])

    return ( 
        <section>
            <Container fluid className="good-morning-container">
                <h1>Good morning</h1>
                <Row>
                    {songs.length > 0 && songs.slice(0,6).map((s) => {
                        return (
                        <WelcomeSongTile key={s.id} song={s} />
                    )})}
                </Row>
            </Container>
    </section>)
}

export default WelcomeContainer