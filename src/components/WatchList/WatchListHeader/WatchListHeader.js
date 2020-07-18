import React, { Component } from 'react'
import './WatchListHeader.css'


export class WatchListHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: '600'
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.setState({ width: window.innerWidth }))
    }

    render() {
        console.log('WatchList.js Trigerred')
        return (
            <React.Fragment>
                <div className="watch-list-header">
                    <div className="watch-list-header-item">Your WatchList</div>
                    <div
                        onClick={() => this.props.watchListToggle()} className="watch-list-header-close-button">
                        <i className="fa fa-times fa-xs" aria-hidden="true"></i></div>
                </div>
                <div className="watch-list-filter" >
                    {this.state.width >= 600 ?
                        (<React.Fragment>
                            < div className="title-filter flex-grow-big"><a className="button">Title</a></div>
                            <div className="release-date-filter"><a className="button">Year</a></div>
                            <div className="director-filter flex-grow-big"><a className="button">Director</a></div>
                            <div className="country-filter"><a className="button">Country</a></div>
                            <div className="genre-filter"><a className="button">Genre</a></div>
                            <div className="genre-filter"><a className="button"></a></div>

                        </React.Fragment>)
                        :
                        (<React.Fragment>
                            < div className="title-filter flex-grow-big"><a className="button">Category By:</a></div>
                        </React.Fragment>)
                    }
                </div>


            </React.Fragment >
        )
    }
}

export default WatchListHeader

