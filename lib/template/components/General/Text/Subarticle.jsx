/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import Lists from '../List/Lists.jsx';
import Paragraph from './Paragraph.jsx';
import Title from './Title.jsx';

const titleAs = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

/**
 * @class Subarticle
 * @extends {React.Component}
 */
class Subarticle extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let dataArr = [];

        if (this.props.type === 'text' || this.props.type === 'none') {
            for (var i = 0; i < this.props.content.length; ++i) {
                dataArr.push(this.props.content[i].info);
            }

            return ( 
                 <div>
                    <Title 
                        as={titleAs[this.props.titleAs]} 
                        text={this.props.title} />
                    {
                         dataArr.map(function(item, i) {
                             return (
                                <Paragraph 
                                    content={dataArr[i]} />
                             );
                         })
                    }
                 </div>
             );
        } else if (this.props.type === 'default') {
            for (let item of this.props.content) {
                dataArr.push(item);
            }

            return (
                 <div>
                    <Title 
                        as={titleAs[this.props.titleAs]} 
                        text={this.props.title} />
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <Paragraph 
                                    content={dataArr[i]} />
                            );
                        })
                    }
                 </div>
             );
        } else if (this.props.type === 'list') {
            return (
                <div
                    style={{
                        padding: '0 0 1.5em'
                    }}>
                    <Title 
                        as={titleAs[this.props.titleAs]}  
                        text={this.props.title} />
                    <Lists 
                        content={this.props.content}
                        listParam={{
                            bulleted: true,
                            relaxed: true,
                            listType: 'ul'
                        }} />
                </div>
            )
        } else if (this.props.type === 'table') {
            return (
                <div>
                    <Title 
                        as={titleAs[this.props.titleAs]} 
                        text={this.props.title} />
                    <Tables 
                        caption={"Table Caption"}
                        content={this.props.content} />
                </div>
            );
        } else if (this.props.type === 'code') {
            for (let item of this.props.content) {
                dataArr.push(item);
            }

            return (
                <div>
                    <Title 
                        as={titleAs[this.props.titleAs]} 
                        text={this.props.title} />
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <Code 
                                    caption={item.caption}
                                    lang={item.lang}
                                    raw={item.raw} />
                            );
                        })
                    }
                </div>
            );
        } else if (this.props.type === 'formula') {
            for (let item of this.props.content) {
                dataArr.push(item);
            }
            
            return (
                <div>
                    <Title 
                        as={titleAs[this.props.titleAs]}  
                        text={this.props.title} />
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <Formula 
                                    display={item.display}
                                    equation={item.equation}
                                    info={item.info}
                                    inline={item.inline}/>
                            );
                        })
                    }
                </div>
            );
        }
    }
}

/* Export module */
export default Subarticle;