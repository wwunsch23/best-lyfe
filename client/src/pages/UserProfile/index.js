import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";

import axios from "axios";
import HabitListItem from "../../components/HabitList";


class UserProfile extends Component {
    state = {
        userInfo: "",
        routine: ""
    };

    componentDidMount() {

        axios.get("/api/user_data")
            .then(res => {
                //   console.log(res.data);
                this.setState({
                    userInfo: res.data
                });

            });

        axios.get("/api/habits")
            .then(res => {
                this.setState({
                    routine: res.data
                })
            })
    }

    render() {

        // console.log(longestStreak)
        const userInfo = this.state.userInfo;
        const routine = this.state.routine;

        return (
            <>

                <Navbar />

                {/*  this button console.logs the streak
        <button onClick={this.getHabitStreak}>CHECK ME</button> */}

                <div className="container">
                    <BodyWrapper title1="Your" title2="Profile">
                        <div id="user-info">
                            {console.log(userInfo)}
                            {console.log(routine)}
                            <img src={userInfo.photo} />
                            <h2>{userInfo.firstName} {userInfo.lastName}</h2>
                            {userInfo.email} <br />
                            {userInfo.phone} <hr />

                            <h2>Routine</h2>
                            
                        </div>
    
                    </BodyWrapper>
                </div>
            </>
                );
            }
        }
        
        export default UserProfile;
