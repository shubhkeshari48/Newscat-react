import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinerr from './Spinerr'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
      country:"in",
      pageSize:8,
      category:"general"
  }
  static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
  }
  articles = []
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page:1,
      totalResults:38,
      loading:false
      
    }
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=2e0df1453e5b461eafc308fc77b4ec02&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false})
    this.setState({ articles: parsedData.articles,totalresults:parsedData.totalResults })
  }
  async componentDidMount() {
    this.updateNews();
   
  }
  handlePrevClick = async () => {
    this.setState({page:this.state.page-1});
    this.updateNews();

  }
  handleNextClick = async () => {
    this.setState({page:this.state.page+1})
    this.updateNews();
    
    
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center my-5">Newscat- Top Headlines</h1>
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-3" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt}source={element.source.name}/>
              </div>
            })}
          </div>
          <div className="container">
          {this.state.loading&&<Spinerr/>}
          </div>
          <div className="container d-flex justify-content-between my-5">
            <button disabled={this.state.page<=1}  type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News