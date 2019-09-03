import React from 'react';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table'
class Repository extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            repoResult: {},
            isLoaded: false
        }
        
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        console.log(this.props.userLogin);
        fetch("https://api.github.com/repos/"+params.userLogin+"/"+params.repoName).then(data=>data.json()).then(data=> {this.setState({repoResult: data, isLoaded: true})});
        console.log(this.state.repoResult);
    }

    render() {
        if(this.state.isLoaded){
            return (
                <div >
                    <h1>Repository Details</h1>
                    <img className="img-thumbnail" alt="user"src={this.state.repoResult.owner.avatar_url} ></img>
                    <h3>{this.state.repoResult.owner.login}</h3>
                    <Link to={`/user/${this.state.repoResult.owner.login}`}>User Details</Link>
                    <Table className='table table-striped'>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.repoResult.name}</td>
                            </tr>
                            <tr>
                                <td>Repo Id</td>
                                <td>{this.state.repoResult.id}</td>
                            </tr>
                            <tr>
                                <td>Owner Login</td>
                                <td>{this.state.repoResult.owner.login}</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>{this.state.repoResult.language}</td>
                            </tr>
                            <tr>
                                <td>Forks</td>
                                <td>{this.state.repoResult.forks}</td>
                            </tr>
                            <tr>
                                <td>Watchers</td>
                                <td>{this.state.repoResult.watchers}</td>
                            </tr>
                            <tr>
                                <td>Open Issues</td>
                                <td>{this.state.repoResult.open_issues}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Link to='/search'>Go To Search</Link>
                </div>
            );
            }
            else{
                return(
                    <div>
                        <h3>Loading...</h3>
                        <Spinner animation="border" variant="primary" />
                    </div>
                );
            }
    }
}


export default Repository;

