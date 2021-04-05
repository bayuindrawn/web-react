import React, {Component} from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import Product from '../Product/Product';

class Home extends Component {
    render(){
        return(
            <div>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComp 
                    time="7.12" 
                    title="Tutorial RactJs - Bagian 1" 
                    desc="Come learn react the best frontend library .Tutorial RactJs - Bagian 1" />
                
                <YoutubeComp 
                    time="8.12" 
                    title="Tutorial RactJs - Bagian 2" 
                    desc="Come learn react the best frontend library .Tutorial RactJs - Bagian 2" />
                
                <YoutubeComp 
                    time="9.12" 
                    title="Tutorial RactJs - Bagian 3" 
                    desc="Come learn react the best frontend library .Tutorial RactJs - Bagian 3" />
                
                <YoutubeComp 
                    time="10.12" 
                    title="Tutorial RactJs - Bagian 4" 
                    desc="Come learn react the best frontend library .Tutorial RactJs - Bagian 4" />
                
                <YoutubeComp 
                    time="11.12" 
                    title="Tutorial RactJs - Bagian 5" 
                    desc="Come learn react the best frontend library .Tutorial RactJs - Bagian 5" />
                
                <YoutubeComp 
                    title="Tutorial RactJs - Bagian 6" 
                    desc="Come learn react the best frontend library .Tutorial RactJs - Bagian 8" />

                <p>Counter</p>
                <hr />
                <Product />
            </div>
        )
    }
}

export default Home;