import React, { Component } from 'react';
import { recipe } from '../tempDetails';
export default class RecipeDetails extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         recipe: recipe,
    //         url:`https://www.food2fork.com/api/get?key=c27d28f4e6f740f30133e1d84a726ca9&rId=${
    //             this.props.id
    //         }`
    //     };
    // }
    // async componentDidMount() {
    //     try{
    //         const data = await fetch(this.state.url);
    //         const jsonData = await data.json();
    //         this.setState({
    //             recipes: jsonData.recipe
    //         });
    //         } catch (error) {
    //         console.log(error);
    //         }
    //     }
    state = {
        recipe: recipe
    };
    async componentDidMount() {
        const id = this.props.id;
        const url = `https://www.food2fork.com/api/get?key=c27d28f4e6f740f30133e1d84a726ca9&rId=${id}`;
        try{
            const data = await fetch(url);
            const jsonData = await data.json();
            this.setState(
                (state,props) => {
                return {recipe: jsonData.recipe };
            },
            ()=>{}
            );
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        // console.log(this.state.recipe);
        const{
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients
        } = this.state.recipe;

    const{ handleIndex } = this.props;  

        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <button type="button"
                                className="btn btn-warning mb-5 text-capitalize"
                                onClick={()=>handleIndex(1)}
                                >
                                back to recipe list
                        </button>
                        <img 
                            src={image_url}
                            className="d-block w-100"
                            alt="recipe"
                            />
                    </div>
                    {/* details section */}
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h3 className="text-uppercase">{title}</h3>
                        <h6 className="text-capitalized text-bolded">provided by {publisher}</h6>
                        <a 
                            href={publisher_url} 
                            className="btn btn-primary mt-2 text-capitalize" 
                            target="_blank"
                            rel="noopener noreferrer">
                            publisher webpage</a>
                        <a 
                            href={source_url} 
                            className="btn btn-success mt-2 mx-3 text-capitalize" 
                            target="_blank"
                            rel="noopener noreferrer">
                            recipe url</a>
                        <ul className="list-group mt-4">
                            <h2 className="mt-3 mb-4">Ingredients</h2>
                            {
                                ingredients.map((item,index) =>
                                {
                                    return(
                                        <li key={index} className="list-group-item text-bolded">
                                        {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
