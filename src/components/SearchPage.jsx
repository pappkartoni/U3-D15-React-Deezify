import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getSongsAction } from '../redux/actions'
import MusicTile from './MusicTile'


const SearchPage = (props) => {
    const params = useParams()
    const dispatch = useDispatch()
    const songQueries = useSelector((state) => state.songs.queryList.find(q => q.query === params.q))
    const songs = songQueries !== undefined ? songQueries.songs : []
    
    useEffect(() => {
            dispatch(getSongsAction(params.q))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.q])

    return ( 
        <section>
            <Container fluid className="main-container">
            <h1>Search Results</h1>
            {params.q?.length &&
                <Row className="recently-played row-cols-8">
                    {songs.length > 0 && songs.map((s) => {
                        return (
                        <MusicTile key={s.id} song={s} />
                    )})}
                </Row>}
        </Container>
    </section>)
}

export default SearchPage