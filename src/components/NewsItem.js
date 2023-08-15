import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url,author,date,source}=this.props;
    return (
      <div>
        <div className="card" >
        <span style={{zIndex:'1'}} className="position-absolute top-10 start-50 translate-middle badge rounded-pill bg-danger ">
    {source}
    
  </span>
  <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/tech/img/2023/08/02/1600x900/TweetDeck_1690946612016_1690946621247.png"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" >{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text "><small class="text-body-secondary">by {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem