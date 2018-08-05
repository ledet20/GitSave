import React, { Component } from 'react';
import '../stylesheets/search.css';

class Search extends Component {
    state = {
        repoName: 'test',
        userName: ''
    }

    render() {
        return (
        <div>
            <h2 className='searchTitle'> Search by User or Repository</h2>
            <input className='inputField' type='text' />
            <button> User </button>
            <button> Repo </button>
        </div>
        );
    }
}

export default Search;