import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
class AllRepo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            result: {},
            isLoaded: false
        }

        
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        console.log(this.props.query);
        fetch("https://api.github.com/users/"+params.userLogin+"/repos").then(data=>data.json()).then(data=> {this.setState({result: data, isLoaded: true})});
        console.log(this.state.result);
    }

    render() {
        if(this.state.isLoaded){
        return (
            <div >
                
                        <Table className='table table-striped' variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Repo Id</th>
                                    <th>Repo Name</th>
                                    <th>Repo Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.result.map((eachItem,index)=>{
                                        return <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{eachItem.id}</td>
                                            <td>{eachItem.name}</td>
                                            <td><Link to={`/repo/${eachItem.owner.login}/${eachItem.name}`}>Repo Details</Link></td>
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
                <h3>Loading...</h3>  
                <Spinner animation="border" variant="primary" />
            </div>
        );
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
export default connect(mapStateToProps)(AllRepo);