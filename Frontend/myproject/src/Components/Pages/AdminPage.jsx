import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Theme from './Theme';
const AdminPage = () => {
  return (
    <div>
    <>
    
    {/* Navigation*/}
    <Sidebar/>
    <div className="content-wrapper">
      <div className="container-fluid">
        {/* Breadcrumbs*/}
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
          
            <h1 href="#">Dashboard</h1>
          </li>
          
        </ol>
        {/* Icon Cards*/}
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-comments" />
                </div>
                <div className="mr-5">26 New Messages!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-warning o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-list" />
                </div>
                <div className="mr-5">11 New Tasks!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-success o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-shopping-cart" />
                </div>
                <div className="mr-5">123 New Orders!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-danger o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-support" />
                </div>
                <div className="mr-5">13 New Tickets!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Area Chart Example*/}
        
        <div className="row">
          <div className="col-lg-8">
            {/* Example Bar Chart Card*/}
            
            {/* Card Columns Example Social Feed*/}
            <div className="mb-0 mt-4">
              <i className="fa fa-newspaper-o" /> News Feed
            </div>
            <hr className="mt-2" />
            <div className="card-columns">
              {/* Example Social Card*/}
              <div className="card mb-3">
                <a href="#">
                  <img
                    className="card-img-top img-fluid w-100"
                    src="https://images.pexels.com/photos/10032950/pexels-photo-10032950.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h6 className="card-title mb-1">
                    <a href="#">David Miller</a>
                  </h6>
                  <p className="card-text small">
                    These waves are looking pretty good today!
                    <a href="#">#surfsup</a>
                  </p>
                </div>
                <hr className="my-0" />
                <div className="card-body py-2 small">
                  <a className="mr-3 d-inline-block" href="#">
                    <i className="fa fa-fw fa-thumbs-up" />
                    Like
                  </a>
                  <a className="mr-3 d-inline-block" href="#">
                    <i className="fa fa-fw fa-comment" />
                    Comment
                  </a>
                  <a className="d-inline-block" href="#">
                    <i className="fa fa-fw fa-share" />
                    Share
                  </a>
                </div>
                <hr className="my-0" />
                <div className="card-body small bg-faded">
                  <div className="media">
                    <img
                      className="d-flex mr-3"
                      src=""
                      alt=""
                    />
                  </div>
                </div>
                
              </div>
              <br/>
              <div className="card mb-3">
                <a href="#">
                  <img
                    className="card-img-top img-fluid w-100"
                    src="https://images.pexels.com/photos/6299291/pexels-photo-6299291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h6 className="card-title mb-1">
                    <a href="#">John Smith</a>
                  </h6>
                  <p className="card-text small">
                    These waves are looking pretty good today!
                    <a href="#">#surfsup</a>
                  </p>
                </div>
                <hr className="my-0" />
                <div className="card-body py-2 small">
                  <a className="mr-3 d-inline-block" href="#">
                    <i className="fa fa-fw fa-thumbs-up" />
                    Like
                  </a>
                  <a className="mr-3 d-inline-block" href="#">
                    <i className="fa fa-fw fa-comment" />
                    Comment
                  </a>
                  <a className="d-inline-block" href="#">
                    <i className="fa fa-fw fa-share" />
                    Share
                  </a>
                </div>
                <hr className="my-0" />
                <div className="card-body small bg-faded">
                  <div className="media">
                    <img
                      className="d-flex mr-3"
                      src=""
                      alt=""
                    />
                  </div>
                </div>
                
              </div>
             
            </div>
            {/* /Card Columns*/}
          </div>
          
          </div>
        
        {/* Example DataTables Card*/}
        
      </div>
     <Theme/>
    </div>
  </>
  
    </div>
  )
}

export default AdminPage
