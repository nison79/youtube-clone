import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className = "searchPage">
            <div className = "searchPage__filter">
                <TuneOutlinedIcon/>
                    <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image = "data:image/jpeg;base64,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"
                channel = "Thanasis Papakonstantinou"
                verified
                subs = "58k"
                noOfVideos={122}
                description ="The official page of the artist Thanasis Papakonstantinou"
            />

            <hr/>

            <VideoRow
            views="1.5M"
            subs="34k"
            description = "Μεσα στην κοιλαδα των τεμπων"
            timestamp = "1 minute ago"
            channel = "Thanasis Papakonstantinou"
            title= " Μεσα στην κοιλαδα των Τεμπων"
            image = "https://www.larisanews.gr/wp-content/uploads/2013/03/tempi1-525.gif"
            />

            <VideoRow
            views="1.5M"
            subs="34k"
            description = "Μεσα στην κοιλαδα των τεμπων"
            timestamp = "1 minute ago"
            channel = "Thanasis Papakonstantinou"
            title= " Μεσα στην κοιλαδα των Τεμπων"
            image = "https://www.larisanews.gr/wp-content/uploads/2013/03/tempi1-525.gif"
            />
        </div>
    )
}

export default SearchPage;
