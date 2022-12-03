import React from 'react'

const Hoc = (Component) => {
    return (
        class extends React.Component {
            state = {
                auth : false
            }
            render() {
                return (
                    <div> {this.state.auth ? <Component name="love you too dar" /> : <h1>my darling not love me </h1>}</div>
                )
            }
        }
    )
}

export default Hoc