import React from 'react'
import ReactDOM from 'react-dom'
import './content.css'

function Content() {
    const changecolor = () => {
        var color="#"+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,"0");
        document.body.style.background=color
    }
    return (
        <div className="CRX-content">
            <div
                className="content-entry"
                onClick={() => {
                    changecolor()
                }}
            >换色</div>
        </div>
    )
}
const app = document.createElement('div')
app.id = 'CRX-container'
document.body.appendChild(app)

ReactDOM.render(<Content />, app)
