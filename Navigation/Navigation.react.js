import React from 'react';
import  {Route,Switch}  from 'react-router-dom';
import User from '../User/User.react'
import Repository from '../Repository/Repository.react'
import Search from '../search/search.react';
import AllRepo from '../AllRepo/AllRepo.react'


const Navigation = () => {

    return (
        <div >
            <main>
                <Switch>
                <Route exact path="/"  component={Search}></Route>
                <Route exact path="/search"  component={Search}></Route>
                <Route path="/user/:userLogin"  component={User}></Route>
                <Route path="/repo/:userLogin/:repoName"  component={Repository}></Route>
                <Route path="/allRepo/:userLogin"  component={AllRepo}></Route>
                </Switch>
            </main>
        </div>
    );
}

export default Navigation;