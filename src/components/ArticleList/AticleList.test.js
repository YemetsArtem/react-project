import React from "react";
import Enzyme, {render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleList from './ArticleList';
import articles from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {
    it('should render article list', () => {
        const container = render(<ArticleList articles={articles} />);  
        expect(container.find(".test__article-list--item").length).toEqual(articles.length); 
    });
});
