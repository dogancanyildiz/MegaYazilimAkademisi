import React, { Component } from 'react'
import '../assets/css/Project.css'

class Project extends Component {
    render() {
        return (
            <div className='projects'>
                <h1 className='header-text'>Projects</h1>
                <div className='project'>
                    <div class="column">
                        <div class="card">
                            <h3>DevFest23 Konya</h3>
                            <p>GDG Konya Tarafından Düzenlenmektedir</p>
                            <a href="https://devfest.gdgkonya.com/">DevFest Konya</a>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>DevFest23 Konya</h3>
                            <p>GDG Konya Tarafından Düzenlenmektedir</p>
                            <a href="https://devfest.gdgkonya.com/">DevFest Konya</a>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>DevFest23 Konya</h3>
                            <p>GDG Konya Tarafından Düzenlenmektedir</p>
                            <a href="https://devfest.gdgkonya.com/">DevFest Konya</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Project;