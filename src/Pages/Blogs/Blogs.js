import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='ml-5 mr-5 rounded bg-lime-300 p-4 mb-5'>
                <h4 className='text-xl'> What are the different ways to manage a state in a React application?</h4>
                <p>There are four main types of state you need to properly manage in your React apps: <br/> 1.Local state,<br/> 2.Global state, <br/>3.Server state,<br/> 4.URL state</p>
            </div>
            <div className='ml-5 mr-5 rounded bg-lime-300 p-4 mb-5'>
                <h4 className='text-xl'> How does prototypical inheritance work?</h4>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='ml-5 mr-5 rounded bg-lime-300 p-4 mb-5'>
                <h4 className='text-xl'>Why should we write unit tests?</h4>
                <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
            </div>
            <div className='ml-5 mr-5 rounded bg-lime-300 p-4 mb-5'>
                <h4 className='text-xl'> React vs. Angular vs. Vue?</h4>
                <p>React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.</p>
                <p>AngularJS, the original framework, is an MVC (Model-View-Controller) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.</p>
                <p>The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.</p>
            </div>
        </div>
    );
};

export default Blogs;