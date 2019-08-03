import React, { Component } from 'react';
import { getAllPosts } from '../../util/APIUtils';
import ReactMarkdown  from 'react-markdown';
import CodeBlock from "./CodeBlock";
import { makeStyles } from '@material-ui/styles';
import palette from '../../theme/palette';



class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            page: 0,
            size: 10,
            totalElements: 0,
            totalPages: 0,
            last: true,
            isLoading: false
        };
        this.loadPostList = this.loadPostList.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }


    loadPostList() {
        let promise = getAllPosts();;
        if(!promise) {
            return;
        }
        this.setState({
            isLoading: true
        });
        promise            
        .then(response => {
            const posts = this.state.posts.slice();
            this.setState({
                posts: posts.concat(response),
                page: response.page,
                size: response.size,
                totalElements: response.totalElements,
                totalPages: response.totalPages,
                last: response.last,
                isLoading: false
            })
        }).catch(error => {
            this.setState({
                isLoading: false
            })
        });  
        
    }

    componentDidMount() {
        this.loadPostList();
    }

    componentDidUpdate(nextProps) {
        if(this.props.isAuthenticated !== nextProps.isAuthenticated) {
            // Reset State
            this.setState({
                posts: [],
                page: 0,
                size: 10,
                totalElements: 0,
                totalPages: 0,
                last: true,
                currentVotes: [],
                isLoading: false
            });    
            this.loadPostList();
        }
    }

    handleLoadMore() {
        this.loadPostList();
    }

    render() {

        const useStyles = makeStyles(theme => ({
            h1: {
                color: palette.text.primary,
                fontWeight: 500,
                fontSize: '35px',
                letterSpacing: '-0.24px',
                lineHeight: '40px'
              },
              h2: {
                color: palette.text.primary,
                fontWeight: 500,
                fontSize: '29px',
                letterSpacing: '-0.24px',
                lineHeight: '32px'
              },
              h3: {
                color: palette.text.primary,
                fontWeight: 500,
                fontSize: '24px',
                letterSpacing: '-0.06px',
                lineHeight: '28px'
              },
              h4: {
                color: palette.text.primary,
                fontWeight: 500,
                fontSize: '20px',
                letterSpacing: '-0.06px',
                lineHeight: '24px'
              },
              h5: {
                color: palette.text.primary,
                fontWeight: 500,
                fontSize: '16px',
                letterSpacing: '-0.05px',
                lineHeight: '20px'
              },
              h6: {
                color: palette.text.primary,
                fontWeight: 500,
                fontSize: '14px',
                letterSpacing: '-0.05px',
                lineHeight: '20px'
              },
              subtitle1: {
                color: palette.text.primary,
                fontSize: '16px',
                letterSpacing: '-0.05px',
                lineHeight: '25px'
              },
              subtitle2: {
                color: palette.text.secondary,
                fontWeight: 400,
                fontSize: '14px',
                letterSpacing: '-0.05px',
                lineHeight: '21px'
              },
              body1: {
                color: palette.text.primary,
                fontSize: '14px',
                letterSpacing: '-0.05px',
                lineHeight: '21px'
              },
              body2: {
                color: palette.text.secondary,
                fontSize: '12px',
                letterSpacing: '-0.04px',
                lineHeight: '18px'
              },
              button: {
                color: palette.text.primary,
                fontSize: '14px'
              },
              caption: {
                color: palette.text.secondary,
                fontSize: '11px',
                letterSpacing: '0.33px',
                lineHeight: '13px'
              },
              overline: {
                color: palette.text.secondary,
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.33px',
                lineHeight: '13px',
                textTransform: 'uppercase'
              }
            
        }));

        return (
            this.state.posts.map(post => (
                <ReactMarkdown source={post.content}  renderers={{ 
                    code: CodeBlock, 
                }}
                key={post.id}
                className={useStyles} 
                />   
                            
            ))
        );
    }
            
}



export default Post;