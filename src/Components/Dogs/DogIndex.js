import React, {Component} from 'react';

class FetchPic extends Component {
    constructor(props){
        super(props)
        this.state = {
            img: "",
        }
    }

    newImage = () => {
        window.location.reload();
    }

    componentDidMount(){
        console.log("working so far");
        console.log(this.state.img);
        
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data)=> {
            this.setState({
                img: data.message,
            })
         })
         .catch(console.log);
         console.log(this.state.img);
        }

        render(){
            return (
                <div>
                    <h3>Puppy Photo</h3>
                    <img src = {this.state.img} alt = "puppy" />
                    <button onClick = {this.newImage}>Click for more puppy pics!</button>
                </div>
            );
        }
    }

export default FetchPic;