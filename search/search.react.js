import React from 'react';
import {setRepo,setUser,setQuery,setActive} from '../store';
import {connect} from 'react-redux';
import FetchData from '../FetchData/FetchData.react';


class Search extends React.Component {


 onChange= (event) =>{
    this.props.setQuery( this.props.urlMode + event.target.value , this.props.urlMode, this.props.searchMode, this.props.isActive );
    console.log( this.props.query )
 }
 
 
        render() {


        return (
            <div> 
                <nav>
                <div className="alert alert-info" role="alert">
                <strong>Tip!!</strong> After Selecting The Search Mode Type The Query Again
                </div>
                        <div>
                            <div className="btn-group align-Center" role="group" aria-label="Basic example"> 
                                <button type="button" className="btn btn-secondary" onClick={this.props.setUser} label="user">User</button>
                                <button type="button" className="btn btn-secondary" onClick={this.props.setRepo} label="Repo">Repository</button>
                            </div>
                            <br></br><br></br>
                            <div className="input-group">
                                
                                    <span className="input-group-text" id="">{this.props.searchMode}</span><br></br><br></br>
                                
                                <input type="text" id="value" className="form-control" onChange={this.onChange}></input>
                                
                            </div>
                        </div>
                            
                </nav>
                <FetchData></FetchData>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: () => {
            dispatch(setUser);
        },
        setRepo: () => {
            dispatch(setRepo);
        },
        setQuery: (query,urlMode,searchMode,isActive) => {
            dispatch(setQuery(query,urlMode,searchMode,isActive));
        },
        setActive: () =>{
            dispatch(setActive);
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        searchMode: state.searchMode,
        urlMode: state.urlMode,
        query: state.query
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

