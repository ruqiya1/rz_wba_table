import React from "react";
import { data } from './mock.jsx'

class Root extends React.Component {
    state = {
        list: data,
        selected: {}
    }
    render() {
        const Del = (id) => {
            let res = this.state.list.filter((v) => v.id != id)
            this.setState({ list: res })
        };

        const nameFil = ({ target: { value } }) => {
            let res = data.filter((v) => v.name.toLowerCase().includes(value.toLowerCase()))
            this.setState({ list: res })
        };

        const idFil = ({ target: { value } }) => {
            let res = data.filter((v) => String(v.id).includes(value))
            this.setState({ list: res })
        };

        const statusFil = ({ target: { value } }) => {
            let res = data.filter((v) => v.status === value)
            this.setState({ list: res })
        };

        const addUser = () => {
            if (this.state.name.length > 0) {
                this.setState((state) => {
                    return {
                        list: [...state.list, {
                            id: state.list.length + 1,
                            name: state.name,
                            status: state.status,
                        }]
                    }
                })
                this.setState({ name: '' })
            }
        };

        const EditUser = (selected) => {
            this.setState({ selected })
        };

        const chanName = ({ target: { value } }) => {
            this.setState((state) => {
                return {
                    selected: { ...state.selected, name: value }
                }
            })
        };

        const chanSt = ({ target: { value } }) => {
            this.setState((state) => {
                return {
                    selected: { ...state.selected, status: value }
                }
            })
        };

        const onSave = () => {
            let res = this.state.list.map(vl => vl.id == this.state.selected.id == vl.id ? this.state.selected : vl)
            this.setState({ list: res, selected: null })
        };
        return (
            <div>
                <div>
                    <h2>Search</h2>
                    <input onChange={nameFil} type="text" placeholder="Search Name" />
                    <input onChange={idFil} type="number" placeholder="Search id" />
                    <select onChange={statusFil}>
                        <option value="failed">failed</option>
                        <option value="passed">passed</option>
                        <option value="re-exam">re-exam</option>
                    </select>

                    <h2>Create</h2>
                    <input value={this.state.name} onChange={({ target: { value } }) => {
                        this.setState({ name: value })
                    }} type="text" placeholder="Search Name" />
                    <select onChange={({ target: { value } }) => {
                        this.setState({ status: value })
                    }}>
                        <option value="failed">failed</option>
                        <option value="passed">passed</option>
                        <option value="re-exam">re-exam</option>
                    </select>
                    <button onClick={addUser} >Add...</button>
                </div>

                <h2>Table</h2>
                <table border='2px' >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((v) => {
                                let slc = this.state.selected?.id == v.id
                                return <tr>
                                    <td>{v.id}</td>
                                    <td>{slc ? <input defaultValue={this.state.selected.name} onChange={chanName} /> : v.name}</td>
                                    <td>{slc ? <input defaultValue={this.state.selected.status} onChange={chanSt} /> : v.status}</td>
                                    <button onClick={() => Del(v.id)} >Delete</button>
                                    {slc ? (
                                        <>
                                            <button onClick={onSave} >Save</button>
                                            <button onClick={() => this.setState({ selected: null })} >Cansel</button>
                                        </>
                                    ) : <button onClick={() => EditUser(v)} >Edit</button>
                                    }
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    };
}

export default Root;