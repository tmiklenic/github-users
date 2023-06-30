import React from 'react';

const Results = ({userData, repoData}) => {
    return (
        <div>
            <img src={userData.avatar_url} height='200' width='200' alt=''/>
            <h1>{userData.name}</h1>
            <p>Bio: {userData.bio}</p>
            <p>Location: {userData.location}</p>
            <hr/>
            Repos:
            <ul>
             {repoData.map(
                    repo => <li key={repo.id}>{repo.name}</li>
                )}
            </ul>
        </div>
    );
}

export default Results;
