import React, { Component } from 'react';


class Resume extends Component {
    render() {
        return <div className="cvBack">
            {/* <div id="cvtext">
                Follow below
                <img
                    src="https://techflourish.com/images/curved-arrow-black-and-white-clipart-24.jpg"
                    alt="Avatar"
                    className="arrow"
                />
                    </div> */}

            <div className="cvLink">
            {/* <div id ="outline"> */}
            {/* <button a href="examplefile.pdf" download>button</button> */}
                <a href="examplefile.pdf" download style={{color: 'red'}}>Download</a>
            </div>
            </div>
        // </div>

    }
}
export default Resume;
        // https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg


//         import React, { Component } from 'react';

// class Resume extends Component {
//     render() {
//         return <div className="cvBack">
//             <div id="cvtext">
//                 Follow below
//                 <img
//                     src="https://techflourish.com/images/curved-arrow-black-and-white-clipart-24.jpg"
//                     alt="Avatar"
//                     className="arrow"
//                 />

//             </div>
//             <div id="cvLink">
//                 <a href="examplefile.pdf" download>DOWNLOAD</a>
//             </div>
//         </div>
//     }
// }
// export default Resume;
//         // https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg



