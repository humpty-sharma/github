import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

class FetchData extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            result: {},
            isLoaded: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log(this.props.query);
        fetch(this.props.query).then(data=>data.json()).then(data=> {this.setState({result: data, isLoaded: true})});
        console.log(this.state.result);
    }


    
    render() { 
        if(this.props.searchMode === 'Search User'){
            if(this.state.isLoaded){
                return (
                    <div >
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Search</button>
                        <p>Total Results Found : {this.state.result.total_count}</p><br></br>
                        <Table className='table table-striped' variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Avatar</th>
                                    <th>Login</th>
                                    <th>Id</th>
                                    <th>Details</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {  
                                    this.state.result.items.map((eachItem,index)=>{
                                        return <tr key={index}>
                                            <td>{index+1}</td>
                                            <td><img className="img-thumbnail" alt="user" src={eachItem.avatar_url} height="100" width="100"></img></td>
                                            <td>{eachItem.login}</td>
                                            <td>{eachItem.id}</td>
                                            <td><Link to={`/user/${eachItem.login}`}>User Details</Link></td>
                                            </tr>
                                    })
                                }
                            </tbody>
                        </Table>   
                    </div>
                );
            }
            else{
                return(
                    <div>
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Search</button>   
                    </div>
                );
            }
        }
        else{
            if(this.state.isLoaded){
                return (
                    <div >
                        <p>Total Results Found : {this.state.result.total_count}</p><br></br>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Repo Id</th>
                                    <th>Repo Name</th>
                                    <th>Owner Login</th>
                                    <th>Owner Details</th>
                                    <th>Repo Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.result.items.map((eachItem,index)=>{
                                        
                                        return <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{eachItem.id}</td>
                                            <td>{eachItem.name}</td>
                                            <td>{eachItem.owner.login}</td>
                                            <td><Link to={`/user/${eachItem.owner.url}`}>Owner Details</Link></td>
                                            <td><Link to={`/repo/${eachItem.url}`}>Repo Details</Link></td>
                                            </tr>
                                    })
                                }
                            </tbody>
                        </Table>  
                    </div>
                );
            }
            else{
                return(
                    <div>
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Search</button>   
                    </div>
                );
            }
        }
    }
}
   



const mapStateToProps = (state) =>{
    return{
        searchMode: state.searchMode,
        query: state.query,
        userUrl: state.userUrl,
        reposUrl: state.reposUrl

    }
}

export default connect(mapStateToProps)(FetchData);

