import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "Zelda's Lullaby", duration: "2:48" },
        { title: "Song of Storms", duration: "2:20" },
        { title: "Song of Time", duration: "3:07" },
        { title: "Bolero of Fire", duration: "3:35" }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});