import React from 'react'

export default function Footer() {
    return (
        <footer>
            {/*Text with background color*/}
            <div className="p-3 mb-2 text-center">
                <div className="row">
                    <div className="col">
                        <div className="mx-auto" style={{width: '250px'}}>
                            Welcome to my page!
                        </div>
                    </div>  
                </div>
            </div>
        </footer>
    )
}
