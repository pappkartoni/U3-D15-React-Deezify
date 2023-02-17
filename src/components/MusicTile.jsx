import { Card, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { ADD_TO_PLAYLIST, likeSongAction, unlikeSongAction } from "../redux/actions"

const MusicTile = (props) => {
    const likedSongs = useSelector((state) => state.liked.likedSongs)
    const dispatch = useDispatch()

    const playSong = () => {
        dispatch({
            type: ADD_TO_PLAYLIST,
            payload: {title: "Now playing", song: props.song}
        })
    }

    return (
        <Col>
            <Card className="mb-3">
                <div className="img-wrapper">
                    <img src={props.song.album.cover_medium} alt={props.song.title} className="card-img-top"/>
                    <div className="songrow-like">
                        {likedSongs.filter(s => s.id === props.song.id).length > 0 
                        ? <BsHeartFill style={{color: "#1BD760"}} onClick={() => {dispatch(unlikeSongAction(props.song))}}/>
                        : <BsHeart style={{color: "#181818"}} onClick={() => {dispatch(likeSongAction(props.song))}}/>}
                    </div>
                    <button className="btn-transparent" onClick={playSong}>
                        <div className="play-button-cards d-flex align-items-center justify-content-center">
                            <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw">
                                <path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
                <Card.Body>
                    <h5 className="card-title text-truncate">{props.song.title}</h5>
                    <h6 className="card-subtitle">{props.song.album.title} - {props.song.artist.name}</h6>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MusicTile