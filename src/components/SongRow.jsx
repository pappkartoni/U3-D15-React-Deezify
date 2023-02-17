import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getSongsAction } from '../redux/actions'
import MusicTile from './MusicTile'


const SongRow = (props) => {
    const dispatch = useDispatch()
    const songQueries = useSelector((state) => state.songs.queryList.find(q => q.query === props.query))
    const songs = songQueries !== undefined ? songQueries.songs : []
    
    const capitalize = (str) => {
        return str.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")
    }

    useEffect(() => {
        if (songQueries === undefined) {
            dispatch(getSongsAction(props.query))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.query])

    return ( 
        <section>
            <Container fluid className="main-container">
                <h1>{capitalize(props.query)}</h1>
                <Row className="recently-played row-cols-8">
                    {songs.length > 0 && songs.slice(0,8).map((s) => {
                        return (
                        <MusicTile key={s.id} song={s} />
                    )})}
                </Row>
            </Container>
    </section>)
}

export default SongRow