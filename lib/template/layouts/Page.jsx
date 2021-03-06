/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Container, Divider } from 'semantic-ui-react';

/* Import components */
import Section from '../components/General/Text/Section.jsx';
import Title from '../components/General/Text/Title.jsx';

/**
 * @class Page
 * @extends {React.Component}
 */
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = this.props.page;
        let title = this.props.title;

        return (
            <Container textAlign='left'>
                <Title
                    as='h1'
                    text={title} />
                {
                    dataArr.map(function(item, i) {
                        return (
                            <div>
                                <Section
                                    content={item}
                                    title={title}
                                    titleAs={0} />
                                <Divider section />
                            </div>
                        );
                    })
                }
            </Container>
        );
    }
}

/* Export module */
export default Page;