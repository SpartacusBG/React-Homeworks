import React from 'react';
import CharacterCard from './character-card'

class CardContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            perviousData: []
        };
        this.loadNextPage = this.loadNextPage.bind(this);
        this.loadPrevPage = this.loadPrevPage.bind(this);
        this.preserveData = this.preserveData.bind(this);
        this.isPagePreserved = this.isPagePreserved.bind(this);
    }

    loadPrevPage(currentPage) {
        const currentPageNumber = currentPage - 1;
        if(this.isPagePreserved(currentPageNumber)) {
            this.props.onClick(currentPageNumber, this.loadPreservedData(currentPageNumber));
            this.loadPreservedData(currentPageNumber);
        } else {
            this.props.onClick(currentPageNumber, false);
        }
    }

    loadNextPage(currentPage) {
        const currentPageNumber = currentPage + 1;
        if (this.isPagePreserved(currentPageNumber)) {
            this.props.onClick(currentPageNumber, this.loadPreservedData(currentPageNumber));
            this.loadPreservedData(currentPageNumber);
        } else {
            this.props.onClick(currentPageNumber, false);
        }
    }

    preserveData({ currentPage, cardList }) {
        let previousStateData = this.state.perviousData;
        const findPage = previousStateData.find((page) => currentPage === page.currentPage);
        if (!findPage) {
            const currentObj = {
                currentPage: currentPage,
                data: cardList
            }
            previousStateData = previousStateData.concat(currentObj);
            this.setState({
                perviousData: previousStateData
            });
        }
    }

    isPagePreserved(currentPage) {
        const previousStateData = this.state.perviousData;
        const findPage = previousStateData.find((page) => currentPage === page.currentPage);
        if (findPage) {
            return true;
        } else {
            return false;
        }
    }

    loadPreservedData(currentPage) {
        const previousStateData = this.state.perviousData;
        const findPage = previousStateData.find((page) => currentPage === page.currentPage);
        return findPage.data;
    }

    componentWillReceiveProps(nextProps) {
        this.preserveData(nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        const { cardList, currentPage } = this.props;
        return (
            <React.Fragment>
            <div>
                {
                    cardList.map(cardItem => {
                        return (
                            <CharacterCard key={cardItem.url} cardItem={cardItem} />
                        );
                    })
                }
            </div>
            <div className='pagination-container'>
                <button 
                    disabled={currentPage <= 1} 
                    onClick={() => this.loadPrevPage(currentPage)}>Prev
                </button>
                <span>{ currentPage }</span>
                <button 
                    onClick={() => this.loadNextPage(currentPage)}>Next
                </button>
            </div>
            </React.Fragment>
        );
    }

    componentDidUpdate(prevProps, prevState) {
    }
}

export default CardContainer;

CardContainer.defaultProps = {
    cardList: [],
    currentPage: 1
};
