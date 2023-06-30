import React, { useState} from 'react';



const Search = (props) => {

    const [input, setInput] = useState();

    const formHandler = (e) => {
        e.preventDefault();

        props.onResultReceived(input);
        
        // fetch("https://api.github.com/users/" + input + "/repos")
        // .then(resultRepo => resultRepo.json())
        // .then(resultRepo => setResponseRepos(resultRepo));

        // MockData
        // const resultUser = {
        //     "login": "DinkoSul",
        //     "id": 113315841,
        //     "node_id": "U_kgDOBsEQAQ",
        //     "avatar_url": "https://avatars.githubusercontent.com/u/113315841?v=4",
        //     "gravatar_id": "",
        //     "url": "https://api.github.com/users/DinkoSul",
        //     "html_url": "https://github.com/DinkoSul",
        //     "followers_url": "https://api.github.com/users/DinkoSul/followers",
        //     "following_url": "https://api.github.com/users/DinkoSul/following{/other_user}",
        //     "gists_url": "https://api.github.com/users/DinkoSul/gists{/gist_id}",
        //     "starred_url": "https://api.github.com/users/DinkoSul/starred{/owner}{/repo}",
        //     "subscriptions_url": "https://api.github.com/users/DinkoSul/subscriptions",
        //     "organizations_url": "https://api.github.com/users/DinkoSul/orgs",
        //     "repos_url": "https://api.github.com/users/DinkoSul/repos",
        //     "events_url": "https://api.github.com/users/DinkoSul/events{/privacy}",
        //     "received_events_url": "https://api.github.com/users/DinkoSul/received_events",
        //     "type": "User",
        //     "site_admin": false,
        //     "name": null,
        //     "company": null,
        //     "blog": "",
        //     "location": null,
        //     "email": null,
        //     "hireable": null,
        //     "bio": null,
        //     "twitter_username": null,
        //     "public_repos": 7,
        //     "public_gists": 0,
        //     "followers": 0,
        //     "following": 0,
        //     "created_at": "2022-09-11T22:57:45Z",
        //     "updated_at": "2023-05-09T19:13:52Z"
        //   }
          
        //   const resultRepo = [
        //     { "id": 650278336,
        //       "node_id": "R_kgDOJsJ1wA",
        //       "name": "dzmusic",
        //       "full_name": "DinkoSul/dzmusic",
        //       "private": false,
        //       "owner": {
        //         "login": "DinkoSul",
        //         "id": 113315841,
        //         "node_id": "U_kgDOBsEQAQ",
        //         "avatar_url": "https://avatars.githubusercontent.com/u/113315841?v=4",
        //         "gravatar_id": "",
        //         "url": "https://api.github.com/users/DinkoSul",
        //         "html_url": "https://github.com/DinkoSul",
        //         "followers_url": "https://api.github.com/users/DinkoSul/followers",
        //         "following_url": "https://api.github.com/users/DinkoSul/following{/other_user}",
        //         "gists_url": "https://api.github.com/users/DinkoSul/gists{/gist_id}",
        //         "starred_url": "https://api.github.com/users/DinkoSul/starred{/owner}{/repo}",
        //         "subscriptions_url": "https://api.github.com/users/DinkoSul/subscriptions",
        //         "organizations_url": "https://api.github.com/users/DinkoSul/orgs",
        //         "repos_url": "https://api.github.com/users/DinkoSul/repos",
        //         "events_url": "https://api.github.com/users/DinkoSul/events{/privacy}",
        //         "received_events_url": "https://api.github.com/users/DinkoSul/received_events",
        //         "type": "User",
        //         "site_admin": false
        //       }}];                      
    };

    const resetState = () => {
        setInput('');
        props.resetHandler();
    }

    return (
        <div>
            <form onClick={formHandler}>
                <label htmlFor="username">GitHub username: </label>
                <input id="username" type="text" value={input} onChange={e => setInput(e.target.value) }/>
                <br />
                <input type='submit' value="Go!" />
            </form>
            <button onClick={resetState}>Reset</button>
            <hr />
        </div>
    );
}

export default Search;
