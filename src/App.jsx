import React from "react";
import { data } from './mock.jsx'
import './style.css'

class App extends React.Component {
    state = {
        list: data,
        selected: {}
    }
    render() {
        const editUser = (selected) => {
            this.setState({ selected })
        };

        const onchangeName = ({ target: { value } }) => {
            this.setState((state) => {
                return {
                    selected: { ...state.selected, name: value }
                }
            })
        };

        const onchangeAge = ({ target: { value } }) => {
            this.setState((state) => {
                return {
                    selected: { ...state.selected, age: value }
                }
            })
        };

        const onchangeAddress = ({ target: { value } }) => {
            this.setState((state) => {
                return {
                    selected: { ...state.selected, address: value }
                }
            })
        };

        const onchangeStatus = ({ target: { value } }) => {
            this.setState((state) => {
                return {
                    selected: { ...state.selected, status: value }
                }
            })
        };

        const onchangeNickname = ({ target: { value } }) => {
            this.setState((state) => {
                return {
                    selected: { ...state.selected, nickname: value }
                }
            })
        };

        const onchangeUniv = ({ target: { value } }) => {
            this.setState((state) => {
                return {
                    selected: { ...state.selected, univ: value }
                }
            })
        };

        const onchangeJob = ({ target: { value } }) => {
            this.setState((state) => {
                return {
                    selected: { ...state.selected, job: value }
                }
            })
        };

        const saveUser = () => {
            let res = this.state.list.map((v) => v.id == this.state.selected.id ? this.state.selected : v)
            this.setState({ list: res, selected: null })
        };

        const deleteUser = (id) => {
            let res = this.state.list.filter(v => v.id != id)
            this.setState({ list: res })
        }
        return (
            <div className="container" >
                <div className="Wrapper">
                    <div className="hero">
                        <h2 className="left">Id</h2>
                        <h2>Name</h2>
                        <h2>Age</h2>
                        <h2>Address</h2>
                        <h2>Status</h2>
                        <h2>Nickname</h2>
                        <h2>Univ</h2>
                        <h2>Job</h2>
                        <h2 className="right">Edit</h2>
                    </div>
                    <div className="promo">
                        {
                            this.state.list.map((v) => {
                                let slc = this.state.selected?.id == v.id
                                return <div className="mapDiv">
                                    <p className="mapInfo left" >{v.id}</p>
                                    <p className="mapInfo" >{slc ? <input className="inp" defaultValue={this.state.selected.name} onChange={onchangeName} /> : v.name}</p>
                                    <p className="mapInfo" >{slc ? <input className="inp" defaultValue={this.state.selected.age} onChange={onchangeAge} /> : v.age}</p>
                                    <p className="mapInfo" >{slc ? <input className="inp" defaultValue={this.state.selected.address} onChange={onchangeAddress} /> : v.address}</p>
                                    <p className="mapInfo" >{slc ? <input className="inp" defaultValue={this.state.selected.status} onChange={onchangeStatus} /> : v.status}</p>
                                    <p className="mapInfo" >{slc ? <input className="inp" defaultValue={this.state.selected.nickname} onChange={onchangeNickname} /> : v.nickname}</p>
                                    <p className="mapInfo" >{slc ? <input className="inp" defaultValue={this.state.selected.univ} onChange={onchangeUniv} /> : v.univ}</p>
                                    <p className="mapInfo" >{slc ? <input className="inp" defaultValue={this.state.selected.job} onChange={onchangeJob} /> : v.job}</p>
                                  <div className="btnWrap right">
                                  {slc == false &&
                                        <button onClick={() => deleteUser(v.id)} className="btn" >Delete</button>
                                    }
                                    {slc ? (
                                        <>
                                            <button onClick={saveUser} className="btn">Save</button>
                                            <button onClick={() => this.setState({ selected: null })} className="btn">Cancel</button>
                                        </>
                                    ) : <button onClick={() => editUser(v)} className="btn" >Edit</button>
                                    }
                                  </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    };
};

export default App;