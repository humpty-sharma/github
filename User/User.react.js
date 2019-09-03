import React from 'react';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userResult: {},
            isLoaded: false
        }
    }

    

    componentDidMount(){
        const { match: { params } } = this.props;
        console.log(params.userLogin);
        fetch("https://api.github.com/users/"+params.userLogin).then(data=>data.json()).then(data=> {this.setState({userResult: data, isLoaded: true})});
        console.log(this.state.userResult);
    }


    render() {
        if(this.state.isLoaded){
            return (
                <div >
                    <h1>User Details</h1>
                    <div>
                    <Link to='/search'>Go To Search</Link>
                    </div>
                    <img className="img-thumbnail rounded-right" src={this.state.userResult.avatar_url} alt="user" ></img>
                    <p>{this.state.userResult.bio}</p>
                    <Table className='table table-striped' >
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.userResult.name}</td>
                            </tr>
                            <tr>
                                <td>Login Id</td>
                                <td>{this.state.userResult.login}</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>{this.state.userResult.company}</td>
                            </tr>
                            <tr>
                                <td>Followers</td>
                                <td>{this.state.userResult.followers}</td>
                            </tr>
                            <tr>
                                <td>Following</td>
                                <td>{this.state.userResult.following}</td>
                            </tr>
                            <tr>
                                <td>Public Repos</td>
                                <td>{this.state.userResult.public_repos}</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>{this.state.userResult.location}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.userResult.email}</td>
                            </tr>
                            <tr>
                                <td>Repositories</td>
                                <td><Link to={`/allRepo/${this.state.userResult.login}`}>Details</Link></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            );
            }
            else{
                return(
                    <div>
                        
                        <h2>Loading...</h2>
                        <Spinner animation="border" variant="primary" />
                      
                    </div>
                );
            }
    }
}



export default User;