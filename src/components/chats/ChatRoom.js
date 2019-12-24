import React, {Fragment, useEffect, useState} from 'react';
import './ChatRoom.css';
import {Requester} from "../../api/requester";
import {Auth} from "../../api/auth";
import toastr from "toastr";

const ChatRoom = props => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Requester.fetchUsers()
            .then(res => {
                setUsers(res.data.filter(u => u.id.toString() !== Auth.getUserId().toString()));
            })
            .catch(err => {
                console.log(err);
                toastr.error(err.response.data.message);
            });
    }, []);

    return (
        <Fragment>
            <div className="messaging">
                <div className="inbox_msg">
                    <div className="inbox_people">
                        <div className="headind_srch">
                            <div className="recent_heading">
                                <h4>Recent</h4>
                            </div>
                            <div className="srch_bar">
                                <div className="stylish-input-group">
                                    <input type="text" className="search-bar" placeholder="Search"/>
                                </div>
                            </div>
                        </div>
                        {users.map(user => (
                            <div className="inbox_chat scroll">
                                <div className="chat_list">
                                    <div className="chat_people">
                                        <div className="chat_ib">
                                            <h5>{user.username} <span className="chat_date">Dec 25</span></h5>
                                            <p>Test, which is a new approach to have all solutions
                                                astrology under one roof.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mesgs">
                        <div className="msg_history">
                            <div className="incoming_msg">
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>Test which is a new approach to have all
                                            solutions</p>
                                        <span className="time_date"> 11:01 AM    |    June 9</span></div>
                                </div>
                            </div>
                            <div className="outgoing_msg">
                                <div className="sent_msg">
                                    <p>Test which is a new approach to have all
                                        solutions</p>
                                    <span className="time_date"> 11:01 AM    |    June 9</span></div>
                            </div>
                        </div>
                        <div className="type_msg">
                            <div className="input_msg_write">
                                <input type="text" className="write_msg" placeholder="Type a message"/>
                                <button className="btn btn-primary float-right" type="button">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ChatRoom;
