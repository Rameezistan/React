import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
constructor(){
    super();
    console.log("This is a constructor");

}

  render() {
    return (
      <div className='container'>
        <h2>Conceptify News - Headline News</h2>
        <div className='row'>
          <div className='col-md-4'>
        <NewsItems title="This is title" description="This is description!" imageUrl="https://media.wired.com/photos/65668f0cb38d7a2373721a48/191:100/w_1280,c_limit/Crpyto-Can't-Help-Itself-Business-1400047284.jpg"/>
        </div>
        <div className='col-md-4'>
        <NewsItems title="This is title" description="This is description!"/>
        </div><div className='col-md-4'>
        <NewsItems title="This is title" description="This is description!"/>
        </div>
        </div>
      </div>
    )
  }
}

export default News