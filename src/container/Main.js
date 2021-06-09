import React, { Component } from "react";
import axios from "axios";

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import WebtoonList from "../component/WebtoonList";

class Main extends Component {
    constructor(props) {
        super(props);

        const query = new URLSearchParams(props.location.search);
        const day = query.get('day');

        this.state = {
          day : day || 'mon',  // default mon
          webtoonList : []  // init empty list
        };
    }

    componentDidMount() {
        this._getList();
    }

    componentDidUpdate(prevProps) {
        // setState change day
        let prevQuery = new URLSearchParams(prevProps.location.search);
        let prevDay = prevQuery.get('day');

        let query = new URLSearchParams(this.props.location.search);
        let day = query.get('day');

        if (prevDay !== day) {
            this.setState({
                day
            })
        };
    }

    _getList() {
        // get webtoon_list
        const apiUrl = 'dummy/webtoon_list.json';

        axios.get(apiUrl)
            .then(data => {
                // save list in state
                this.setState({
                    webtoonList : data.data.webtoonList
                });
            })
            .catch(error => {
               console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Header />
                <Gnb day={this.state.day} />

                { this.state.webtoonList.length > 0 ? (
                    <WebtoonList list={
                        this.state.webtoonList.filter(webtoon => (
                            webtoon.day === this.state.day
                        ))
                    } />
                ) : (
                    <span>
                        LOADING...
                    </span>
                )}

                <Footer />
            </div>
        )
    }
}

export default Main;