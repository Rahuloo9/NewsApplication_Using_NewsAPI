    import React, { Component } from 'react'

export class NewsItem extends Component {

constructor(){
    super();
    console.log("hello newsitem constructor")
}
    render() {
        
let {title,description,imageUrl,newsUrl}= this.props
        return (
      <div className="my-3">
   <div className="card" style={{width:"18rem"}}>
  <img src={!imageUrl?"https://c.ndtvimg.com/2023-06/g68mlm58_ravindra-jadeja-team-india-afp_625x300_10_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{description}....</p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>        
      </div>
    )
  }
}

export default NewsItem
