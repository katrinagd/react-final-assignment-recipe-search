import React, { Component } from 'react'

export default class RecipeSearch extends Component {
    render() {
        const{value, handleSubmit, handleChange} = this.props
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5">
                            <h1 className="text-bolded text-center">
                            Search for recipe with{" "}<strong className="text-info">
                            Food2Fork</strong>
                            </h1>
                                <form className="mt-4 text-center" onSubmit={handleSubmit}>
                                <label htmlFor="search" 
                                className="text-capitalize">
                                type recipes separeted by comma
                                </label>
                                <div className="input-group">
                                <input type="text" 
                                name="search" 
                                placeholder="chicken,avocado,shrimp"
                                className="form-control form-control-lg"
                                value={value}
                                onChange={handleChange}/>
                                <button type="submit"
                                className="input-group-text bg-info text-white">
                                <i className="fas fa-search" />
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
